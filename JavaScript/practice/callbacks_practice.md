# Practicing Callback Functions
## Objective
- Better understand callbacks in Javascript by completing a series of examples

## Directions
- Write code that makes the thing work

Below is a sample problem:
```
   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });
```

and what you should write is the `sayHi` function that makes the code above work: 
```
   var sayHi = function(str, cb){
    cb(str);
   }
   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });
```    

## Problem #1
- Write a function called `first` that returns the first item of the array using a callback function
```
   var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
   first(names, function(firstName){
     console.log('The first name in names is ' + firstName);
     return firstName;
   });
```


## Problem #2
- Write a function called `last` which returns the last item of the array using a callback function.
```
   last(names, function(lastName){
     console.log('The last name in names is ' + lastName);
     return lastName;
   });
```

## Problem #3
- Write a function called `multiply` that multiplies two numbers. Invoke the callback with the result of the multiplication. 
```
   multiply(4, 3, function(answer){
     console.log('The answer is ' + answer); //should console.log 12
   })
```


## Problem #4
- Write a function called `contains` that checks if a name exists in an array. 
- If it does, invoke the callback with `true` as an argument. 
- If the name does not exist, invoke the callback with `false` as an argument.
```
  contains(names, 'Colt', function(result){
    if(result === true){
      console.log('Colt is in the array');
    } else {
      console.log('Colt is not in the array');
    }
  });
```


## Problem #5 
- Write a function called `uniq` that takes the `names` array and removes all duplicates.
- Invoke the callback with the modified array as an argument.
```
  uniq(names, function(uniqArr){
    console.log('The new names array with all the duplicate items removed is ', uniqArr);
  });
```


## Problem #6
- Write a function called `each` that takes in an array of names. For each name in the array, invoke the callback and pass in the name and the name's `index` as arguments.
```
  each(names, function(item, indice){
    console.log('The item in the ' + indice + ' position is ' + item)
  });
```


## Problem #7
- Write a function called `getUserById` that looks at the array of user objects (`users`) and searches for a user by `id`.
- When the correct user object is found, invoke the callback with the `user` object as an argument.
```
  var users = [
    {
      id: '12d',
      email: 'tyler@gmail.com',
      name: 'Tyler',
      address: '167 East 500 North'
    },
    {
      id: '15a',
      email: 'cahlan@gmail.com',
      name: 'Cahlan',
      address: '135 East 320 North'
    },
    {
      id: '16t',
      email: 'ryan@gmail.com',
      name: 'Ryan',
      address: '192 East 32 North'
    },
  ];
```
```
  getUserById(users, '16t', function(user){
    console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address); 
  });
```