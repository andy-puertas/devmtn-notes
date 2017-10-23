## [Tuesday](http://www.codewars.com/kata/counting-duplicates/train/javascript)

// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphanumeric characters, including digits, uppercase and lowercase alphabets.

### Step 1: Clarify - Understand the questions
Create a function that returns the count of duplicate letters and which letters duplicated

### Step 2: Create sample data
- "abcde" 
- "aabbcde" 
- "aabbcdeB" 
- "indivisibility" 
- "Indivisibilities"
- "aa11"

### Step 3: Solve sample data
- "abcde" -> 0 # no characters repeats more than once
- "aabbcde" -> 2 # 'a' and 'b'
- "aabbcdeB" -> 2 # 'a' and 'b'
- "indivisibility" -> 1 # 'i'
- "Indivisibilities" -> 2 # 'i' and 's'
- "aa11" -> 2 # 'a' and '1'

### Step 4: Signature
function countDuplicates(str: string) => {string, number}

### Step 5: List code constructs
- function
- "let"-iables
- split
- join
- filter (returns true false)
- if else

### Step 6: Pseudocode 
- declare function
- declare letiables/constables
- split the array to make it iterable 
- loop through each character against every other character
- if there is a match, track it
- make an object that has the number of repeated character and what those characters were 

### Step 7: Solve
```
function countDuplicates(str) {
  let result = {count: 0, repeatedChars: ''};
  let newString = '';
  // let array = str.split('').filter((character, index, arr) => {
  //   arr.forEach((item, i)=> {
  //     if (item === character && index !== i) {
  //       result.count++;
  //     }
  //   });
  // });
  str = str.split('');
  let duplicates = [];
  for(let i=0; i<str.length; i++) {
    for(let j=i+1; j<str.length; j++) {
      if(str[i] === str[j] && duplicates.indexOf(str[j]) === -1) {
        duplicates.push(str[i])
      }
    }
  }
  return { count: duplicates.length, repeatedChars: duplicates };
}

countDuplicates('Indivisibilities');
```

## Wednesday

Write a function to square every digit of an integer.
The function should accept an integer and return an integer

### Step 1: Clarify - Understand the question
Create a function that squares each digit within a larger integer, returning another integer

### Step 2: Create sample data
- 9119
- 4232

### Step 3: Solve Sample Data
- `squareEveryNum(9119)` => `811181`
- `squareEveryNum(4232)` => `16494`

### Step 4: Signature
`squareEveryNum(num: number) => returns squared: number`

### Step 5: List code constructs
- for loop
- split the number into integers
- convert numbers to strings
- multiply operator

### Step 6: Pseudo Code
- function squareEveryNum(num)
- declare empty arr
- convert num into a string
- turn that string into an array
- for loop over the arr
- multiply each item of the arr against itself, then push into empty arr
- join arr
- convert string back to a number
- return number

### Step 7: Solve
```
function squareEveryNum(num) {
  var newArr = [];
  var arr = ("" + num).split("");
  for(var i=0; i<arr.length; i++) {
    newArr.push(arr[i] * arr[i]);
  }
  
  return +newArr.join('');
}

// squareEveryNum(24567);
```

## Thursday

Your task is to create an array of size n with the values of the Fibonnaci sequence, and reverse the order in which the sequence is displayed.
You can assume that n will always be a positive integer between and including, 1 and 64.

### Step 1: Clarify
Create a function that takes a num as length of sequence, and returns a reversed Fibonacci sequence that meets that size = arr.length, reversed

### Step 3: Create _and_ solve sample data
- `10` => `[34, 21, 13, 8, 5, 3, 2, 1, 1, 0]`
- `6` => `[5, 3, 2, 1, 1, 0]`
- `5` => `[ 3, 2, 1, 1, 0 ]`

### Step 4: Signature
`fibo(size: number) => returns arr: array`

### Step 5: Define constructs
- for loop
- arr.reverse
- arr.push
- i of arr - 2, i - 1

### Step 6: Pseudocode
- declare var arr = empty array 
- split num into an arr 
- for loop over all elements in new arr 
- add i.length - 1 to i.length
- reverse the arr 
- return arr

### Step 7: Solve
```
function fibo(num) {
  var arr = [];
  var oArr = ("" + num).split("");
  for (var i=0; i<oArr.length; i++) {
    arr.push(oArr[i] + oArr[i.length - 1]);
  }
}
```

### solution(Todd)!
```
function fibReverse(size) {
  let sequence = [];
  for (let i=0; i<size; i++) {
    if (i === 0) sequence.push(i)
    else if (i === 1) sequence.push(i)
    else {
      sequence.push(sequence[i - 2] + sequence[i -1])
    }
  }
  return sequence.reverse();
}

fibReverse(90);
```