Getting Started with JavaScript 
===========
## How does the web work?
- `HTTP://` = Hyper Text Transfer Protocol
- => `REST`: Most popular HTTP format
- => `.JSON`: Preferred format for sending data and forth (JavaScript Object Notation)

## Script Tags 
- Used to run your code file on a web page. 
- Done either on the same server as your HTML or on a host site/outside server.
    - syntax: `<script> src = “_____.js” </script>`    

## Variables
- Our primary method for item storage 

        var data;           <= variable declaration
        data = 7;           <= assigning that variable a value
        var data = 7;       <= assignment in its simplest form

- Can be assigned any data type

## Data Types
- **Boolean**: true or false
- **Null**: non-value
    - `null` is _not_ undefined
- **Undefined**: a way to signify there is no value assigned yet, but there could be later
    - for example... if a value is not yet available ( asurvey question not yet answered), this data is not yet received or input anywhere
    - as seen in: `var myVar;` or: `myVar = undefined;`
- **String**
    - as seen in: 

            var myString = “7”;
            var myInt = parseInt(myString, 10);

    - would return the numerical value 7 instead of the value-less “7"
- **Number**
- **Object**: indicated with `{}`
- **Array**: indicated with `[]`, a list, a set of elements. Can contain multiple data types
- **Function**
    - single `=` indicates assignment
    - `==` or `===` indicates comparison (as seen in boolean values)

### Arrays 
- Primary structure for storing multiple items of information
- Index starts at 0 for the first var (instead of 1) - "zero based index"
- `var arr = ['Proper', 'syntax', 'is', 'brackets', 'and', 'commas'];`
- .......... index: .... `0` ............ `1` ........ `2` ......... `3` ......... `4` .......... `5`
#### Manipulating arrays:
- Accessing values: 
    - `arr[0];` <- returns "Proper"
    - `arr[4];` <- returns "and"
- Adding values:
    - `arr.push(this);` <- adds `['this']` to the end of the array
    - `arr.unshift(this);` <- adds `['this']` to the beginning of the array
- Removing values:
    - `arr.pop;` <- removes last item `['commas']` from the end of the array
    - `arr.shift;` <- removes first item `['Proper']` from the beginning of the array
* See [high_order_funcs.md](devmtn-notes/JAVASCRIPT/high_order_funcs.md) and [reference_methods.md](devmtn-notes/JAVASCRIPT/reference_methods.md) for additional array ref methods
- When accessing arrays, you often need to create a loop to "go through" / loop the array
    - For example...

            var threeHellos = [];
            for (var i=0; i<3; i++) {
                threeHellos.push('hello');
            };
            threeHellos; <- has become ['hello', 'hello', 'hello']

# Functions
- Used to save and reuse/repeat code, by using Parameters 
- parameters: outside data being used as an argument in the function

        Function myFunction() {
            console.log(‘hello!’); 
        };

        myFunction(); //calls myFunction. 

Function EXPRESSION | vs | Function DECLARATION:
------------------- | -- | ---------------------
var sayName = function() { } | | function sayName() { }

## … call … invoke … run!
- When you declare a function, you announce its (parameters).
- When you call a function, you specify (arguments). 
- Indexes matter in (parameters). Value type must align. 
- Function declaration is the safer pattern to start with. Less unknown bugs occur in code when using this method. 
- When the function is returned, the function is exited and nothing else within the original function is executed. 
- Basic functionality:
    - C reate —   Post 
    - R ead —     Get
    - U pdate —   Put
    - D elete —   Delete

## Returning Functions from a Function…

        function shoeMachineMaker(color) {
            return function(){
                return color + ‘ ‘ + ‘shoe’;
            }
        };

        greenShoeMaker = shoeMachineMaker(‘green’); // returns the string ‘green shoe’ 

## Scope
- The contact in which values and expressions are “visible.” Global scope is “visible” to all of your code.
- There _is_ a hierarchy. Child scope can have access to parent scopes, but not vice versa. 
    - (We’re in here but they’re out there. We know what in here _and_ out there looks like. They only know what out there looks like.)
    - Rules of scope: “Look up, never down”
    - Lexical Scope:
        - Local variables take priority within a function. 
        - Parent variable vs. child variable all over again

                var lunch = ‘pizza’;
                function myLunch() {
                    var lunch = ‘filet mignon’;
                    function babyLunch() {
                    return lunch;
                    }
                };
                babyLunch; // returns ‘filet mignon’

    - Using `let`:
        - Only valid variable assignment method when used within a parent function
            - aka: must be inside of { curly braces } to be valid. 
        - Does not apply to variable callbacks beyond its own lexical scope. 
        - Vastly more temporary method for assigning value than `var ___ = ___;`
            
                if (true) {
                    let num = 12;
                };
                num = undefined;
                for (let i=0; i<11; i++) {
                    // i is only defined for code inside of { this loop } 
                };          


## Ternary Operator  
- Triggered by the `?`
- `{CONDITIONS} ? {VALID STATEMENT} : {INVALID STATEMENT};`
- For example, using: `var str = “Hello”;`
    - Before use of ternary:  

            if (str.length>3) {             
                newStr = 88;
            } else {
                newStr = 99;
            }

    - After use of ternary: 

            var newStr = str.length>3 ? 88:99;

# Destructuring
- Used to change an unnatttractive object formation to a more readable line of code
- For example, `var name = employee.first_name;` becomes … 
```
var {first_name} = employee;
let {first_name} = employee;
```

- It is possible to use destructuring to refer to a value within parameters of another function 
    - Used often as shorthand in React
    - `function aPerson({name, friends, race}, greeting, age){ } `

## indexOf
- Retrieves the index of a given item
    - `array.indexOf(7)` => Returns the index of the first instance in which it found `7`

- Works with strings, numbers, booleans

        array.indexOf(22)
        array.indexOf("twenty two")
        array.indexOf(false)

    - returns -1 if no match found

- `array.indexOf(18)` -> Returns -1 because 18 is not in the array can start later.
- `array.indexOf(10, 3)` -> Returns the index of 10, but only starts looking at index 3.

## split
- Breaks a string based on a character
    - `"hello, my, name, is, Jeremy".split(',')`

- Hard coded strings or variables
    - `str.split(',')`

- Returns an array with each chunk as a new item

        var splitArr = "hello, my, name, is, Jeremy".split(',')
        splitArr === ["hello", " my", " name", " is", " Jeremy"]