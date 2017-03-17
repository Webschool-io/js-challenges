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

const conteColunas = ( matriz ) => matriz[ 0 ].length
const conteLinhas = ( matriz ) => 
  matriz.filter( list => Array.isArray( list ) ).length

const possoMultiplicar = ( m1, m2 ) => 
  conteColunas( m1 ) === conteLinhas( m2 )

const somandoTudo = ( a, b ) => a + b

const multipliquePela = ( coluna ) => ( calculado, valorLinha, pos ) => {
  calculado.push( valorLinha * coluna[ pos ] )
  return calculado
}

const multipliqueLinhaColuna = ( linha, coluna ) => 
  linha.reduce( multipliquePela( coluna ), [] ).reduce( somandoTudo )

const pegueLinha = ( pos, matriz ) => matriz[ pos ]
const pegueColuna = ( pos, matriz ) => matriz.map( ( arr ) => arr[ pos ] )


const matrizCalculada = ( [ m1, m2 ] = matrizes ) => {

  return m1.map( ( linha, pos ) => {
    let contador = 0
    let vezes = m1.length
    const valores = []
    while ( vezes ) {
      valores.push( multipliqueLinhaColuna( pegueLinha( pos, m1 ), 
                                            pegueColuna( contador, m2 ) ) )
      --vezes
      ++contador
    }
    if ( !vezes ) return valores
  } )

}

const resultadoFinal = matrizCalculada( [ matriz1, matriz2 ] )

const testeUmValor = ( pos, [ m1, m2 ] = matrizes, matrizFinal ) => 
  assert.deepEqual( matrizFinal[pos][pos],
                    multipliqueLinhaColuna( pegueLinha( pos, m1 ), 
                                            pegueColuna( pos, m2 ) ) 
                  )

const showError = ( expected, received ) => 
  assert.deepEqual( expected, received )

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
  msgOK: `\t Estão todos corretos - parabéns!`,
  result: testeTodosValores( [matriz1, matriz2], matrizResult )
}

const showTitle = ( msg ) => { console.log(msg); return 1 }
const runTest = ( spec ) => 
  ( showTitle( spec.title ) && undefined === spec.result )
    ? console.log( spec.msgOK )
    : console.log( `\n\t FUUUUUUU!` )

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

runTests( specs )
