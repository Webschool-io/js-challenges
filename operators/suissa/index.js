const multiply = x => y => y * x
const divide = x => y => y / x
const minus = x => y => y - x
const sum = x => y => y + x

// ops === operators
const ops = {
  multiply,
  divide,
  minus,
  sum
}

const opsFunctions = {
  multiply: 0,
  divide: 1,
  minus: 2,
  sum: 3
}

const matrixBase = [
  [ 2, 4, 6, 8 ],
  [12, 14, 16, 18],
  [20, 24, 28, 32],
  [32, 34, 36, 38],
  [42, 44, 46, 48]
]

const [ opsValues, ...matrix] = matrixBase

const multiplyByN = ops.multiply( opsValues[ opsFunctions.multiply ] )
const resultMultiplyByN = matrix[ opsFunctions.multiply ].map( multiplyByN )
console.log(`resultMultiplyByN: ${resultMultiplyByN}`)

const divideByN = ops.divide( opsValues[ opsFunctions.divide ] )
const resultDivideByN = matrix[ opsFunctions.divide ].map( divideByN )
console.log(`resultDivideByN: ${resultDivideByN}`)

const minusByN = ops.minus( opsValues[ opsFunctions.minus ] )
const resultMinusByN = matrix[ opsFunctions.minus ].map( minusByN )
console.log(`resultMinusByN: ${resultMinusByN}`)


const sumByN = ops.sum( opsValues[ opsFunctions.sum ] )
const resultSumByN = matrix[ opsFunctions.sum ].map( sumByN )
console.log(`resultSumByN: ${resultSumByN}`)


/**
resultMultiplyByN: 24,28,32,36
resultDivideByN: 5,6,7,8
resultMinusByN: 26,28,30,32
resultSumByN: 50,52,54,56
*/