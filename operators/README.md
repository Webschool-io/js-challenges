# Desafio dos operadores básicos

Dado o Array matrix, utilizar a primeira posição como indice dos operadores basicos
[2, 4, 6, 8]

[2] deve multiplicar cada posição [2] * [12, 14, 16, 18] => [24, 28, 32, 36]
[4] deve dividir cada posição [4] / [20, 24, 28, 32] => [5, 6, 7, 8]
[6] deve subtrair cada posição [6] - [32, 34, 36, 38] => [26, 28, 30, 32]
[8] deve somar cada posição [8] + [42, 44, 46, 48] => [50, 52, 54, 56]

Quando todos os calculos forem feitos, os novos valores do array devem ser somados juntamente com o [2, 4, 6, 8] ou seja:

soma ([[2, 4, 6, 8], [24, 28, 32, 36], [5, 6, 7, 8], [26, 28, 30, 32], [50, 52, 54, 56]]) = 494

O resultado final do cálculo é 494