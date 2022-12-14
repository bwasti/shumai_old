import type { Tensor } from './tensor'
/* GENERATED CODE (gen_binding.py) */
interface TensorOpsInterface {
  rand: () => Tensor
  randn: () => Tensor
  full: (val: number) => Tensor
  identity: () => Tensor
  arange: (end: number, step?: number) => Tensor
  iota: (tileDims?: number[]) => Tensor
  reshape: (shape: number[]) => Tensor
  transpose: (axes: number[]) => Tensor
  tile: (shape: number[]) => Tensor
  nonzero: () => Tensor
  negative: () => Tensor
  logicalNot: () => Tensor
  exp: () => Tensor
  log: () => Tensor
  log1p: () => Tensor
  sin: () => Tensor
  cos: () => Tensor
  sqrt: () => Tensor
  tanh: () => Tensor
  floor: () => Tensor
  ceil: () => Tensor
  rint: () => Tensor
  absolute: () => Tensor
  abs: () => Tensor
  sigmoid: () => Tensor
  erf: () => Tensor
  flip: (dim: number) => Tensor
  clip: (low: Tensor, high: Tensor) => Tensor
  roll: (shift: number, axis: number) => Tensor
  isnan: () => Tensor
  isinf: () => Tensor
  sign: () => Tensor
  tril: () => Tensor
  triu: () => Tensor
  where: (x: Tensor, y: Tensor) => Tensor
  sort: (dim: number) => Tensor
  add: (other: Tensor) => Tensor
  sub: (other: Tensor) => Tensor
  mul: (other: Tensor) => Tensor
  div: (other: Tensor) => Tensor
  eq: (other: Tensor) => Tensor
  neq: (other: Tensor) => Tensor
  lessThan: (other: Tensor) => Tensor
  lessThanEqual: (other: Tensor) => Tensor
  greaterThan: (other: Tensor) => Tensor
  greaterThanEqual: (other: Tensor) => Tensor
  logicalOr: (other: Tensor) => Tensor
  logicalAnd: (other: Tensor) => Tensor
  mod: (other: Tensor) => Tensor
  bitwiseAnd: (other: Tensor) => Tensor
  bitwiseOr: (other: Tensor) => Tensor
  bitwiseXor: (other: Tensor) => Tensor
  lShift: (other: Tensor) => Tensor
  rShift: (other: Tensor) => Tensor
  minimum: (other: Tensor) => Tensor
  maximum: (other: Tensor) => Tensor
  power: (other: Tensor) => Tensor
  matmul: (other: Tensor) => Tensor
  amin: (axes?: number[], keep_dims?: boolean) => Tensor
  amax: (axes?: number[], keep_dims?: boolean) => Tensor
  argmin: (axis: number, keep_dims?: boolean) => Tensor
  argmax: (axis: number, keep_dims?: boolean) => Tensor
  sum: (axes?: number[], keep_dims?: boolean) => Tensor
  cumsum: (axis: number) => Tensor
  mean: (axes?: number[], keep_dims?: boolean) => Tensor
  median: (axes?: number[], keep_dims?: boolean) => Tensor
  var: (axes?: number[], bias?: boolean, keep_dims?: boolean) => Tensor
  std: (axes?: number[], keep_dims?: boolean) => Tensor
  norm: (axes?: number[], p?: number, keep_dims?: boolean) => Tensor
  countNonzero: (axes?: number[], keep_dims?: boolean) => Tensor
  any: (axes?: number[], keep_dims?: boolean) => Tensor
  all: (axes?: number[], keep_dims?: boolean) => Tensor
}
export { TensorOpsInterface }
