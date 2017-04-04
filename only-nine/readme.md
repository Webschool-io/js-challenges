# Desafio - Transforme 99 em 100

Desafio proposto pelo meu aluno [Samuel Verneck](https://github.com/samverneck/).

> Como posso fazer o 99 virar 100 usando somente o número 9?
> 
> Obs: Você pode usar multiplicação, subtração, adição, soma e etc...
> 
> **SÓ PODE USAR O NÚMERO NOVE**


![Link do desafio](https://gist.github.com/samverneck/cebd5151c3615b4abfd025fcd8e02349)


Primeira coisa que pensei foi em criar uma equaçao para isso, assim:

```

99 + fn = 100

```

>
> Por que usar a soma tio Suissa?
> 
> \- Simples, porque para sair de 99 e chegar em 100 você 
> precisa **"apenas"** somar 1, correto?
> 

Logo precisamos criar uma funçao que utilize apenas 9s e resulte em 1.

Pense comigo:

>Se podemos usar a divisao e sabemos que um número dividido por ele mesmo resulta em 1, qual a soluçao mais lógica nesse caso?


```

99 + (9/9) = 100 

```

<br>

> **Pronto!**

# Solution

```

const expect = require('chai').expect

const resultInOne = ( num ) => num / num

const resolveChallenge = ( num ) => resultInOne( num ) + 99

describe('Teste se consegue transformar 99 virar 100 usando somente o número 9',  () => {

  it('99 virou 100?', () => {
    const num = 99
    const result = resolveChallenge( num )
    expect( result ).to.equal( 100 )
  })

})

```
