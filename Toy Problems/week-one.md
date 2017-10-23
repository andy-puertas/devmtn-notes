## Monday

Create a function expression that will alert your name.

    var myName = function(){
        alert('kylie');
    };

Create a function declaration that logs 'Hello World!' to the console.

    function doingIt(){
        console.log('Hello World!');
    }

Create a function that takes in the variable below as an argument and logs the value of the parameter to the console.

    var str = 'I love code!';
    function logIt(param){
        console.log(param);
    }

    logIt(str);

Create a function that returns a string.

    function stringIt(a){
        return a;
    }

    stringIt("this is a string");
    stringIt("what's up");
    stringIt("even this works");

Create a function that returns an object.

    function objectIt(ok){
        return {
            name:"Kylie",
            age:23,
            place:"Phoenix"
        };
    }

Create a function that returns a function.

    function functioningNow(){
        return function insideFunc(){
            return "I'm in here!";
        }
    }

## Tuesday

Without using `.split`, `.reverse`, or `.join`, write a function that says whether or not a given input is a palindrome.

### Step 1: Clarify - Understand the question - Rewrite this short and concise. 
My function returns true if the given string is the same forwards and backwards. 

### Step 2: Create sample data
- ‘hello’ / 'olleh'
- 'racecar' / 'racecar'
- 'tacocat' / 'tacocat'
- 'echo' / 'ohce'
- 'I like waffles' / 'selffaw ekil I'

### Step 3: Solve Sample Data
- ‘hello’ = false
- 'racecar' = true
- 'tacocat' = true
- 'echo' = false
- 'I like waffles' = false

### Step 4: Signature
`isItAPalindrome(str: string) -> returnBooleanValue`

### Step 5: List code constructs
- an empty string
- string concatenation
- comparison
- a for loop

### Step 6: Pseudo Code
- create var `newStr`
- reverse for loop on str
- `newStr` += letter of for loop index
- return `newStr` === str

### Step 7: Solve
```
var isItAPalindrome = function(str) {
  var newStr = "";
  for (var i= str.length-1; i>=0; i--) {
    newStr += str[i];
  } return newStr === str;
}
```

## Wednesday

Return an array containing the numbers from 1 to N, where N is the parametered value.
N will never be less than 1.

Replace certain values if any of the following conditions are met:
- If the value is a multiple of 3: use the value 'Fizz' instead
- If the value is a multiple of 5: use the value 'Buzz' instead
- If the value is a multiple of 3 & 5: use the value 'FizzBuzz' instead

### Step 1: Restate the instruction in your own words.
My function must return an array containing the numbers from one to N, that loops N number of times, replacing the value with 'Fizz' if it's a multiple of 3, 'Buzz' if it is a multiple of 5, or 'FizzBuzz' if it is a multiple of both.

### Step 2: Create some sample data. What does this data look like?
`[1, 2, 3, 4, 5, 6, ..., 10, ..., 15, ..., 30]`

### Step 3: Create the solution based on the sample data.
`[1, 2, 'Fizz', 4, 'Buzz', 'Fizz', ..., 'Buzz', ..., 'FizzBuzz', ..., 'FizzBuzz']`

### Step 4: Create a signature
```
function whatsFizzBuzz(n: Number) { 
    return arr: Array
}
```

### Step 5: Create some pseudo-code/Define the algorithm
- function whatsFizzBuzz(n: Number) { 
- create an empty array
- loop through 1-n
    - if n is divisble by 3 && 5, push 'FizzBuzz' into array
    - if n is divisible by 3, push 'Fizz' into array
    - if n is divisible by 5, push 'Buzz' into array
- return arr: Array

### Step 6: Identify code constructs
-functyion, for loop, if/else, array, %, ===, push/splice

### Step 7: Create a solution
```
function whatsFizzBuzz(n) {
    var arr = [];
    for (var i=1; i<=n; i++) {
        if (i%3===0 && i%5===0) {
        arr.push('FizzBuzz');
        } else if (i%3===0) {
        arr.push('Fizz');
        } else if (i%5===0) {
        arr.push('Buzz');
        } else arr.push('i'); 
    } 
    return arr;
}
```

## Thursday

In DNA strings, symbols "A" and "T" are complements of each other, as are "C" and "G". Given one side of the DNA, you need to find the complementary side.

### Step 1: Clarify 
Find the correctly assigned string output for each complementary element. 

Swap A to T and T to A

Swap C to G and G to C

### Step 2: Create sample data
- ("ATTC")
- ("GTAT")
- ("TAGG")
- ("GACA")

### Step 3: Solve Sample Data
- ("ATTC"): "TAAG"
- ("GTAT"): "CATA"
- ("TAGG"): "ATCC"
- ("GACA"): "CTGT"

### Step 4: Signature
`dnaReplace(dnaStrand: string) -> string`

### Step 5: List code constructs
- convert string to array "split"
- for loop
- if/else
- join

### Step 6: Pseudo Code
- convert string to an array
- loop through the array
- establish what character we are working with 
- assign new value to character 
- join the array as a string 


### Step 7: Solve
```
function dnaReplace(dnaStrand){
convert string to an array
  var arr = dnaStrand.split("");
loop through the array
establish what character we are working with
assign new value to character 
  for(var i=0; i<arr.length; i++) {
    switch(arr[i]) {
      case 'A':
        arr[i] = 'T';
        break;
      case 'G':
        arr[i] = 'C';
        break;
      case 'C':
        arr[i] = 'G';
        break;
      case 'T':
        arr[i] = 'A';
        break;
    }
join the array as a string   
  }
  return arr.join('');
}
```