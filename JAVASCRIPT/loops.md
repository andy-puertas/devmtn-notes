# Loops

## What are loops?
- `for` loops - loop through a block of code a number of times 
    - `for ( setup; condition; change ) {}`
        - `setup`: where are you starting?  
            - this runs before anything else in our function
        - `condition`: where does your loop end?
            - this is often designated to be when the array reaches its end (`arr.length)`
        - `change`: what do you want done when your loop finishes?
            - this is often designated as `i++` or `i--` for incremental/decremental loops

                    var myArr = [2, 3, 4, 5, 6];
                    var total = 0;
                    for (var i=0; i<myArr.length; i++) {
                        total += myArr[i];
                    };

    1. Declare and initialize your variables
    2. Use the key word `for() {}`

- `for/in` loops - loop through the properties of an object
    - do not use to loop through arrays where index order is important; use `for` instead

            var drink = {
                Color: 'orange',
                Taste: 'orange',
                Carbonated: true,
                Brand: 'sunkisser'
            };

            for (var key in drink) {
                var value = drink[key];
                if (value === 'orange') {
                    drink[key] = 'cherry';
                }
            }

1. Use the key word `for() {}`
2. Use the `in` keyword to indicate this is a different kind of `for loop (...in...) {}`
3. Need a variable to the left of the `in`
4. Place the object you are looping over to the right of the `in`
    - `for(var key in object) {};`
5. Used to loop over all of the keys in an object

        var obj = {
            x: 7,
            y: 2,
            z: 5
        };
        for(var key in obj) {
            key === x/y/z
        };

6. Commonly paired with square bracket notation to access the object

        for(var key in obj) {
            var value = obj[key];
            - key is a string representing each object 1 at a time
            obj[key] = newValue;
            - square bracket is also used to assign
        };

- `while` loops - loop through a block of code while a specified condition is true
- `do/while` loops - loop through a block of code once, and then repeat the loop while a specified condition is true 