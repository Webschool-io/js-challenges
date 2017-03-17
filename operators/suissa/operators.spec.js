const matrix = [
  [2,4,6,8],
  [12,14,16,18],
  [20,24,28,32],
  [32,34,36,38],
  [42,44,46,48]
]
const exp = matrix[0]
const arrNumbers = matrix.slice(1)
const props = [
  (number, _i) => (number * exp[_i]),
  (number, _i) => (number / exp[_i]),
  (number, _i) => (number - exp[_i]),
  (number, _i) => (number + exp[_i])
]
const op = (arr, _i) => arr.map(_a => props[_i](_a, _i))
const prep = arrNumbers.map((_a, _b) => op(_a, _b))
const concat = [].concat(exp, ...prep)
const sum = concat.reduce((_a, _b) => _a + _b)

console.log(concat, sum)
