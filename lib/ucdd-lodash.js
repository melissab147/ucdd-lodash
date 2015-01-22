/**
 * Gets the first element of `array`.
 *
 * @example
 *
 * _.first([1, 2, 3]);
 * // => 1
 *
 * _.first([]);
 * // => undefined
 */
function first(array) {
    if (array.length === 0)
        return undefined
    else
        return array[0]
}

/**
 * Gets all but the first element of `array`.
 *
 * @example
 *
 * _.rest([1, 2, 3]);
 * // => [2, 3]
 */
function rest(array) {
    return array.splice(1, array.length)
}

/**
 * Gets the index at which the first occurrence of `value` is found in `array`
 *
 * @example
 *
 * _.indexOf([1, 2, 3, 1, 2, 3], 2);
 * // => 1
 *
 */
function indexOf(array, value) {
   
    var length = array.length;
    
    for(var i = 0; i < length; i++){
		if(value == array[i])
			return i;
	}
    
    return undefined;
}

/**
 * Creates an array with all falsey values removed. The values `false`, `null`,
 * `0`, `""`, `undefined`, and `NaN` are falsey.
 *
 * @example
 *
 * _.compact([0, 1, false, 2, '', 3]);
 * // => [1, 2, 3]
 */
function compact(array) {
    var i;
    for(i=0; i<array.length; i++){
        if(array[i] == 'false' || 
            array[i] == 'null' || 
            array[i] == '0' || 
            array[i] == '' || 
            array[i] == 'undefined' || 
            array[i] == 'NaN')
            array.splice(i, 1);
    }
    return array;
}

/**
 * Gets the value of a specified property from all objects in an array
 *
 *	@example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36 },
 *   { 'user': 'fred',   'age': 40 }
 * ];
 *
 * _.pluck(users, 'user');
 * // => ['barney', 'fred']
 *
 */
function pluck(array, key) {
    var retArray = new Array(array.length);
    for(x in array){
        retArray[x] = array[x][key];
    }
    return retArray;
}


/**
 * Creates an array excluding all provided values 
 *
 * @example
 *
 * _.without([1, 2, 1, 0, 3, 1, 4], 0, 1);
 * // => [2, 3, 4]
 */
function without(array) {
	// Hint: Read this article about using the "arguments" variable
	// to access all provided values
	//
	// http://www.w3schools.com/js/js_function_parameters.asp
	//
	//
  var remove = [];

  //create array of elements to remove
  for (i = 1; i < arguments.length; i++) {
    remove.push(arguments[i])
  }

  //remove said elements
  for (i = array.length - 1; i >= 0; i--) {
    for (j = 0; j < remove.length; j++) {
      if (array[i] == remove[j]) {
        array.splice(i, 1)
      }
    }
  }
  return array
}

// Export functions
var lib = {}
lib.first = first
lib.rest = rest
lib.indexOf = indexOf
lib.compact = compact
lib.without = without
lib.pluck = pluck

module.exports = lib
