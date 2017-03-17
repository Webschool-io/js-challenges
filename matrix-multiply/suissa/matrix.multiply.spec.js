const assert = require( 'assert' )

const operators = [
  x => y => y * x,
  x => y => y / x,
  x => y => y - x,
  x => y => y + x
]


const matriz1 = [
  [ 1, 2, 3 ],
  [ 4, 5, 6 ]
]

const matriz2 = [
  [ 7,  8  ],
  [ 9,  10 ],
  [ 11, 12 ]
]

const matrizResult = [
  [ 58,  64  ],
  [ 139, 154 ]
]

const multiplyMatriz = ( linha, coluna ) => {
  const result = linha.reduce( ( acc, cur, pos ) => {
    acc.push( cur * coluna[pos] )
    return acc
  }, [] ).reduce( (a, b) => a+b)
  return result
}

const getLinha = ( pos, matriz ) => matriz[ pos ]
const getColuna = ( pos, matriz ) => 
  matriz.map( ( arr ) => arr[ pos ] )

const oneValue = multiplyMatriz(  getLinha( 0, matriz1 ), 
                                  getColuna( 0, matriz2 ) 
                                )
console.log('oneValue', oneValue) //58
// const specLenghOfResult = {
//   _title: `Teste se o Array resultante tem o tamanho correto`,
//   _fn: multiplyMatriz,
//   _in: [ matriz1, matriz2 ],
//   _out: matrizResult,
//   calculated: multiplyMatriz( matrizBase, operators )
// }

// console.log(`\n\t multiplyMatriz: ${multiplyMatriz}!`)
// console.log(`\n\t specSumAll.calculated: ${specSumAll.calculated}!`)

// const specMultiply = {
//   _title: `Test multiply a list by 2`,
//   _fn: operators[0],
//   _in: 2,
//   _list: [12, 14, 16, 18],
//   _out: [24, 28, 32, 36],
//   calculated: []

// }


// const runOperation = ( spec ) => 
//   spec._list.map( spec._fn( spec._in ) )

// specMultiply.calculated = runOperation( specMultiply )



const testEqual = ( spec ) => {
  assert.deepEqual( spec._out, spec.calculated )
}
const testLenght = ( spec ) => {
  assert.deepEqual( spec._out, spec.calculated )
}

// const specs = [
//   // specMultiply,
//   specSumAll
// ]

// const runTest = ( test ) => {
//   if ( testSpec( test ) === undefined ){
//     console.log(`\n\t ${test._title} - passou!`)
//     console.log(`\n\t\t Esperado: ${test._out}`)
//     console.log(`\t\t Resultado: ${test.calculated}`)
//   }
// } 

// // Run this shit

// specs.map( runTest )
