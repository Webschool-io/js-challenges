# Desafio - Multiplicar Matrizes


![Como Multiplicar Matrizes](http://i.imgur.com/oQjZ4zX.jpg)


## Analisando

Como podemos perceber para calcularmos 1 valor da matriz final precisamos:

- pegar a linha da primeira
- pegar a coluna da segunda
- multiplicar o primeiro da linha pelo primeiro da coluna e assim por diante
- somar o valor resultante de cada par (linha, coluna)
- colocar esse valor no seu lugar coreto

Logo possuímos os seguintes macro-problemas para solucionar:

- pegar os valores e calcular
- colocar no seu lugar correto

### Estrutura de Dados

Vamos entender como criamos e acessamos *arrays* no JS, inicialmente vamos cria-las, sendo a `matriz1` uma matriz 2x3 (2 linhas e 3 colunas) e a `matriz2` uma matriz 3x2 (3 linhas e 2 colunas):

```js

const matriz1 = [
  [ 1, 2, 3 ],
  [ 4, 5, 6 ]
]

const matriz2 = [
  [ 7,  8  ],
  [ 9,  10 ],
  [ 11, 12 ]
]

```

> Percebeu que precisamos separar cada linha em um *array*? 
> Pois é dessa forma que criamos *arrays* multi-dimensionais com JS.

Agora vamos analisar a matriz final, ela é uma matriz 2x2:

```js

const matrizResult = [
  [ 58,  64  ],
  [ 139, 154 ]
]

```

> **Por quê?**

> Quando multiplicamos uma matriz por outra, é necessário que o número de colunas da primeira matriz seja igual ao número de linhas da segunda matriz. O resultado dessa multiplicação será uma matriz com o número de linhas da primeira e o número de colunas da segunda.

*fonte: [Multiplicação de Matrizes](http://mundoeducacao.bol.uol.com.br/matematica/multiplicacao-matrizes.htm)*


Guarde bem, isso: **O resultado dessa multiplicação será uma matriz com o número de linhas da primeira e o número de colunas da segunda.** Usaremos logo logo.


### Pegar os valores e calcular

Sabemos que para pegar a linha 

### Colocar no seu lugar correto

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



