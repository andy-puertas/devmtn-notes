## Objects

### Classes Build Objects
- Using classes as a construct to help us build objects
    - `class Music{} `
        - creates a new mold for the class of `Music`
        - multiple objects anticipated to fill those curly braces 
        - (using keyword `class`)
    
    - `var pop = new Music()` 
        - adds a Pop object as a new object into the class `Music`
        - (using keyword `new`)
    
    - `constructor(album, artist, year)`
        - creates the template, designates arguments necessary to build objects within this class
        - (using keyword `constructor`)

    - `this.album = album;`
        - crucial syntax in building and referencing components of your class
        - allows for long term storage and updates
        - (using keyword `this`)

    - 1: Always start by defining your variable, your object, your class - whatever you are filling with results
    - 2: Use keywords to point to your code and manipulate context

### Accessing Nested Objects in JSON
- You can use a couple of methods to pull information back off your created object
- Dot Notation vs Bracket Notation

        var myStorage = {
            "car": {
                "inside": {
                    "glove box": "maps",
                    "passenger seat": "crumbs"
                },
                "outside": {
                    "trunk": "jack"
                }
            }
        };

        var whatsOutside = myStorage.car.outside;
        var gloveBoxContents = myStorage.car.inside["glove box"];

- You can also use dot notation to modify objects / add new keys and vars to it
- `car.outside.frunk = "charging cord";`

- You can use bracket notation to update objects / work with objects that use numerical keys

        var chameleon = {
            color: 'red',
            texture: 'scaly',
            size: 'medium'
        };

        function changeProp(propName, newValue) {
            chameleon[propName] = newValue;
        };

- `changeProp('color', 'fuscia');`
    - would update the `color` item in `chameleon` to 'fuscia'

### Nesting Functions in an Object
- You can apply a function as a property on an object

        var myCar = {
            miles: 20000,
            drive: function() {
                myCar.miles++;
            }
        };

- `myCar.drive(100);`
    - would add 100 miles to `myCar`'s miles item

### Remember:
- methods on an object cannot access properties on themselves
- Closures!! 
    - instead, add a function beyond the object declaration that refers back to the property
    - use dot notation

            function dogMaker(name, color) {
                return {
                    name: name,
                    color: color
                }
            };

    - `var myDog = dogMaker('Otis', 'black');`
        - creates a dog named `Otis` that is `black` under `myDog`
    - `var TinasDog = dogMaker('Cane', 'grey');`
        - creates a dog named `Cane` that is `grey` under `TinasDog`