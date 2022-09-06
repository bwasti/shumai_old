function* range(
  length_or_start: number,
  end_: number | null = null,
  stride_: number | null = null
) {
  let start = 0
  let end: number = length_or_start
  let stride = 1
  if (end_) {
    start = length_or_start
    end = end_
  }
  if (stride_) {
    stride = stride_
  }
  for (let i = start; i < end; i += stride) {
    yield i
  }
}

function shuffle(array: any[]) {
  let curr_idx: number = array.length
  let rand_idx: number

  while (curr_idx != 0) {
    rand_idx = Math.floor(Math.random() * curr_idx)
    curr_idx--
    ;[array[curr_idx], array[rand_idx]] = [array[rand_idx], array[curr_idx]]
  }

  return array
}

export { range, shuffle }
