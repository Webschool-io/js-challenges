const operators = [
  x => y => y * x,
  x => y => y / x,
  x => y => y - x,
  x => y => y + x
]

const matrixBase = [
  [ 2, 4, 6, 8 ],
  [12, 14, 16, 18],
  [20, 24, 28, 32],
  [32, 34, 36, 38],
  [42, 44, 46, 48]
]


const concat = ( acc, cur ) => acc.concat( cur )
const flatten = ( arr ) => arr.reduce( concat, [] )

const makeOperation = ( operators, operatorsValues, op ) => ( num ) => 
  operators[op]( operatorsValues[op] )(num)

const calculate = ( operators ) => ( list, op ) => 
  list.map( makeOperation( operators, operatorsValues, op ) )

const calculateMatrix = ( matrix, calculator, operators ) => 
  matrix.map( calculator( operators ) )

const sumAll = ( out, matrix ) => 
  matrix.concat( out )
        .reduce( ( a, b ) => a + b, 0 )

const [ operatorsValues, ...matrix] = matrixBase

const result = sumAll(  operatorsValues, 
                        flatten( calculateMatrix( matrix, calculate, operators ) ) )
                

console.log(`result: ${result}`)
// result: 494


