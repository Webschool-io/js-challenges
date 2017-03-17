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

### Verificar o tamanho das matrizes

Para isso criaremos 3 funções:

- conteColunas: Number
- conteLinhas: Number
- possoMultiplicar: Boolean

Dessa forma:

```

const conteColunas = ( matriz ) => matriz[ 0 ].length

const conteLinhas = ( matriz ) => 
  matriz.filter( linha => Array.isArray( linha ) ).length

const possoMultiplicar = ( m1, m2 ) => 
  conteColunas( m1 ) === conteLinhas( m2 )

console.log(`possoMultiplicar: `, possoMultiplicar( matriz1, matriz2 ) 
//true

```


**A malandragem se encontra nessa parte: `const conteLinhas = ( matriz ) => 
  matriz.filter( linha => Array.isArray( linha ) ).length`.**

Pois como precisamos passar em todas suas linhas para conta-las utilizei o `filter` na `matriz` testando se cada `linha` é um Array, caso seja a linha é apenas retornada pelo `filter` e quando finaliza toda a iteração eu apenas conto quantas linhas foram retornadas com o `length` e pronto!

<br>

### Pegar os valores e calcular

Primeiramente precisamos pegar os valores da primeira linha da primeira matriz e da primeira coluna da segunda matriz.

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

const pegueLinha = ( pos, matriz ) => matriz[ pos ]
const pegueColuna = ( pos, matriz ) => matriz.map( ( arr ) => arr[ pos ] )

const primeiraLinha = getLinha( 0, matriz1 )
const primeiraColuna = getColuna( 0, matriz1 )

```

<br>

> **Agora que a cobra vai fumar!**

<br>

Porque iremos criar a função que calcula um valor:

```js

const multipliqueLinhaColuna = ( linha, coluna ) => {
  const result = linha.reduce( ( acc, cur, pos ) => {
    acc.push( cur * coluna[pos] )
    return acc
  }, [] ).reduce( (a, b) => a+b)
  return result
}

```

Melhorando ela deixaremos assim:

```js

const somandoTudo = ( a, b ) => a + b

const multipliquePela = ( coluna ) => ( calculado, valorLinha, pos ) => {
  calculado.push( valorLinha * coluna[ pos ] )
  return calculado
}

const multipliqueLinhaColuna = ( linha, coluna ) => 
  linha.reduce( multipliquePela( coluna ), [] ).reduce( somandoTudo )

console.log(multipliqueLinhaColuna( pegueLinha( 0, matriz1 ), 
                                    pegueColuna( 0, matriz2 ) ) ) 
// 58

```

<br>

Vou explicar como chegamos nesse resultado correto.

<br>

Inicialmente vamos analisar a função `multipliqueLinhaColuna`:

```js

const multipliqueLinhaColuna = ( linha, coluna ) => 
  linha.reduce( multipliquePela( coluna ), [] ).reduce( somandoTudo )

multipliqueLinhaColuna( pegueLinha( 0, matriz1 ), 
                                    pegueColuna( 0, matriz2 ) )

```

Como seus argumentos estamos passando:

- pegueLinha( 0, matriz1 ): linha
- pegueColuna( 0, matriz2 ): coluna

Pois queremos a lista dos valores da linha e coluna da posição `0`, então elas farão esse trabalho para que não precisemos passar manualmente e depois eu começo a reduzir pela linha.

> **\- Como assim reduzir???**


Assim: `linha.reduce( multipliquePela( coluna ), [] )`. Então estamos pegando cada valor da linha e executando a função `multipliquePela( coluna )` e nessa função injetamos a `coluna` que será usada dentro do primeiro `reduce`: `linha.reduce( multipliquePela( coluna ), [] )`.

```js

const somandoTudo = ( a, b ) => a + b

const multipliquePela = ( coluna ) => ( calculado, valorLinha, pos ) => {
  calculado.push( valorLinha * coluna[ pos ] )
  return calculado
}


```

Precisamos injetar a `coluna` pois a nosso `reduce` utilizará a função retornada por `multipliquePela = ( coluna ) =>` que possui a seguinte assinatura `( acc, cur, index )`, entretanto para deixar o código facilmente legível pelos alunos do Ensino Médio coloquei: `( calculado, valorLinha, pos )` onde o `calculado` é o acumulador, o `valorLinha` é o valor atual de cada iteração e `pos`(posição) é o índice da posição atual da iteração.

Então calculamos com `valorLinha * coluna[ pos ]` pois para cada posição da linha você deve multiplicar com o valor da mesma posição da coluna e depois adicionamos esse resultado no *array* `calculado`, retornado esse *array* pois ele sempre entrará na primeira posição como nosso acumulador `calculado`.

<br>

**Sabendo disso podemos ir para o próximo problema!**

<br>

### Colocar no seu lugar correto

Agora fizemos boa parte do nosso trabalho falta **apenas fazer funcionar para toda a Matriz**!!

<br>

> **Apenas, disse ele e saiu correndo.**

<br>


```js

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

console.log( matrizCalculada( [matriz1, matriz2 ]) ) 
// [ [ 58, 64 ], [ 139, 154 ] ]

```

Logo temos na primeira linha os valores `58` e `63`; e na segunda os valores `139` e `154` como a imagem inicial demonstra.

> **Muito fácil né?**

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



