## Monday

Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

### Step 1: Clarify  
Create a function that takes a number in seconds and converts it to hours minutes seconds

### Step 2: Create sample data
- 20 -> 20
- 60 -> 1:00
- 180 -> 3:00
- 189 -> 3:09
- 9087 -> 2:31:17

### Step 4: Signature
function timeConvert(seconds: number) -> string

### Step 5: Define constructs
- if conditional 
- division, modulus 
- vars

### Step 6: Pseudocode
- create a function
- declare hours, mins, seconds variable 
- if there are more than 60 seconds, divide by 60 and return the remainder to seconds
- return

### Step 7: Solve
```
function timeConvert(input) {
  let hours = 0,
      minutes = 0,
      seconds = 0;
  if (input > 60) {
    minutes = Math.floor(input / 60); 
    seconds = input % 60;
  } else {
    return input + '';
  } if (minutes > 60) {
    hours = Math.floor(minutes / 60);
    minutes = minutes % 60;
  } else {
    return `${minutes}:${seconds}`;
  }
  `${hours}:${minutes}:${seconds}`;
}
```

## Tuesday

Write a function which will take an array of strings and return an array of strings with the needless directions removed (WEST and EAST, NORTH and SOUTH cancel each other out). If everything cancels out, return an empty array (stay in place);

### Step 1: Clarify  
Create a function that scans an array to see if each item has an opposite, if so, delete

### Step 2: Sample data
- ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"] => ["WEST"]
- ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"] => []
- ["NORTH", "EAST", "EAST", "SOUTH", "WEST"] => ["EAST"]

### Step 4: Signature
function dirReduc(arr: array) => reduced: arr

### Step 5: Define constructs
- function
- if statement
- declare empty arr 
- for loop
- splice
- push

### Step 6: Pseudocode
- loop through arr 
- if arr[i] and arr[i+1] are opposite
- splice both out of arr 
- i -= 2
- return arr 

### Step 7: Solve
```
function dirReduc(arr) {
  for (var i=0; i<arr.length; i++) {
    if (arr[i] === 'NORTH' && arr[i+1] === 'SOUTH') {
      arr.splice(i, 2)
      i -= 2;
    }
    if (arr[i] === 'SOUTH' && arr[i+1] === 'NORTH') {
      arr.splice(i, 2)
      i -= 2;
    }
    if (arr[i] === 'EAST' && arr[i+1] === 'WEST') {
      arr.splice(i, 2)
      i -= 2;
    }
    if (arr[i] === 'WEST' && arr[i+1] === 'EAST') {
      arr.splice(i, 2)
      i -= 2;
    }
  }
  return arr;
}
```

## Wednesday

// Your task is to write function toLeetSpeak that converts a regular english sentence to Leetspeak.
// More about LeetSpeak You can read at wiki -> https://en.wikipedia.org/wiki/Leet
// Consider only uppercase letters (no lowercase letters, no numbers) and spaces.

// For example:

// toLeetSpeak("LEET") returns "1337"
// In this kata we use a simple LeetSpeak dialect. Use this alphabet:

var alphabet = {
  A : '@',  
  B : '8',  
  C : '(',  
  E : '3',  
  G : '6',  
  H : '#',
  I : '!',  
  L : '1',  
  O : '0',  
  S : '$',  
  T : '7',  
  Z : '2'
}

// Step 1: Clarify  
// Create a function that converts each letter to its corresponding LeetSpeak character

// Step 2: Sample data
// toLeetSpeak("LEET") => "1337"
// toLeetSpeak("HELLO") => "#3110"
// toLeetSpeak("SPEAK") => "$P3@K"

// Step 4: Signature
// toLeetSpeak(str: string) => str: string

// Step 5: Define constructs
// str.toUpperCase
// for loop 
// compare unique characters
// .splice 

// Step 6: Pseudocode
// function
// convert to arr
// loop through each letter
// check the character against our leet speaker
// change out the matching letters
// combine back into a str 
// return

// Step 7: Solve
```
function toLeetSpeak(str) {
  return str.toUpperCase().split('').map( (letter)=> leet[letter]);
}

LeetSpeak('LEET')
```