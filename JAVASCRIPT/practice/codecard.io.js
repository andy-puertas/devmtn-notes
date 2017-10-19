// Create a function called 'reversedLooper' that, when passed an array will loop through it backwards and 
// subtract 2 from the last element,
// 1 from the second to last element,
// 0 from the third to last,
// add one to the fourth to last
// add 2 to the fifth to last
// Continue increasing the amount added by 1, until it reaches the front of the array
// Return the list when you are done

function reversedLooper(arr) {
    for (var i=arr.length-1, numToSum=2; i>=0; i--, numToSum--) {
        arr[i] = arr[i] - numToSum;
    } return arr;
};

var arr = [2, 3, 3, 5, 7, 19];
var a = reversedLooper(arr);
a;

// Write a function called 'findInArray' that takes in two parameters,
// the first representing the array to be searched and the second 
// representing the value to be searched for. Return true if the value
// exists in the array. If it doesn't exist, return false.

function findInArray(arr, val) {
    var x = arr.indexOf(val);
    if (x>0) {
        return true;
    } else return false;
};

var arr = [2, 3, 4, 5, 6, 7];
var y = findInArray(arr, 3);
y;

// Create a function called 'looper' that, when passed an array of numbers
// will increment each value in the array by 5 and then return the updated array.
// For example: if the looper function were to be passed [ 2, 7 ] it should return [ 7, 12 ]


