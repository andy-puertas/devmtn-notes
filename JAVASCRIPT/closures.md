# Closures

## Todd's Focus Questions:
- *How is a closure created?*
- *What happens if you have the same variable named on the global scope, and a functional scope?*
- *What is a private variable?*
- *Why would we want to use the module pattern?*

## What are closures?
- An integral component of asynchronous architecture 
- Frequently used in `node.js` or `JQuery`

## What do closures do?
- Help us keep our data secure
    + For example: You have to go through a teller at your bank to deposit or withdraw from your account. Similarly, you have to go through the closure to affect change on your function. 
- Help us remember things when using callbacks (local vs global scope)
    + This is what allows for asynchronous functionality 
- Get rid of unused code when we're done running it, which is why callbacks are so key

## What do they look like?
- A function within a function
    + This means they have access to the enclosing (outer) func's variables in addition to the inner's
    + 3 total scopes available to a closure: its own, outer func's, all globals

            function showName(firstName, lastName) {
                var nameIntro = "your name is ";
                function makeFullName() {
                    return nameInto + firstName + " " + lastName;
                }
                return makeFullName();      <-- this is the closure!!!!!!!! 
            }

## Rules:
1. Closures have access to the other func's variable even after the outer function returns
    - This means we can call the inner func later
2. They store references to the outer func's variables without storing their actual value 
    - For example...

                function celebrityID() {
                    var celebrityID = 999;
                    return {
                        getID: function() {
                            return celebrityID;
                        },
                        setID: function(newID) {
                            celebrityID = newID;
                        };
                    }
                }

                var mjID = celebrityID();   <- calls outer func
                mjID.getID();               <- returns 999
                mjID.setID(567);            <- affects change on outer func's variable
                mjID.getID();               <- returns the new ID value of 567