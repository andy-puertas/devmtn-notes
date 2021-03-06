# underscore! 
## [underscorejs.org](http://underscorejs.org/)
+ exploring a common library
+ array methods like `forEach`, `map`, `filter` all got their start in the `underscorejs` library
    - `npm i --save underscore`
    - in `app.js` > `import _ from 'underscore';`

## pluck
- convenient means to extrack a list of property values (common-use case for map)
- `_.pluck(list, propertyName)`
- returns the values in an array

## union
- computes the union of passed-in arrays, in order, that are present in one or more of the arrays 
- `_.union(*arrays)`

## intersection
- essentially the opposite of union, displays all that appear in both
- returns all shared values to a new array
- `_.intersection(*arrays)`

## groupBy
- splits a collection into sets, grouped by the result of running each value through iteratee
- if iteratee is a string instead ofa function, groups by the prop named by iteratee on each of the values 
- returns an object

## mapObject
- `_.mapObject(object, iteratee, [context])`
- like map, but for objects
- better than a 'for/in' loop
- returns val/key variables 

## memoize 
- allows us to cache the computed result of a function for later use
- useful for speeding up slow-running computations 
- the cache of memoized values is available as the cache property on the returned function
- `_.memoize(function, [hashFunction])`
    + if passed an option hashFunction, it will be used to compute the hash key for storing the result
    + this is based on arguments to the original function
    + default hashFunction uses first argument to the memoized function as the key 