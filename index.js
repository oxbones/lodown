'use strict';

/**
 * identity: designed to return the input argument unchanged
 * 
 * @param value - can be anything
 * @returns original argument unchanged
 * 
 */

 function identity(value) {
    return value;
}
module.exports.identity = identity;


/**
 * typeOf: designed to take an argument and return its data type, e.g. 
 * number, boolean, array.
 * 
 * @param value
 * @returns the argument's data type 
 * 
*/

function typeOf(value) {
    if (value === undefined) {
    return "undefined"
    } else if (Array.isArray(value)) {
      return "array"
    } else if (value == null) {
      return "null"
    } else if (typeof value === "object") {
      return "object"
    } else if (typeof value === "boolean") {
      return "boolean"
    } else if (typeof value === "number") {
      return "number"
    } else if (typeof value === "string") {
      return "string"
    } else {
      return "function"
    }
  }
module.exports.typeOf = typeOf;


/**
 * first: designed to take an array and a number and return the first number 
 * of elements in the array. If the array isn't an array, it returns []. If
 * the number isnt a number, the first item in the array is returned. 
 * 
 * @param array to be truncated
 * @param number of elements to be returned
 * @returns array representing the first number of elements 
 * 
 */

function first(array, num) {
    var result;
    if (!Array.isArray(array)) {
      result = [];
    } else if (isNaN(num)){
      result = array[0]; 
    } else if (num <= 0) {
      result = [];
    } else {
      result = array.slice(0, num) 
    }
    return result
  }
module.exports.first = first;


/**
 * last: designed to take an array and a number and return the last number 
 * of elements in the array. If the array isn't an array, it returns []. If
 * the number isnt a number, the first item in the array is returned. 
 * 
 * @param array to be truncated
 * @param number of elements to be returned
 * @returns array representing the last number of elements from the original array
 * 
 */

function last(array, num) {
    var result;
    if (!Array.isArray(array)) {
      result = [];
    } else if (isNaN(num)){
      result = array[array.length -1]; 
    } else if (num <= 0) {
      result = [];
    } else {
      result = array.slice(-num) 
    }
    return result
  }
module.exports.last = last;


/**
 * indexOf: designed to loop over an array and return the index of the 
 * first occurrance of the value. It returns -1 if value is not in the array. 
 * 
 * @param array to be looped over
 * @param value to be checked if it exists in the array
 * @returns number representing the index of the passed value if it exists
 * 
 */

function indexOf(array, value)  {
    var index = -1; //set initial value to -1
    for (var i = 0; i < array.length; i++) {
      if (array[i] === value) {
        return index = i; // index will be changed if value if found
      } 
    }
    return index;
  }
module.exports.indexOf = indexOf;


/**
 * contains: designed to determine if an array contains a value and
 * return true/false. 
 *  
 * @param array to be checked
 * @param value to be searched for
 * @returns boolean representing whether or not the value exists within the array
 * 
 */

function contains(array, value) {
    return array.includes(value) ? true : false;
  }
module.exports.contains = contains;


/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param a collection over which to iterate
 * @param a function to be applied to each value in the collection
 * @returns nothing
 * 
 */

function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/**
 * unique: designed to remove all duplicate elements of an array
 * and return an array with only unique items
 * 
 * @param  array to be looped over
 * @returns argument array minus any repeated elements
 * 
 */

function unique(array) {
    var uniqueElements = [];
    for (var i = 0; i < array.length; i++) {
        if (this.indexOf(uniqueElements, array[i]) < 0) {
            uniqueElements.push(array[i]);
            //console.log(uniqueElements);
        }
    }
   return uniqueElements;
  }
module.exports.unique = unique;


/**
 * filter: at each element in the given array, call the given 
 * function. If the function resolves to true, push the element
 * into a new array. If the function resolves to false, do nothing
 * 
 * @param array to be looped over
 * @param tester function to be applied to each element
 * @returns new array containing only elements that resolve to true
 * 
 */

function filter(array, func) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
      if (func(array[i], i, array)) {
        result.push(array[i]);
      }
    }
   return result
  }
  module.exports.filter = filter;


/**
 * reject: at each element in the given array, call the  
 * function. If the function resolves to false, push the element
 * into a new array. If the function resolves to true, do nothing
 * 
 * @param array to be looped over
 * @param tester function to be applied to each element
 * @returns new array containing only elements that resolve to false
 * 
 */

 function reject(array, func) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (func(array[i], i, array) === false) {
            newArray.push(array[i]);
        }
    }
    return newArray;
  }
module.exports.reject = reject;


/**
 * partition: designed to take an array and a tester function and
 * sort the elements of the original array by whether they resolve
 * to true or false when the given function is applied to them. 
 * 
 * @param array to be looped over
 * @param tester function to be applied to each element
 * @returns new array of elements sorted into true and false returns
 * 
 */

function partition(array, func) {
    var resolvesTrue = [];
    var resolvesFalse = [];
    var sortedTF = [];
    for (var i = 0; i < array.length; i++) {
        if (func(array[i], i , array)) {
            resolvesTrue.push(array[i]);
          }  else if (func(array[i], i, array) === false) {
              resolvesFalse.push(array[i]);
          } 
      }
      sortedTF.push(resolvesTrue, resolvesFalse);
  return sortedTF;
  }
module.exports.partition = partition;


/**
 * map: designed to apply a function to each element or value in
 * a collection and return an array of each modified element 
 * 
 * @param array or object to be iterated over
 * @param tester function to be applied to each element or value
 * @returns array of elements returned from the tester function
 */

function map(collection, func) {
    var passedValues = [];
    if (Array.isArray(collection)) {
        //iterate though collection to access it's values and indexes
        for (var i = 0; i < collection.length; i++) {
            //call func with args: collection[i], i, collection
            passedValues.push(func(collection[i], i, collection));
        }
    } else if (typeof collection === "object" && collection !== null) {
        for (var key in collection ) {
            passedValues.push(func(collection[key], key, collection));
        }
    }
    return passedValues;
  }
module.exports.map = map;


/**
 * pluck: designed to take an array of objects and return the 
 * values of each key that matches an input property
 * 
 * @param array of objects to be interated over
 * @param string to be checked as a property in the array's objects
 * @returns array containing only values at the property 
 * 
 */

function pluck(array, property) {
    var newItems = []; 
    //use this.map() to iterate through the array over map
         newItems = this.map(array, function(element){
      //returns the value of property in the object element
      return element[property];
   });
   // returns the new array of elements
  return newItems;
  }
  module.exports.pluck = pluck;


/**
 * every: designed to call a function for each element of an array 
 * or each value in an object. If the function returns true for all 
 * elements/values, every returns true. If it returns false for any
 * element/value, every returns false  
 * 
 * @param collection to be iterated over
 * @param function to apply at each iteration
 * @returns boolean - true if the function returns true at all elements, false otherwise
 * 
 */

function every(collection, func) {
    var truthy = true;
    //if function doesnt exist
    if (!func) {
      //if collection is array 
      if (Array.isArray(collection)) {
        //loop over collection
        for (var k = 0; k < collection.length; k++) {
          //if all values are truthy
          if (!collection[k]) {
            truthy = false;
          }
        }
      //if collection is object
      } else if (typeof collection === "object" && collection !== null) {
        //loop over object
        for (var key in collection) {
          //if all values are truthy
          if (collection[key] === false) { 
            //change truthy to false
            truthy = false
          }
        }
      } 
    } else if (Array.isArray(collection)) {
      // loop through collection 
      for (var i = 0; i < collection.length; i++) {
        if (func(collection[i], i, collection) !== true) {
          truthy = false;
        } 
      }
    } else if (typeof collection === "object" && collection !== null) {
    // loop though collection
      for (var key in collection) {
        if (func(collection[key], key, collection) === false ) {
          truthy = false;
        }
      }   
    }
    // if all elements are truthy, then we return true
    return truthy;
  }
  module.exports.every = every;


/**
 * some: designed to call a function for each element of an array 
 * or each value in an object. If the function returns true for any 
 * elements/values, some returns true. If it returns false for all
 * elements/values, some returns false  
 * 
 * @param collection to be iterated over
 * @param function to be applied at each iteration
 * @returns boolean - true if the function returns true at any element, false otherwise
 * 
 */

function some(collection, func) {
  //var falsey = false
  var falsey = false;
  //1. is there a function?
  if (!func) {
    //if collection is array 
    if (Array.isArray(collection)) {
      //loop over collection
      for (var k = 0; k < collection.length; k++) {
        //if any value is true
        if (collection[k]) {
          falsey = true;
        }
      }
    //if collection is object
    } else if (typeof collection === "object" && collection !== null) {
      //loop over object
      for (var key in collection) {
        //if any value is true
        if (collection[key] === true) { 
          //change truthy to false
          falsey = true
        }
      }
    } 
  } else if (Array.isArray(collection)) {
    // loop through collection 
    for (var i = 0; i < collection.length; i++) {
      if (func(collection[i], i, collection) === true) {
        falsey = true;
      } 
    }
  } else if (typeof collection === "object" && collection !== null) {
  // loop though collection
    for (var key in collection) {
      if (func(collection[key], key, collection) === true) {
        falsey = true;
      }
    }   
  }
  // if all elements are truthy, then we return true
  return falsey;
}
module.exports.some = some;


/**
 * reduce: designed to take in an array and a function and return 
 * a single value. The type of value returned is determind by the 
 * seed, or initial return value. If there is no seed given, reduce 
 * will take the first element of the given array as the seed and 
 * begin working with the second element. 
 * 
 * The function is applied to the array, taking the arguments 
 * previous, current, index, and array. At each application, 
 * the seed may be updated based on the code block. 
 * 
 * @param array to be looped over
 * @param function to be applied at each iteration
 * @param seed optional starting value for the return statement
 * @returns single value determined by the seed or the first element as 
 *        modified by the function on each iteration
 * 
 */

function reduce(array, func, seed) {  
    if (seed === undefined) {
        seed = array[0];
        for (var i = 1; i < array.length; i++) {
          seed = func(seed, array[i], i)
        }
      } else {
          for (var i = 0; i < array.length; i++) {
              seed = func(seed, array[i], i)
          }
      }
    return seed;
    }
module.exports.reduce = reduce;


/**
 * extend: concatenates objects. It takes an orginal object and 
 * adds all key-value pairs from as many other objects as are given
 * to the original objects, returning it. 
 * 
 * @param object to be modified
 * @param object(s) to be added to the original object
 * @returns the original object with added key-value pairs
 */

 function extend(object, object1, object2) {
    Object.assign(object, object1, object2);
    return object;
  } 
module.exports.extend = extend;

//THE END//