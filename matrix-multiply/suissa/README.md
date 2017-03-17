# Desafio - Multiplicar Matrizes

![Como Multiplicar Matrizes](http://i.imgur.com/oQjZ4zX.jpg)


## Analisando

Como podemos perceber para calcularmos 1 valor da matriz final precisamos:

- pegar a linha da primeira
- pegar a coluna da segunda
- multiplicar o primeiro da linha pelo primeiro da coluna e assim por diante
- somar o valor resultante de cada par (linha, coluna)
- colocar esse valor no seu lugar coreto


## Testando

Vamos inicialmente criar o teste para calcularmos o primeiro valor:

```js

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

const multiplyMatriz = ( linha, coluna ) => {
  const result = linha.reduce( ( acc, cur, pos ) => {
    acc.push( cur * coluna[pos] )
    return acc
  }, [] ).reduce( (a, b) => a+b)
  return result
}
const getLinha = ( pos, matriz ) => matriz[ pos ]
const getColuna = ( pos, matriz ) => matriz.map( ( arr ) => arr[ pos ] )

const testOneValue = ( pos, [ m1, m2 ] = matrizes, matrizFinal ) => 
  assert.deepEqual( matrizFinal[pos][pos],
                    multiplyMatriz( getLinha( pos, m1 ), 
                                    getColuna( pos, m2 ) ) 
                  )

const specOneValue = {
  title: `Testar se o primeiro valor esta correto`,
  msgOK: `\n\t Primeiro valor - passou!`,
  result: testOneValue( 0, [matriz1, matriz2], matrizResult )
}

const showTitle = ( msg ) => { console.log(msg); return 1 }

const runTest = ( spec ) => //console.log('spec', spec)
  ( showTitle( spec.title ) && undefined === spec.result )
    ? console.log( spec.msgOK )
    : console.log( `\n\t FUUUUUUU!` )


runTest( specOneValue )

```

## Funcional Way

## Modularizando



