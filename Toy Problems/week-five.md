## Monday

Write a function that takes in 3 numbers (dimensions of a box) and finds the volume of the box and returns an object that puts the 3 values on an object with appropriate keys, and puts the volume on a 4th key, then returns the object.

### Step 1: Clarify - Understand the question
Create a function that takes in 3 numbers, multiplies them by each other (a x b x c), and returns the product at the end of an array with the original values included 

### Step 3: Solve Sample Data
`5, 5, 5` returns `{length: 5, width: 5, Height: 5, volume: 125}`

`3, 10, 12` returns `{length: 3, width: 10, Height: 12, volume: 360}`

### Step 4: Signature
`findVolume(a: number, b: number, c: number) => {a, b, c, vol}: object`

### Step 5: List code constructs
- a constructor function!
- multiply
- return

### Step 6: Pseudo Code
- assign each value in the object
- figure out volume `(l*w*h)`
- find surfaceArea `((l*w) + (l*h) + (w*h)) * 2`

### Step 7: Solve
```
function BoxVolume(num1, num2, num3) {
  this.length = num1;
  this.width = num2;
  this.height = num3;
  this.volume = num1 * num2 * num3;
  this.surfaceArea = ((this.length * this.height) + (this.height * this.width) + (this.length * this.width))*2;
  this.sayVolume = function() {
    console.log("I'm a box and I'm `${this.volume}` big!");
  };
}

let MyBox = new BoxVolume(5, 5, 5);
MyBox;
MyBox.sayVolume();
// when using a constructor function, always begin with "new"
```

## Tuesday

Create a function that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square, than -1 should be returned. You may assume the parameter is positive.

### Step 1: Clarify  
Write a function that takes a number and returns the next 'perfect' square (another number)

### Step 2 & 3: Create _and_ solve sample data
`findNextSquare(121)` --> returns `144`

`findNextSquare(625)` --> returns `676`

`findNextSquare(114)` --> returns `-1` since `114` is not a perfect

### Step 4: Signature
`findNextSquare(number: num) => number: num`

### Step 5: Pseudocode
- find the square root of the input
- check to see if the square root is an integer
- compare the square root to the rounded down number 
- if they are the same, return -1
- else add one to the square root and square it 
- return that number 

### Step 6: Define constructs 
- `Math.sqrt()`
- `Math.floor()`
- `Number.isInteger`
- `%2`

### Step 7: Solve
```
function findNextSquare(num) {
  const root = Math.sqrt(num);
  if (Number.isInteger(root)) {
    const nextNumber = root +1;
    return nextNumber * nextNumber;
  } else {
    return -1
  }
}
```

## Wednesday

### Step 1: Clarify  
Write a function that takes the index of a letter in a string +1 and multiplies it by that number, returning a string with those letters joined back in a hyphenated string, capitalize the first letter 

### Step 3: Create _and_ solve sample data
`accum("abcd");`    ==>  `"A-Bb-Ccc-Dddd"`

`accum("RqaEzty");` ==>  `"R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"`

`accum("cwAt");`    ==>  `"C-Ww-Aaa-Tttt"`

### Step 4: Signature
`accum(str: string) ==> returns string `

### Step 5: Define constructs
- .split
- (arr[i]+1) * arr[i]
- concat
- toUpperCase / toLowerCase
- .join
- return 

### Step 6: Pseudocode
- set variables, one empty string 
- split the string into an array
- loop over every letter
- repeat each letter a spec number of times 
- push it into the arr 
- join the arr into a string on dashes 

### Step 7: Solve
```
function accum(str){
  str = str.toLowerCase().split("");
  for (let i=0; i<str.length; i++) {
    str[i] = str[i].repeat(i+1);
  }
  return str.join('-')
} 

accum('ReFgjdW')

// Now, do it on one line!
function accum1(str) {
  return str.toLowerCase().split('').map((letter, index) => letter.repeat(index+1)).join('-');
}

accum1('Ghdksk')
```