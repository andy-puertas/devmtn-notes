# Higher Order Functions in JavaScript
- A higher order function is a like an overlord that controls smaller functions which act as minions.
- A higher order function gets and uses other functions to perform parts.
- Each take in three parameters: item, index, array

## forEach
- Loops over all items in an array
    - `array.forEach(...)`

- Uses a callback function
    - `array.forEach( function(){ } )`
    - `array.forEach( ()=>{ } )`

- Gives the callback function each item 1 at a time
    - `array.forEach( function( item ) { } )`
    - `array.forEach( ( item ) => { } )`

- Also gives the index, and the original array
    - `array.forEach( function( item, index, arr) { } )`
    - `array.forEach( ( item, index, arr) => { } )`

- Must use the arr parameter to change the original array
    - `array.forEach( function( item, index, arr) { arr[index] = 7 } )`
    - `array.forEach( ( item, index, arr) => arr[index] = 7 )`

## map
- Loops through an array and spits out a new array of equal length
- Works just like a `forEach` function
    - array.map( function( item, index, arr) { } )
    - array.map( ( item, index, arr) => { } )

- The callback is used to change/alter/re-map the item
    - `array.map( function(item){ return item + ", eh"})`
    - `array.map( function(item){ return item + 27})`
    - 
            array.map( function(item){ 
                if(item.isDemoted){ 
                    item.isAdmin = false; 
                } else 
                    if(item.isDavidBlaine){ 
                        item.lovesCheezits = true;
                    } return item; 
            })
 
- Anything returned by the callback function is added to a new array
        var array = [1, 2, 4, 10]
        var mapResult = array.map( function( item ) { return item + 10} )
        var mapResult = array.map( ( item ) => item + 10 )
        mapResult === [ 11, 12, 14, 20]
        array === [1, 2, 4, 10]

## filter
- Loops through an array and returns an array with only values we deem worthy 
- Expects a true or false return
- Works just like a forEach function
    - `array.filter( function( item, index, arr) { } )`
    - `array.filter( ( item, index, arr) => { } )`

- The callback is used to check if the item goes into the new array
    - `array.filter( function(item){ return item > 21}) array.filter( (item) => item > 21 )`
    - `array.filter( function(item){ return item.isAdmin } ) array.filter( (item) => item.isAdmin )`

- Return truthy = included. return falsy = excluded.
        var array = [1, 2, 4, 10, 11]
        var filterResult = array.filter( function( item ) { return item % 2 === 0 } )
        var filterResult = array.filter( ( item ) => item % 2 === 0 )
        filterResult === [ 2, 4, 10]
        array === [1, 2, 4, 10, 11]

## reduce
- Works similar to a `forEach` function
- Reduces an array down to a sum
- Only higher order function that does not return an array
- Adds a new prev parameter in the front
    - `array.reduce( function( prev, item, index, arr) { } )`
    - `array.reduce( ( prev, item, index, arr) => { } )`

- Adds a starting value after the function
    - `array.reduce( function( prev, item, index, arr) { }, startingValue )`
    - `array.reduce( ( prev, item, index, arr) => { }, startingValue )`

- Prev is whatever value the previous invocation returned
    - `array.reduce( function( prev, item, index, arr) { return prev + next }, 0 )`
    - `array.reduce( ( prev, item, index, arr) => prev + next, 0 )`

- Reduce is great for running totals
        var array = [1, 2, 4, 10, 11]
        var reduceResult = array.reduce( function( prev, item ) { return prev + item }, 0 )
        var reduceResult = array.reduce( ( prev, item ) => prev + item, 0 )
        reduceResult === 28
        array === [1, 2, 4, 10, 11]

## sort
- Sorts an array