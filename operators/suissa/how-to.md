# Desafio dos operadores básicos

![phone operators](http://www.zetawebinstitute.com/img/phoneoperators.jpg)

Dado o Array matrix:

```js

const matrix = [
  [2,4,6,8],
  [12,14,16,18],
  [20,24,28,32],
  [32,34,36,38],
  [42,44,46,48]
]

```

Utilizar a primeira posição como índice dos operadores basicos [2, 4, 6, 8]


[2] deve multiplicar cada posição [2] * [12, 14, 16, 18] => [24, 28, 32, 36]
[4] deve dividir cada posição [4] / [20, 24, 28, 32] => [5, 6, 7, 8]
[6] deve subtrair cada posição [6] - [32, 34, 36, 38] => [26, 28, 30, 32]
[8] deve somar cada posição [8] + [42, 44, 46, 48] => [50, 52, 54, 56]

Quando todos os calculos forem feitos, os novos valores do array devem ser somados juntamente com o [2, 4, 6, 8] ou seja:

soma ([[2, 4, 6, 8], [24, 28, 32, 36], [5, 6, 7, 8], [26, 28, 30, 32], [50, 52, 54, 56]]) = 494

O resultado final do cálculo é 494


## Analizando

Temos a seguinte matriz, retirando a dos operadores:

```js

const matrix = [
  [12,14,16,18],
  [20,24,28,32],
  [32,34,36,38],
  [42,44,46,48]
]

```

E colocando cada índice e sua operação ao lado da lista de valores que precisamos executar cada operação fica bem mais facil visualizar o que precisamos fazer:


```js

const matrix = [
  2 * [12,14,16,18],
  4 / [20,24,28,32],
  6 - [32,34,36,38],
  8 + [42,44,46,48]
]

```
Podemos criar um Objeto correlacionando os indices com as operações a serem executadas, por exemplo:

```js

const multiply = x => y => x * y
const divide = x => y => x * y
const minus = x => y => x - y
const sum = x => y => x + y

const operators = {
  multiply,
  divide,
  minus,
  sum
}

```

> Por que vc acha que fiz dessa forma?

Vamos reler o que o desafio propõe:

```

[2] deve multiplicar cada posição [2] * [12, 14, 16, 18] => [24, 28, 32, 36]
[4] deve dividir cada posição [4] / [20, 24, 28, 32] => [5, 6, 7, 8]
[6] deve subtrair cada posição [6] - [32, 34, 36, 38] => [26, 28, 30, 32]
[8] deve somar cada posição [8] + [42, 44, 46, 48] => [50, 52, 54, 56]

```

Entao podemos traduzir isso em JS assim:

```js

const multiplyBy2 = operators.multiply( 2 )
const resultMultiplyBy2 = matrix[ 0 ].map( multiplyBy2 )

console.log(`resultMultiplyBy2: ${resultMultiplyBy2}`)
// resultMultiplyBy2: 24,28,32,36

```

E assim por diante, porém podemos melhorar um pouquinho deixando assim:

```js

const multiply = x => y => x * y
const divide = x => y => x * y
const minus = x => y => x - y
const sum = x => y => x + y

// ops === operators
const ops = {
  multiply,
  divide,
  minus,
  sum
}

const opsValues = [ 2, 4, 6, 8 ]

const opsFunctions = {
  multiply: 0,
  divide: 1,
  minus: 2,
  sum: 3
}

const matrix = [
  [12, 14, 16, 18],
  [20, 24, 28, 32],
  [32, 34, 36, 38],
  [42, 44, 46, 48]
]

const multiplyBy2 = ops.multiply( opsValues[ opsFunctions.multiply ] )
const resultMultiplyBy2 = matrix[ 0 ].map( multiplyBy2 )

```

Agora vamos finalizar para aso outras opções porém deixando mais genérico dessa forma:


```js

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

```

Você deve se perguntar:

> \- E aquele JS Funcional maroto tio Suissa?
>
> Bora pensar então?

## Funcional Way

```js

onst multiply = x => y => y * x
const divide = x => y => y / x
const minus = x => y => y - x
const sum = x => y => y + x

const operators = [
  multiply,
  divide,
  minus,
  sum
]

const matrixBase = [
  [ 2, 4, 6, 8 ],
  [12, 14, 16, 18],
  [20, 24, 28, 32],
  [32, 34, 36, 38],
  [42, 44, 46, 48]
]

const [ operatorsValues, ...matrix] = matrixBase

const makeOperation = ( operators, operatorsValues, op ) => ( num ) => 
  operators[op]( operatorsValues[op] )(num)

const calculate = ( operators ) => ( list, op ) => 
  list.map( makeOperation( operators, operatorsValues, op ) )

const calculateMatrix = ( matrix, calculator, operators ) => 
  matrix.map( calculator( operators ) )

const result = calculateMatrix( matrix, calculate, operators )
console.log(`result: ${result}`)

/**
result: 24,28,32,36,5,6,7,8,26,28,30,32,50,52,54,56
*/

```

Com isso chegamos quase ao final do desafio, faltando apenas fazer o somatório para conferirmos se fizemos corretamente:

```

Quando todos os calculos forem feitos, os novos valores do array devem ser somados juntamente com o [2, 4, 6, 8] ou seja:

soma ([[2, 4, 6, 8], [24, 28, 32, 36], [5, 6, 7, 8], [26, 28, 30, 32], [50, 52, 54, 56]]) = 494

O resultado final do cálculo é 494

```

E claro que é extremamente facil de criarmos essa soluç˜ao, apenas aprecie:


```js

const multiply = x => y => y * x
const divide = x => y => y / x
const minus = x => y => y - x
const sum = x => y => y + x
const concat = ( acc, cur ) => acc.concat( cur )
const flatten = ( arr ) => arr.reduce( concat, [] )

const operators = [
  multiply,
  divide,
  minus,
  sum
]

const matrixBase = [
  [ 2, 4, 6, 8 ],
  [12, 14, 16, 18],
  [20, 24, 28, 32],
  [32, 34, 36, 38],
  [42, 44, 46, 48]
]

const [ operatorsValues, ...matrix] = matrixBase

const makeOperation = ( operators, operatorsValues, op ) => ( num ) => 
  operators[op]( operatorsValues[op] )(num)

const calculate = ( operators ) => ( list, op ) => 
  list.map( makeOperation( operators, operatorsValues, op ) )

const calculateMatrix = ( matrix, calculator, operators ) => 
  matrix.map( calculator( operators ) )

const result = flatten(calculateMatrix( matrix, calculate, operators ))
                .concat( operatorsValues )
                .reduce( ( a, b ) => parseInt(a) + b, 0 )

console.log(`result: ${result}`)
// result: 494


```

Ou até assim, fica ao seu gosto:


```js

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

const [ operatorsValues, ...matrix] = matrixBase

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
        .reduce( ( a, b ) => parseInt(a) + b, 0 )

const result = sumAll(  operatorsValues, 
                        flatten( calculateMatrix( matrix, calculate, operators ) ) )
                

console.log(`result: ${result}`)
// result: 494

```
