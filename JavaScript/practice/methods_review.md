## Practicing Methods

### map()
- `map` loops through an array and spits out a new array of equal length
- `filter` loops through an array and returns an array with only values we deem worthy
```
  var Ross = ['cat bug', 'Richard Simmons', 'Tim Allen', 'George Clooney'];
```
- every higher order function takes in 3 parameters: `item`, `index`, `array`
- `item` can be replaced with literally any var name (i.e. `CoolDudes`)
```
  Ross.map(function(item, index, array){
      console.log(item, index, array)
  })
```
- how do we get these to `console.log` the same values?
```
  for (let i=0; i<Ross.length; i++) {
      console.log(Ross[i], i, Ross)
  }
```
- how can we rewrite this using an arrow function?
- when is it ok to remove the parentheses?
    - when we only have one parameter to return (i.e. only the items)
- reserved word of `'arguments'` returns the values we did not allocate for in our initial param
```
  function test(oneValue) {
      console.log(arguments);
  }
```
- the following function `test` returns an object with each value mapped onto an index: 
```
  test(1, 2, 3, 4, 5, 6, 66);

  {'0': 1,
   '1': 2,
   '2': 3,
   '3': 4,
   '4': 5,
   '5': 6,
   '6': 66
  };
```

- write a `filter` method that takes out every even number:
```
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  numbers.filter( number => !(number % 2)); 
```
- because `filter` expects a boolean

`... to be continued...`