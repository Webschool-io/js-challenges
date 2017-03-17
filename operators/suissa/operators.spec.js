const assert = require( 'assert' )

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

const specMultiply = {
  _title: `Test multiply a list by 2`,
  _fn: operators[0],
  _in: 2,
  _list: [12, 14, 16, 18],
  _out: [24, 28, 32, 36],
  calculated: []

}

const runOperation = ( spec ) => 
  spec._list.map( spec._fn( spec._in ) )

specMultiply.calculated = runOperation( specMultiply )


const testSpec = ( spec ) => {
  assert.deepEqual( spec._out, spec.calculated )

}

if ( testSpec( specMultiply ) === undefined ){
  console.log(`\n\t ${specMultiply._title} passou!`)
  console.log(`\n\t\t Esperado: ${specMultiply._out}`)
  console.log(`\t\t Resultado: ${specMultiply.calculated}`)
}


// 