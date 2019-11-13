'use strict';

// YOU KNOW WHAT TO DO //

/** identity: Designed to take a value given, and return the value without any changes.
 * 
 *  @param {Array, Number, Boolean, Undefined, String, Object, Null} - Anything - any value.
 * 
 *  @return {Array, Number, Boolean, Undefined, String, Object} Returns the value given unchanged.
 *
 */
function identity(value) { 
      return value;
}
module.exports.identity = identity;

/** typeOf:  Designed to check the data type of a particular operand.
 *  @param {String, Sarray, Object, Undefined, Number, Boolean, Null, Function} - Any data type.
 *  @return {String} Returns a string of the data type.
 */
function typeOf(value){
    if (Array.isArray(value)){
       return "array";
    } else if (value === null){
       return "null";
    }
       else {return typeof(value)}
}
module.exports.typeOf = typeOf;

/** 
 *  first: Designed to give the value of the first element(0 index) of an array.Returns an empty list
 *  if number is less than zero, and returns the entire array if number is greater than array.length.
 * 
 * @param {Array, Number} Array is used to hold the array of elements, number gives the number of eleemnts wanted.
 * 
 * @return {Element of Array] Returns the first element along with all of its properties; if a number is given, it 
 * returns the first items listed in the range. ex: 2 would output the first two numbers.
 */
function first(array, number){
    let empArr = [];
    if(Array.isArray(array) === false){
        return  empArr;
    }
    else if(number === undefined || null || NaN){
        return array[0];
    } 
    else if(number > -1){
        return array.slice(0, number);
    }
    else if(number < 0){
        return empArr;
    }
    else if(number > array.length){
        return array;
    }
    else {return array[0];}
};
module.exports.first = first;

/**
 * last: Designed to give the value of the last element(array.length - 1)) of an array.Returns an empty list
 *  if number is less than zero, and returns the entire array if number is greater than array.length.
 * 
 * @params {Array, Number}  Array is used to hold the array of elements, number gives the number of eleemnts wanted.
 * 
 * @return {Element of Array} Returns the last number in array; if a number is given, it returns the last
 * numbers given - ex: the number 2 listed would output two values. 
 */
function last(array, number) {
    let empArr = [];
    // for (let i = array.length; i >= number -1; i--) {
    if(Array.isArray(array) === false){
        return  empArr;
    }
    else if(number === undefined || null || NaN){
        return array[array.length -1];
    } 
    else if(number > array.length){
        return array;
    }
    else if(number > -1){
        return array.slice(1, array.length);
    }
    else if(number < 0){
        return empArr;
    }
    else {return array[0];}
    // }
};
module.exports.last = last;

/** 
 * indexOf: Designed to give the index of the elements whose positions we are trying to find. It 
 * returns -1 when an item is not found. If a value has multiple occurance, it returns only the 
 * first occurance of the value. 
 * 
 * @param {Array, Value} Array is used to hold the array of elements, value is the item/value we are 
 * looking for in the array.
 * 
 * @return {Index} Returns the index of the value given in the argument.
 */
function indexOf(array, value) {
       for(var i = 0; i < array.length; i++){
       if(array[i] === value){
          return i;
        }
    }
    return -1;
}
module.exports.indexOf = indexOf; 
 
/** contains: Designed to determine whether an array contains a certain value using a ternary operator.
 * It should not convert types when comparing and it should return false if the list does not contain an element.
 * 
 * @param {Array, Value} Array is used to hold the array of elements, value is the item/value that
 * we are looking for in the array.
 * 
 * @return {Boolean} Returns true if value is one of the elements of the array, false if not.
*/
function contains(array, value){
    return array.includes(value) ?  true : false;

};    
module.exports.contains = contains;

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
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
 * unique: Designed to loop over an array and uses the indexOf function to filter out
 * duplicate values, returning an array that contains unique values.
 * 
 * @param {Array} Holds the array used to iterate.
 * 
 * @return {Array} Returns a new array of all elements from array with duplicates removed
 */
function unique(array){
    var newArray = [];
    for(let i=0; i<array.length; i++){ 
    if (indexOf(array, array[i]) === i){
       newArray.push(array[indexOf(array, array[i])]); 
       } 
   }
   return newArray;
};
module.exports.unique = unique;

/** filter: Designed to create a new array with all elements that passed the test implemented.
 * 
 * @params: {Array, Function} The array that the function is called upon. Function is the callback
 * used to test each element of the array. It accepts three arguments: element, index, and array,
 * and returns true to keep the element, false otherwise.
 * 
 * @return: A new array with the elements that pass the test. If no element passed the test, an
 * emplty array is returned. 
 */
function filter(array, func) {
    let arr = [];
         each(array,function(e,i,a){
        if(func(e,i,a) === true){
            arr.push(e);
        }
    });
        return arr;
}
module.exports.filter = filter;

/** 
 * reject: 
 * Arguments: Designed to create a new array from elements that returned a fale value from call
 * function. It is the logical inverse of _.filter.
 * 
 * @params {Array, Function} - holds array used in callback function (2nd parameter). Function
 * accepts 3 arguments: element, index, and array
 * 
 * @return {Array} Returns a new array of elements for chich calling function returned false.
 */  
function reject(array, func){

        return  filter(array, function(e,i,a){
      
        return !func(e,i,a);
}); 


}
module.exports.reject = reject;

/** partition: Designed to call function for each element in array passing it the arguments to filter
 * elements and create an array of arrays where values or split based on whether condition is true or false.
 * 
 * @params (Array, Function) Array holds array used in callback function (2nd parameter) which accepts 3 arguments:
 * element, index, and array.
 * 
 * @return {Array} Returns an array that is made up of 2 sub arrays, with false values in one and 
 * true in the other. 
 * 
 * 
 * 
 */
function partition(array, func) {
    
let arrOne = [];
let arrTwo = [];
let arrThree = [];
   
reject(array, function(e, i, a) {
    if (func(e, i, a) === true) {
        return arrOne.push(array[i]);
    } 
    return arrTwo.push(array[i]);
});
    arrThree.push(arrOne, arrTwo);
    return arrThree;  
}
module.exports.partition = partition;

/** 
 * map: Designed to create an array by calling on a specific function on each element present in
 * the parent array.
 * 
 * @params {Collection, Function} Collection is the value passed on to the callback function parameter.
 * Function has 3 arguments: element, index, and collection.
 * 
 * @return {Array} Returns a new array based off of results from the callback funtion.
 * Arguments:
 */
function map(collection, func) {
    var arr = [];
    each(collection, function(e, i, a) {
        arr.push(func(e, i, a));
}); 
    return arr;
} 
module.exports.map = map;

/** 
 * pluck: Designed to create array by extracting property details from a list. 
 * 
 * @params: {Array of Objects, Property} Loops through details of params to find property values.
 * 
 * @return: {Array} Returns an array containing a list of values take from the key elements.
 * 
 * 
 */
function pluck(array, prop) {
        return map(array, function(e, a, i) {
        return e[prop];
    });

}
module.exports.pluck = pluck;
 
/** every: Designed to check collection using a function to see if each element of
 * collection passes a certain test. 
 * 
 * @param {Collection, Function} Collection is run through function call to to test values.
 * 
 * @return {Boolean} Returns true if every element returns a true value, If one element is false
 * returns false.
 */
 module.exports.pluck = pluck;
function every(collection, func) {
  var value = true;
  if(func === undefined){
  each(collection, (element, index, collection) => {
      if(!element){
          value = false;
      }
  });
} else {
  each(collection, (element, index, collection) => {
      if(!func(element, index, collection)){
          value = false;
      }
  });
}
  return value;
}
module.exports.every = every;

/** some: Designed to check collection using a function to see if one element of
 * collection passes a certain test. 
 * 
 * @params {Collection, Function}  Collection is run through function call to to test values.
 * 
 * @return {Boolean} Returns true if at least one element returns a true value. Returns false if 
 * collection is empty or none of the elements return a true value. 
 */
function some(collection, func){
  var value = false;
  if(func === undefined){
  each(collection, (element, index, collection) => {
      if(element){
          value = true;
      }
  });
} else {
  each(collection, (element, index, collection) => {
      if(func(element, index, collection)){
          value = true;
      }
  });
}
  return value;
}
module.exports.some = some;

/** reduce: Designed to reduce an array to a single value by executing a call function on
 * each element of the array. It does not execute the function for array elements without 
 * values and it does not change the original array. 
 * 
 * @params {Array, Function, Seed} Call functions (arguments: previous result, element, index)
 * executes through array, and uses seed on the first iteration as the previous result argument.
 * If no seed is given, it uses teh first element/value of collection.
 * 
 * @return {Value/Number} returns the accumulated result from the last call of the callback function.
 */
function reduce(array, func, seed){
  
  let acc = seed === undefined ? 1 : seed;
  
    for(let i=0; i < array.length; i++)
    
     acc = func(acc, array[i], i, array);
    return acc;
}
module.exports.reduce = reduce;

/** extend: Designed to copy every property of the source object into the first object.
 * 
 * @param {Object, ...Object} Can have multiple operators
 * 
 * @return {Object1} Returns the update of the first object
 */
function extend(obj1,...object){
    
    for(let i=0; i<object.length; i++){
        
        for(let key in object[i]){
            
            obj1[key] = object[i][key];
         }
   }
   return obj1;
};