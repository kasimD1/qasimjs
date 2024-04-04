let array=[1,2,3,4,'qasim','ammar'];
console.log(array[0]);
console.log(array);
//In javascript,the array perform shallow copying when used copy function.
//shallow copy is the type of copy who shared the same reference point;
//means a change in array ;make changes in already created array
//other type of copy is deep copy in which the property do share the different reference point 
const myArr=[4,5,6];
const supHeros=['SAFEGUARD','IRONMAN'];
//methods for array;
// myArr.push(7);
// console.log(myArr);
// //unshift() is a method to insert value in starting to a array , but time consuming
// myArr.unshift(5);
// console.log(myArr);
// //shift is the opposite method for array
// myArr.shift();
// console.log(myArr);
//includes and index() are the method to know whether element available and its position respectively
console.log(myArr.includes(9));
console.log(myArr.indexOf(10));
//array 14:00

