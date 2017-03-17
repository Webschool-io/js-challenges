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
```

## Funcional Way

## Modularizando



