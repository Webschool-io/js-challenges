const operators = [
  x => y => y * x,
  x => y => y / x,
  x => y => y - x,
  x => y => y + x
]

const concat = ( acc, cur ) => acc.concat( cur )
const flatten = ( arr ) => arr.reduce( concat, [] )

const makeOperation = ( operators, operatorsValues, op ) => ( num ) => 
  operators[op]( operatorsValues[op] )(num)

const calculate = ( operators, operatorsValues ) => ( list, op ) => 
  list.map( makeOperation( operators, operatorsValues, op ) )

const calculateMatrix = ( matrix, calculator, operators, operatorsValues ) => 
  matrix.map( calculator( operators, operatorsValues ) )

const sumAll = ( out, matrix ) => 
  matrix.concat( out )
        .reduce( ( a, b ) => a + b, 0 )

module.exports = ( matrixBase ) => {

  const [ operatorsValues, ...matrix] = matrixBase

  return sumAll( operatorsValues, 
                  flatten( calculateMatrix( matrix, 
                                            calculate, 
                                            operators,
                                            operatorsValues 
                                          ) 
                          ) 
                )
}

