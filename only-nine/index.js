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