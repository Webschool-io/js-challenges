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

const testOneValue = ( pos, [ m1, m2 ] = matrizes, matrizFinal ) => 
  assert.deepEqual( matrizFinal[pos][pos],
                    multipliqueLinhaColuna( pegueLinha( pos, m1 ), 
                                            pegueColuna( pos, m2 ) ) 
                  )

const incremente = ( val ) => ( amount ) => val + amount
const decremente = ( val ) => ( amount ) => val - amount

const counter = () => {
  let count = 0
  return {
    getCount: function getCount() {
      return count
    },
    increment: function increment() {
      count += 1
    }
  }
}

const _contador = counter()

const matrizCalculada = ( [ m1, m2 ] = matrizes ) => {

  return m1.map( ( linha, pos ) => {
    let contador = 0
    let vezes = m1.length
    const valores = []
    const decrementeVezes = decremente( vezes )
      console.log(' _contador',  _contador.increment())
      // console.log(' _contador.increment',  _contador.increment())
      console.log('contador', contador)
  //   while ( decremente( vezes, 1 )) {
  //     valores.push( multipliqueLinhaColuna( pegueLinha( pos, m1 ), 
  //                                           pegueColuna( incremente(contador, 1), m2 ) ) )
  //     // console.log('\nlinha', linha)

  //     // --vezes
  //     // ++contador
  //     // console.log('vezes', vezes)
  //     // console.log('contador', contador)
  //     console.log('\n valores', valores)
  //   }
  //     console.log('\t\t valores', valores)
  //   if ( !vezes ) return valores
  } )

}

console.log( matrizCalculada( [matriz1, matriz2 ]) ) 
// const testTodosValores = ([ m1, m2 ] = matrizes, matrizFinal ) => {

// }
  // assert.deepEqual( matrizFinal[pos][pos],
  //                   multipliqueLinhaColuna( pegueLinha( pos, m1 ), 
  //                                           pegueColuna( pos, m2 ) ) 
  //                 )

// console.log(multipliqueLinhaColuna( pegueLinha( 0, matriz1 ), 
//                                             pegueColuna( 0, matriz2 ) ) ) 
// // 58

// const specOneValue = {
//   title: `Testar se o primeiro valor esta correto`,
//   msgOK: `\n\t Primeiro valor - passou!`,
//   result: testOneValue( 0, [matriz1, matriz2], matrizResult )
// }


// const specTodosValores = {
//   title: `Testar se todos os valores est˜ao corretos`,
//   msgOK: `\n\t Foi que foi - passou!`,
//   result: testTodosValores( [matriz1, matriz2], matrizResult )
// }

// const showTitle = ( msg ) => { console.log(msg); return 1 }
// const runTest = ( spec ) => 
//   ( showTitle( spec.title ) && undefined === spec.result )
//     ? console.log( spec.msgOK )
//     : console.log( `\n\t FUUUUUUU!` )


// runTest( specOneValue )

// const testEqual = ( spec ) => {
//   assert.deepEqual( spec._out, spec.calculated )
// }
// const testLenght = ( spec ) => {
//   assert.deepEqual( spec._out, spec.calculated )
// }
