const props = {
  even: (num) => !(num % 2),
  odd: (num) => (num % 2)
}

const rangeGenerator = ( range ) => 
  [].concat( ...Array( range ).keys() )

const filterByType = ( props, type ) => ( key ) => props[type](key)

const result = (range, type) => 
  rangeGenerator( range ).filter( filterByType( props, type ) )

console.log( `\n even:`, result(20, 'even' ) ) 
console.log( `\n odd:`,  result(20, 'odd')  ) 