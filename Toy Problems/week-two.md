# Monday

Trolls are attacking your comment section!
A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
Your task is to write a function that takes a string and return a new string with all vowels removed
For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

### Step 1: Clarify - Understand the question

### Step 2: Create sample data

### Step 3: Solve Sample Data

### Step 4: Signature

### Step 5: List code constructs

### Step 6: Pseudo Code

### Step 7: Solve

# Tuesday

A printer prints colors represented by the letters "a" through "m". At the end of the print, it puts out a control string to show what colors were printed.  A "good" control string output example might be "aaabbbbhaijjjm" due to the fact that only the letters a through m were used, and no errors (other letters) were used.

When the printer has a malfunction, the control string marks it with a letter that isn't a through m, for example: "aaaxbbbbyyhwawiwjjjwwm".

Write a function, printer_error, which will output the error rate of the printer as a string whose numerator is the number of errors and the denominator the length of the control string. Do not reduce the fraction.

### Step 1: Restate the instruction in your own words.
Create a function that returns the error rate of a printer, in the format of a string with numerator:the total number of error instances that occured  and a denominator:length of the control string

### Step 2: Create some sample data. What does this data look like?
- `("aabcdeem")`
- `("aaacknccryedm")`
- `("abbcchaiim")`
- `("abcdefghijm")`

### Step 3: Create the solution based on the sample data.
- `("aabcdeem")`: `0/8`
- `("aaacknccryedm")`: `4/13`
- `("abxxxaiim")`: `3/9`
- `("abcdefghijm")`: `0/11`

### Step 4: Create a signature
`printerError(colorInput: string) -> string(numerator:number of error instances/denominator:string.length)`

### Step 5: Identify code constructs
- split into array
- for loop 
- if statement
- convert to string

### Step 6: Create some pseudo-code/Define the algorithm
- convert string to an array and split
- create an `errorCount` var
- loop through the array
- if n:z then increase `errorCount`
- return string with `errorCount`/array.length

### Step 7: Create a solution
```
function printerError(str){
  var errorCount = 0;
  var arr = str.split('');
  var testArray = ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  for (var i=o; i<arr.length; i++) {
    for (var k=0; k<testArray.length; k++) {
      if (arr[i] === testArray[k]) {
        errorCount++;
      }
    }
  }
  return errorCount + "/" + arr.length;
}

printerError('aaaooozzz');
```

# Wednesday

Average write a function that takes in an array of numbers as a parameter. find the average of the numbers and return that value.

**Advanced**: before returning the average, round up to the nearest whole value and/or only find the average of even numbers

### Step 1: Clarify - Understand the question
Create a function that adds up every var in an array then divides that sum by the total length

### Step 3: Create _and_ solve sample data

`[1,2,3,4,5,6,7,8,9,10]` returns `5.5`

`[52,6,109,99,78,3,1,-6]` returns `36.5`

`[2,4,6,8,10]` returns `6`

`[3,6,9,12,15,18]` returns `10.5`

### Step 4: Signature
`getAverage(arr: array) => return integer: sum / arr.length`

### Step 5: List code constructs
- var x
- .reduce for loop
- .round
- dividive x

### Step 6: Pseudo Code
- declare function
- declare variables
- new arr and results
- loop through arr to add all numbers
- divide total by arr.length to find avg
- return the avg

### Step 7: Solve
```
function getAverage(arr) {
  let avg = 0;
  let sum = 0;
  for(let i=0; i<arr.length; i++) {
    sum += arr[i]
  }
  return sum / arr.length;
}
getAverage([2,8,12,16]);
```

### Step 8: Solve Advanced Problem
```
function avgFinder(arr) {
  return Math.ceil(arr.reduce((sum, value)=>{
    return sum + value
  }, 0) / arr.length)
}
avgFinder([1,2,3,4,5,6]);
```

# Thursday

Write a function called songDecoder that removes the terrible dubstep sounds from a song, to reveal the original, pure, un-dubstepped beauty.
The input consists of a single non-empty string, consisting only of uppercase English letters, the string's length doesn't exceed 200 characters

### Step 1: Clarify - Understand the question
Create a function that takes a string and returns the value excluding WUB

### Step 3: Create _and_ solve sample data
- `songDecoder("WUBWUBIWUBAMWUBWUBX")` ==> `I AM X`
- `songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")` ==>  `WE ARE THE CHAMPIONS MY FRIEND`

### Step 4: Signature
`songDecoder(str: string) => returns a string`

### Step 5: List code constructs
- function
- vars 
- split

### Step 6: Pseudo Code
- function `songDecoder(str)` 
- declare var arr with str.split('WUB')
- return `arr.join('')`

### Step 7: Solve
```
function songDecoder(str) {
  var arr = str.split('WUB');
  return arr.join('');
}
// this does not remove falsy elements, leaving empty strings behind in our result 

function songDecoder(str) {
  return str.replace(/WUB/g, ' ').split(' ').filter(elem => elem).join(' ');
}
```