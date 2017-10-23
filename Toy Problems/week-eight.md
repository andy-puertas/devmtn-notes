// You will be given a series of fractions in the form of nested arrays.
// E.G. an example argument would be [ [1, 2], [1, 3], [1, 4] ]
// Which would equate to 1/2, 1/3, and 1/4.

// Your job is to write a function that finds the lowest common denominator across all passed-in fractions.
// Then, convert all the fractions to the lowest common denominator, and return them as a string of parentheticals.
// For example, the above argument would return: "(6,12)(4,12)(3,12)"

// Do not assume there will be only 3 fractions.  Your function will need to account for an unknown number of nested arrays.-

function iHateMaths(arr){
  let dumb = false;
  let j = 2;
  // j is the number to check each denominator by, and will eventually be the lcm of the denominators
  while (!dumb){
    // while there is no matching denominators
    let r = 0;
    //when r equals the length of the array that means that we have as all of the denominators matching
    for (let i = 0; i<arr.length; i++){
      if (j % arr[i][1] === 0){
        r++;
        //looping through the original array and adding 1 to r if it is divisable by j
        console.log(arr[i][1]+"this")
        console.log(r+"r");
      }
    }
    if (r >= (arr.length)){
      dumb = true;
      //changing the boolean to say that we have found the lcm
    } else {
      j++;
      // if no lcm is found then we are incrementing j to try again
      console.log(j+"j")
    }
  }
  // rinse repeat until we find an answer
  let dang = "";
  // the empty string that we will turn into the string of parentheticals
  let loser = arr.map((e,i,a)=> {
    //mapping through the array with the known lcm now which is j
    e[0] *= (j / e[1]);
    //finding the multiple of the numerator that matches the lcm
    e[1] = j;
    //setting the lcm to the denominator
    dang += `(${e[0]},${e[1]})`
    //doing string things to make it look pretty
    return e;
  });
  return dang;
  }
  
  iHateMaths([ [1, 2], [1, 3], [1, 4], [3, 7] ]);