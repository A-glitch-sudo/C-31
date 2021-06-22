//Test
// Examples of different type of data in javascript
//String
var string = "this a string"
console.log(string)

//Number
var num = 3
console.log(num);

//Boolean
var bool= true;
console.log(bool);

// undefined
var object;
console.log(object);

// Reasigning the same undefined object to null 
object = null;
console.log(object);

// array - multiple values can be stored
var arr=[]; // empty array

// array of numbers
var arr1 = [12,13,14,15,45]
console.log(arr1);

// array of strings
var arr2 = ["rose","lily","lotus"]
console.log(arr2);

// mixed array
var arr3 = ["Iron man",num,false,arr1]
console.log(arr3);

/* output of arr3 is- mainIndex: value
 0: "Iron man"
 1: 3
 2: false
 3:(5)
    0:12
    1:13
    2:14
    3:15
    4:45

*/

// array storing list of arrays
var arr4 = [[1,2],[2,3],[3,4],[4,5]]
console.log(arr4);

console.log(arr4[0]);

console.log(arr4[2]);

console.log(arr4[2][0]);

console.log(arr4[2][1]);

// length of an array
var arrlength = arr4.length;
console.log(arrlength)

// add an element to an array
arr4.push("add string")
console.log(arr4);

arr4.pop();
console.log(arr4);


