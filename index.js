'use strict';

// YOU KNOW WHAT TO DO //



/**
 * identity: The identity function takes in a value and returns it unchanged.
 * 
 * @param {*} value: The value going inside of identity.
 * 
 * @returns {*}: Returns the value unchanged.
 */
function identity(value) {
    return value;
}
module.exports.identity = identity;



/**
 * typeOf: The typeOf function takes in any value and returns the type of value
 * as a string. This type would be one of the following: "string", "array",
 * "object", "undefined", "number", "boolean", "null", or "function".
 * 
 * @param {*} value: The value being input into typeOf.
 * 
 * @returns {String}: The type of the input value, returned as a string.
 */
function typeOf(value) {
    if (typeof value === 'string') {
        return 'string';
    } else if (Array.isArray(value) === true) {
        return 'array';
    } else if (typeof value === 'number') {
        return 'number';
    } else if (typeof value === 'boolean') {
        return 'boolean';
    } else if (value === undefined) {
        return 'undefined';
    } else if (value === null) {
        return 'null';
    } else if (typeof value === 'function') {
        return 'function';
    } else if (typeof value === 'object') {
        return 'object';
    }
}
module.exports.typeOf = typeOf;



/**
 * first: Designed to take an input array and return the specified number of
 * array elements from the beginning of the array.
 * 
 * @param {Array} array: The array from which to return elements from.
 * @param {Number} number: The number of elements to return from the beginning
 * of the input array.
 * 
 * @returns {Array}: This will be the specified number of elements from the
 * beginning of the input array.
 */
function first(array, number) {
    let returnArray = [];
    if (!Array.isArray(array) || number < 0) {
        return [];
    } else if (number === undefined || typeof number !== 'number') {
      return array[0];
    } else if (number > array.length) {
        number = array.length;
    }
    for (let i = 0; i < number; i++) {
        returnArray.push(array[i]);
    }
    return returnArray;  
}
module.exports.first = first;



/**
 * last: Designed to take an input array and return the specified number of
 * array elements from the end of the array.
 * 
 * @param {Array} array: The array from which to return elements from.
 * @param {Number} number: The number of elements to return from the end of the 
 * input array.
 * 
 * @returns {Array}: This will be the specified number of elements from the end
 * of the input array.
 */
function last(array, number) {
    let returnArray;
    if (!Array.isArray(array) || number < 0) {
        return [];
    } else if (number === false || typeof number !== 'number') {
        return array[array.length-1];
    } else if (number > array.length) {
        number = array.length;
    }
    returnArray = array.splice(array.length - number);
    return returnArray;    
}
module.exports.last = last;



/**
 * indexOf: Designed to return the index number of the first occurrence of the
 * input value in the input array. If not found, returns -1.
 * 
 * @param {Array} array: The array in which to search for the specified value.
 * @param {*} value: The value which you are trying to find in the array.
 * 
 * @returns {Number}: This will be the array's index number which first
 * matches with the input value, or -1 if not found.
 */
function indexOf(array, value) {

let foundIndex = -1;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            foundIndex = i;
            if (foundIndex >= 0) {
                break;
            }
        }
    }
    return foundIndex;
    
}



/**
 * contains: Designed to check an array to see if it contains the given value.
 * If it does it should return true, if not, it should return false.
 * 
 * @param {Array} array: The array to check to see if it contains the specified
 * value.
 * @param {*} value: The value to check the array for, to see if the value is
 * contained in the array.
 * 
 * @returns {Boolean}: This should return true if the value is found in the
 * array. False if not found in the array.
 */
function contains(array, value) {
    let result = false;
    for (let i = 0; i < array.length && !result; i++) {
        result = array[i] === value ? true : false;
        }

    return result;   
}
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
 * unique: Designed to take an array and return a new array with no duplicated
 * values.
 * 
 * @param {Array} array: The array which is looped through to remove duplicate
 * values.
 * 
 * @returns {Array}: The new array which only contains unduplicated (unique)
 * values from the input array.
 */
function unique(array) {
    let uniqueArray = [];
    for (let i = 0; i < array.length; i++) {
        if (indexOf(uniqueArray, array[i]) === -1) {
            uniqueArray.push(array[i]);
        }
    }
    return uniqueArray;
}
module.exports.unique = unique;



/**
 * filter: Designed to call a function on each element in the input array
 * passing arguments of the element, its index, and the array. It then returns
 * an array of all the elements which for which the function returned true.
 * 
 * @param {Array} array: This is the array which you want to call the function
 * on each element of.
 * @param {Function} action: This wil be the function/action you perform on each
 * element of the input array.
 * 
 * @returns {Array}: Returns an array of the elements which returned true after
 * being passed through the input function.
 */
function filter(array, action) {
    
    let returnArr = [];
    
    if (Array.isArray(array)) {
        each(array, function(element, index, array) {
            if (action(element, index, array) === true) {
                returnArr.push(element);
            }
        });
    }
    return returnArr;    
}
module.exports.filter = filter;



/**
 * reject: Designed to call a function on each element in an array passing in
 * the arguments: the element, its index, <array>. Will then return a new array
 * of elements for which the function returned false.
 * 
 * @param {Array} array: This is the original array you'd like to test the
 * elements of through the input function.
 * @param {Function} action: This is the function you will run each element in
 * the input array through to test for true elements.
 * 
 * @returns {Array}: This is the array of elements which returned true after
 * being passed through the input function.
 */
function reject(array, action) {

    let returnArr = [];
    
    if (Array.isArray(array)) {
        each(array, function(element, index, array) {
            if (action(element, index, array) === false) {
                returnArr.push(element);
            }
        });
    }
    return returnArr;    
}
module.exports.reject = reject;



/**
 * partition: Designed to loop through elements of an array, calling a function
 * on each element. It will then decide which elements returned through the
 * function as truthy and create an array of those elements, and then another
 * for falsy elements. Then the two arrays will return together as two elements
 * of a bigger array.
 * 
 * @param {Array} array: The array you want to scan for truthy and falsy
 * elements.
 * @param {Function} action: The function you want to pass on each element of 
 * the input array to decide whether truthy or falsy.
 * 
 * @returns {Array}: An array made up of two sub arrays of truthy and falsy
 * elements from the input array once run through the input function.
 */
function partition(array, action) {

    let falsyArr = [];
    let truthyArr = [];
    let megaArr = [];
    
    if (Array.isArray(array)) {
        each(array, function(element, index, array) {
            if (action(element, index, array) === false) {
                falsyArr.push(element);
            } else if (action(element, index, array) === true) {
                truthyArr.push(element);
            }
        })
    }
    megaArr.push(truthyArr, falsyArr);
    return megaArr;   
}
module.exports.partition = partition;



/**
 * map: Designed to run all elements/values of an array/object through the
 * given function and to return an array of all the returned values from the
 * function.
 * 
 * @param {Object or Array} collection: The array or object which we want to run
 * through the test function.
 * @param {Function} action: The function we would like to run the array or
 * object through for their return values.
 * 
 * @returns {Array}: An array made of of all the return values from each
 * function call.
 */
function map(collection, action) {

    let returnArr = [];
    
    if (Array.isArray(collection)) {
        each(collection, function(e, i, a) {
            returnArr.push(action(e, i, a));
            }
        )
    }
    if (typeof collection === 'object' && !Array.isArray(collection)) {
        each(collection, function(v, k, o) {
            returnArr.push(action(v, k, o));
            }
        )
    }
    return returnArr;        
}
module.exports.map = map;



/**
 * pluck: Designed to 'pluck' out the values of the given property from the 
 * given array.
 * 
 * @param {Array} array: This is the array we want to get our values from.
 * @param {String} prop: This is the property we want to use to pick out the
 * related values from the input array.
 * 
 * @returns {Array}: An array of the values associated with the property key
 * given as an argument.
 */
function pluck(array, prop) {

    let returnArr = [];

    map(array, function(v, k, o) {
        returnArr.push(v[prop]);
    })
    
    return returnArr;    
}
module.exports.pluck = pluck;



/**
 * every: Designed to loop through an array or object and run a given function
 * on each element/value. If any of those values returns false, the result will
 * be false. If all true, result will be true. If no function is given, a false
 * result will be returned if any values are falsy, true otherwise.
 * 
 * @param {Object or Array} collection: The object or array you would like to
 * run through the function (if given) or if no function, that you would like to
 * test each element/value of as truthy/falsy.
 * @param {Function} action: The function you would like to run the elements/
 * values of the array/object through to test for all true or any false.
 * 
 * @returns {Boolean}: This will return either true or false depending on if any
 * of the tests returned false.
 */
function every(collection, action) {

    let result = true;

    if (typeof action !== 'function') {
        each(collection, function(e, i, a) {
            if (e === false) {
                result = false;
            }
        })
    } else {
        each(collection, function(e, i, a) {
            if (action(e, i, a) === false) {
                result = false;
            }
        })
    }
    return result;    
}
module.exports.every = every;



/**
 * some: Designed to loop through an array or object and run a given function
 * on each element/value. If any of those values returns true, the result will
 * be true. If all false, result will be false. If no function is given, a true
 * result will be returned if any values are truthy, false otherwise.
 * 
 * @param {Object or Array} collection: The object or array you would like to
 * run through the function (if given) or if no function, that you would like to
 * test each element/value of as truthy/falsy.
 * @param {Function} action: The function you would like to run the elements/
 * values of the array/object through to test for all false or any true.
 * 
 *  * @returns {Boolean}: This will return either true or false depending on if any
 * of the tests returned true.
 */
function some(collection, action) {

    let result = false;

    if (typeof action !== 'function') {
        each(collection, function(e, i, a) {
            if (e === true) {
                result = true;
            }
        })
    }
    else {
        each(collection, function(e, i, a) {
            if (action(e, i, a) === true) {
                result = true;
            }
        })
    }
    return result;    
}
module.exports.some = some;



/**
 * reduce: Designed to loop through an array, passing each element into a 
 * callback function and adding its return value to an accumulator. Can start
 * with a seed value or with the first value in the array.
 * 
 * @param {Array} array: This is the array we would like to use in the callback
 * function.
 * @param {Function}: action: This is the function we would like to do on each
 * element of the array to change the accumulated value.
 * @param {Number} seed: This is the value we use to begin accumulating with.
 * 
 * @returns {Number}: This is the accumulated value after each element of the
 * array is run through the callback function.
 */
function reduce(array, action, seed) {

    let memo;

    if (seed === undefined) {
        memo = array[0];
        each(array, function(e, i, a) {
            if (i !== 0) {
                memo = action(memo, e, i, a);
            }
        })
        return memo;
    } else {
        memo = seed;
        each(array, function(e, i, a) {
            memo = action(memo, e, i, a);
        })
        return memo;
    }    
}
module.exports.reduce = reduce;



/**
 * extend: Designed to take any number of input objects and copy their
 * properties into the first object (in the order they are listed).
 * 
 * @param {Object} ogObj: This is the object we will be adding other properties
 * into from their objects.
 * @param {Object(s)} ...obj: This can be one, or many objects. Their properties
 * will be added into the first object, in order.
 * 
 * @returns {Object}: This is the original object with the properties of the
 * other input objects added, in order.
 */
function extend(ogObj, ...obj) {
    
    Object.assign(ogObj, ...obj);
    return ogObj;
    
}
module.exports.extend = extend;