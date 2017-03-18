const assert = require( 'assert' )

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

const Matriz = require('./matrix.multiply')
const resultadoFinal = Matriz.matrizCalculada( [ matriz1, matriz2 ] )

const testeUmValor = ( pos, [ m1, m2 ] = matrizes, matrizFinal ) => 
  assert.deepEqual( matrizFinal[pos][pos],
                    Matriz.multipliqueLinhaColuna(Matriz.pegueLinha( pos, m1 ), 
                                                  Matriz.pegueColuna( pos, m2 ) ) 
                  )

const testeTodosValores = ([ m1, m2 ] = matrizes, matrizFinal ) => {
  matrizFinal.map( (linha, posLinha) => 
    linha.map( (valor, posValor) => 
      ( matrizFinal[posLinha][posValor] === 
        resultadoFinal[posLinha][posValor] )
        ? resultadoFinal[posLinha][posValor]
        : showError(  matrizFinal[posLinha][posValor], 
                      resultadoFinal[posLinha][posValor] )
    )
  )
}
const specUmValor = {
  title: `\n Testar se o primeiro valor esta correto`,
  msgOK: `\t Primeiro valor - passou!`,
  result: testeUmValor( 0, [matriz1, matriz2], matrizResult )
}

const specTodosValores = {
  title: `\n Testar se todos os valores estão corretos`,
  msgOK: `\t Estão todos corretos - parabéns!
  \t Esperado: ${matrizResult}
  \t Recebido: ${resultadoFinal}
  `,
  result: testeTodosValores( [matriz1, matriz2], matrizResult )
}

const showTitle = ( msg ) => { console.log(msg); return 1 }
const showError = ( expected, received ) => 
  assert.deepEqual( expected, received )

const runTests = ( specs ) => 
  specs.map( ( spec ) => 
    ( showTitle( spec.title ) && undefined === spec.result )
      ? console.log( spec.msgOK )
      : console.log( `\n\t FUUUUUUU!` )
  )

const specs = [
  specUmValor,
  specTodosValores
]

console.log('\n Matriz 1: ', matriz1)
console.log(' Matriz 2: ', matriz2)
console.log(' Matriz Final: ', matrizResult)
runTests( specs )
