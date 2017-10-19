## Callbacks
- Can be used to delay a message

        function delayedBirthday() {
            console.log('Happy Late Birthday!');
        }; 
        setTimeout(delayedBirthday, 1000);

- Can be used to determine order in a function

        createWorldPeace(solveWorldHunger);
        // "before we can create World Peace, we must solve World Hunger"

- When using callbacks...

        function takesACallback(num, callbackFunc) {
            callbackFunc(num); // <-- this is the function callback
        };