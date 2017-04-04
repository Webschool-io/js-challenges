const expect = require('chai').expect

const getSquare = ( num ) => num * num
const transformInString = ( something ) => something.toString()
const getHalf = ( something ) => Math.floor( something.length / 2 )

const resolvePeculiarity = ( num ) => {
  const str = transformInString( getSquare( num ) )
  const half = getHalf( str )
  return parseInt( str.slice(0, half) ) + parseInt( str.slice(half) )
}

const resolveChallenge = resolvePeculiarity

describe('Teste essa peculiaridade',  () => {

  it('Se 9 ^ 2 = 81 entao 8 + 1 deve ser 9', () => {
    const num = 9
    const result = resolveChallenge( num )
    expect( result ).to.equal( num )
  })

  it('Se 45 ^ 2 = 2025 entao 20 + 25 deve ser 45', () => {
    const num = 45
    const result = resolveChallenge( num )
    expect( result ).to.equal( num )
  })

  it('Se 55 ^ 2 = 3025 entao 30 + 25 deve ser 55', () => {
    const num = 55
    const result = resolveChallenge( num )
    expect( result ).to.equal( num )
  })


  it('Se 99 ^ 2 = 9801 entao 98 + 01 deve ser 99', () => {
    const num = 99
    const result = resolveChallenge( num )
    expect( result ).to.equal( num )
  })

  it('Se 297 ^ 2 = 88209 entao 88 + 209 deve ser 297', () => {
    const num = 297
    const result = resolveChallenge( num )
    expect( result ).to.equal( num )
  })

  it('Se 703 ^ 2 = 88209 entao 494 + 209 deve ser 703', () => {
    const num = 703
    const result = resolveChallenge( num )
    expect( result ).to.equal( num )
  })

  it('Se 999 ^ 2 = 998001 entao 494 + 209 deve ser 999', () => {
    const num = 999
    const result = resolveChallenge( num )
    expect( result ).to.equal( num )
  })

})