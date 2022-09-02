import * as sm from '@shumai/shumai'

const iters = 1000
const N = 32
const hidden = 32

class Linear {
  constructor(inp_dim, out_dim) {
    this.weight = sm.randn([inp_dim, out_dim])
    this.bias = sm.randn([1, out_dim])
    this.weight.requires_grad = true
    this.bias.requires_grad = true
  }

  forward(x) {
    x = x.matmul(this.weight)
    return x.add(this.bias)
  }
}

function relu(x) {
  return x.maximum(sm.scalar(0))
}

const x = sm.randn([N, 1])
const y = x.mul(sm.scalar(4))

const l0 = new Linear(1, hidden)
const l1 = new Linear(hidden, hidden)
const l2 = new Linear(hidden, 1)

function model(x) {
  x = l0.forward(x)
  x = relu(x)
  x = l1.forward(x)
  x = relu(x)
  x = l2.forward(x)
  return x
}

function mse(a, b) {
  const c = a.sub(b)
  return c.mul(c).mean()
}

const lr = 1e-3
const optimize = (...args) => {
  const upd = (v) => {
    const o = v.detach().add(v.grad.detach().mul(sm.scalar(-lr)))
    o.eval()
    o.requires_grad = true
    v.grad = null
    return o
  }
  const opt = (l) => {
    for (let key in l) {
      const t = l[key]
      if (t.constructor === sm.Tensor && t.requires_grad) {
        l[key] = upd(t)
      }
    }
  }
  for (let a of args) {
    opt(a)
  }
}

const zero_grad = (...args) => {
  const zg = (l) => {
    for (let key in l) {
      const t = l[key]
      if (t.constructor === sm.Tensor && t.requires_grad) {
        t.grad = null
      }
    }
  }
  for (let a of args) {
    zg(a)
  }
}

const show_timing = false
let floss = 0
function step() {
  zero_grad(l0, l1, l2)
  const t0 = performance.now()
  const y_hat = model(x)
  const t1 = performance.now()
  const l = mse(y, y_hat)
  floss = l;
  const t2 = performance.now()
  const stat = l.backward()
  const t3 = performance.now()
  optimize(l0, l1, l2)
  const t4 = performance.now()
  if (show_timing) {
    console.log('fwd', t1 - t0)
    console.log('mse', t2 - t1)
    console.log('bwd', t3 - t2)
    const tot = stat[4] - stat[0]
    const b0 = stat[1] - stat[0]
    const b1 = stat[2] - stat[1]
    const b2 = stat[3] - stat[2]
    const b3 = stat[4] - stat[3]
    console.log('  create jacobian', Math.round((100 * b0) / tot) + '%')
    console.log('  reverse graph', Math.round((100 * b1) / tot) + '%')
    console.log('  toposort', Math.round((100 * b2) / tot) + '%')
    console.log('  exec grad', Math.round((100 * b3) / tot) + '%')
    for (let k of Object.keys(stat[5])) {
      console.log('    ', k, ':', stat[5][k], '(count, ms)')
    }
    console.log('opt', t4 - t3)
    console.log('(whole step:', t4 - t0, ')')
    console.log('curr bytes used', Number(sm.bytesUsed()) / 1e6, 'MB')
  }
}

step()
const traint0 = performance.now()
for (let i = 0; i < iters; ++i) {
  step()
}
const traint1 = performance.now()
console.log('train at', iters / ((traint1 - traint0) / 1e3), 'iters/sec')
console.log('final loss', floss.toFloat32())
