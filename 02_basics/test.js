// // let array=[1,2,3,4,'qasim','ammar'];
// // console.log(array[0]);
// // console.log(array);
// // //In javascript,the array perform shallow copying when used copy function.
// // //shallow copy is the type of copy who shared the same reference point;
// // //means a change in array ;make changes in already created array
// // //other type of copy is deep copy in which the property do share the different reference point 
// // const myArr=[1,2,3,4,5,6];
// // // const supHeros=['SAFEGUARD','IRONMAN'];
// // // //methods for array;
// // // // myArr.push(7);
// // // // console.log(myArr);
// // // // //unshift() is a method to insert value in starting to a array , but time consuming
// // // // myArr.unshift(5);
// // // // console.log(myArr);
// // // // //shift is the opposite method for array
// // // // myArr.shift();
// // // // console.log(myArr);
// // // //includes and index() are the method to know whether element available and its position respectively
// // // console.log(myArr.includes(9));
// // // console.log(myArr.indexOf(10));
// // // //array 14:00
// // // //join() is used to convert the array of any datatype into string
// // const new_array=myArr.join();
// // console.log(myArr);
// // console.log(new_array);
// // console.log(typeof(new_array));
// // // slice() and splice();
// // //slice()  when used , it do only fetch the data ; do not change the content of array
// // //slice()  when used , it dont only fetch the data but also  do  change the content of array
// // // console.log("A ",myArr);
// // // const myarr1=myArr.slice(0,3);
// // // console.log(myarr1);
// // // console.log("b ",myArr);
// // console.log("A ",myArr);
// // const myarr2=myArr.splice(0,3);

// // console.log(myarr2);
// // console.log("b ",myArr);
// // const marvel =['ironman','spiderman','thor'];
// // const dc=['superman','batman'];
// // // marvel.push(dc);
// // // console.log(marvel);
// // // //to fetch the ata from the dc array pushed in marvel 
// // // console.log(marvel[3][1]);
// // //concate
// // const all_heros=marvel.concat(dc);
// // console.log(all_heros);
// // //spread is a function which is used to do fuction like concate it deals the array element as an individual
// // const all_new_marvel=[...marvel,...dc];
// // console.log(all_new_marvel);
// // const another_array=[1,5,6,[7,8,9],3,3,2,[1,2,3,4]];
// // console.log(another_array);
// // //flat function is used to flat the array elements
// // const another_new_array=another_array.flat(5);
// // console.log(another_new_array);
// // // datascraping 
// // // sometimes when we fetch data from a web page it might be in other format such as in node list ,object . but you need this datain array fo loop implementation
// // console.log(Array.isArray("qasim "));
// // console.log(Array.from("qasim"));
// // console.log(Array.from({name:'qasim'}));//intersting

// // let score1=100;
// // let score2=200;
// // let score3=300;
// // console.log(Array.of(score1,score2,score3));
// //important funcions for array 
// //Array.of();
// //Array.from();
// //Array.isArray()
// //ARRAY PART 2 COMPLETE
// //object literals
// // const sym=Symbol("key1");
// // let jsdetail={
// //     name:"qasim",
// //     "fullname":"qasim nawaz",
// //     age:18,
// //     [sym]:"mykey1",
// //     islogged:false,
// //     location:"lahore",
// //     email:"qasimd00@gmail.com"
// //}

// //console.log(jsdetail.age);
// //this is best choice to write code to get object detail
// //console.log(jsdetail["fullname"]);
// //console.log(jsdetail.fullname);
// //console.log(jsdetail[sym]);
// //console.log(typeof(jsdetail.sym));

// jsdetail.name="qasim nawaz";
// // console.log(jsdetail.name);
// //To freeze the object item we use freeze fuction/methods
// //Object.freeze(jsdetail);
// //jsdetail.age=15;
// //console.log(jsdetail.age);  
// //console.log(jsdetail);
// //function
// // jsdetail.greeting=function(){
// //     console.log("here is the detail for JS user");}
// //     console.log(jsdetail.greeting());
// //     console.log(jsdetail.greeting);
// //     jsdetail.greetingTwo=function(){
// //         console.log(`here is the detail , ${this.name}`);
// //     }
//     //console.log(jsdetail.greetingTwo());
// //object constructors
// //end of object part 1

const course={
    coursename:"js with chai",
    price:"999",
    instructor:"hitesh ch"
}
//console.log(course.instructor);
// other suggested way to retrieve the imformation from the objects
const {instructor:inst}=course;
//console.log(inst);
// api json talk
//json is like object with name
// //{
//     "name":"qasim",
//     "age":"46",
//     "id":"3666018976573927"
// }

//functions 
// function saymyname() {
    
//     console.log("qasim");
// }
// saymyname();
// function addTwoNum(num1,num2) {
//     return num1+num2;
    
// }
// console.log(addTwoNum(3,5));
// function usernameasked(username) {
//     return `${username} has just logged in`;
// }
// const user=usernameasked("Quaid-e-Azam");
// console.log(user);
// function usernameasked(username) {
//     return `${username} has just logged in`;
// }
// const user=usernameasked("");
// console.log(user);
// //expected output:  has just logged in
// const user=usernameasked("Quaid-e-Azam");
// console.log(user);
// function usernameasked(username) {
//     return `${username} has just logged in`;
// }
// const user=usernameasked();
// console.log(user);
// //expected output:  undefined has just logged in

// function usernameasked(username) {
//     if (username===undefined){
//         console.log("please enter a valid username");
//         return ;
//     }
//     return `${username} has just logged in`;
// }
// const user=usernameasked();
// console.log(user);
//expected output:  undefined has just logged in
//best practice
// function usernameasked(username) {
//     if (!username){
//         console.log("please enter a valid username");
//         return ;
//     }
//     else if (!undefined){
//     return `${username} has just logged in`;
// }}
// const user=usernameasked("qasim");
// console.log(user);
// if you want to get rid of unentered user name
//use default value in the parameter if username is entered the value is overwritten , otherwise used default val
// function usernameasked(username="quaid") {
//     if (!username){
//         console.log("please enter a valid username");
//         return ;
//     }
//     else if (!undefined){
//     return `${username} has just logged in`;
// }}
//const user=usernameasked(null);
//console.log(user);
//this will not work with the null and empty string
//to calculate the cart item prices
//...  is rest operator as well as spilts operator
// function calculateCartPrice(...num1) {
//     return num1;
    
// }

// console.log(calculateCartPrice(2,4,5,6,7,8));

// function calculateCartPrice(v1,v2,...num1) {
//     return num1;
    
// }

// console.log(calculateCartPrice(2,4,5,6,7,8));
// const user={
//     username:"qasim",
//     price:"999"
// }
// function objectHandling(anyobject) {
//    console.log( `username is ${anyobject.username} and the price is ${anyobject.price}`);
    
// }
//objectHandling(user);
// objectHandling({username:"quaid",price:"678"})// argument can be in the form of object
// const  array=[1,3,4,5,6,7,8];
// function secValue(getarray){
//     return array[1];
// }
// console.log(secValue(array));
// if (1){
//     let a=1
//     const b=2
//     var c=3 

// }
//console.log(a);
//console.log(b);
// console.log(c);
//nature of console is differ from the nature of node code environment
//fuctions done
//a JavaScript function called add that takes two parameters (numbers) and returns their sum.
// Create a function called multiply that takes three parameters (numbers) and returns their product.
// Write a function called greet that takes a name as a parameter and returns a greeting message, such as "Hello, [name]!"
// Define a function called calculateArea that takes the radius of a circle as a parameter and returns the area of the circle (π * radius^2).
// Create a function called isEven that takes a number as a parameter and returns true if the number is even, otherwise returns false.
// Write a function called capitalize that takes a string as a parameter and returns the same string with the first letter capitalized.

//first
// const sum =(num1,num2)=>(num1+num2);
// console.log(sum(3,5));
// //second
// const multiply=(num1,num2,num3)=>(num1*num2*num3);
// console.log(multiply(3,5,6));
// //third
// const greet=(name)=>(console.log(`Hello, ${name}`));
// greet("qasim");
// //forth
// const calculateArea=(rad)=>(3.14*rad*rad);
// console.log(calculateArea(2));
// //fifth
// const isEven=(num)=>(num%2===0);
// console.log(isEven(7));
// //sixth
// const capatilize=(senten)=>{
//     const firstword=senten.charAt(0);
//     const capword=firstword.toUpperCase();
//     const remainer=senten.slice(1);
//     const sentence=capword+remainer;
//     return sentence;

// };
// console.log(capatilize("my name is khan"));
// //seventh
// const reverseArray=(array)=>(array.reverse());
// const array=[1,2,3,45,6];
// console.log(reverseArray(array));
//eight
// const sumArray=(array)=>{
//     for (let i = 0; i < array.length; i++) {
//         const element=0;
//         element=element + array [i];
        
//     }
//     return element;
// }
// const array2=[1,2,3,4,5,44,3];
// console.log(sumArray(array2));

// Define a function called reverseArray that takes an array as a parameter and returns a new array with the elements reversed.
// Create a function called sumArray that takes an array of numbers as a parameter and returns the sum of all the numbers in the array.
// Write a function called filterEvens that takes an array of numbers as a parameter and returns a new array containing only the even numbers.
// Define a function called findMax that takes an array of numbers as a parameter and returns the largest number in the array.

// const array=[1,2,3,4,5,6];
// const a=array.splice(2);
// console.log(a);
// //console.log(array.splice(2));
// const arrayy=[1,23,45,6,77,4,2];
// const b=array.splice(2);
// // console.log(arrayy.slice(2));
// console.log(b);
// const array=[2,3,4,5,6];
// const a=array.slice(1,3);
// console.log(array);
// console.log(a);
// const array1=[2,3,4,5,6];
// const b=array.splice(1,3);
// console.log(array);
// console.log(b);
// Of course! Here's the information about `slice()` and `splice()` summarized in bullet points:

// `slice()` Method:
// - Used for extracting a portion of an array and returning a new array.
// - Takes two optional parameters: start index and end index (end index is exclusive).
// - If no parameters are provided, it returns a shallow copy of the original array.
// - Does not mutate the original array.
// - If only one parameter is provided, it extracts elements from the provided index to the end of the array.

// `splice()` Method:
// - Used for adding or removing elements from an array.
// - Takes three parameters: start index, delete count, and optional elements to add.
// - Modifies the original array.
// - If the delete count is 0, no elements are removed but elements can still be added.
// - If only one parameter is provided, it removes all elements from the provided index to the end of the array and returns them.

// These methods offer different functionalities for manipulating arrays in JavaScript.
//IIFE
//named iife
// (function chai(){
//     console.log(`db connected`);

// })();
// //IIFE is used to prevent function from global garbage
// //()()->this is iife
// //()=>{}->this is arrow function
// //unamed iife
// ((name)=>{console.log(`db connected two ,${name}`);})("qasim");
// The working of the JavaScript works on three phases:
// 1. Global Execution Context
// 2. Memory phase / Creation phase
// 3. Execution phase

// Phase 1: Global Execution Context
// The value of `this` keyword is set to Global Execution Context (which is an empty Object in NODE environment, & window object in browser environment)
// Phase 2: Memory phase
// During this phase, JS engine scans the code and assigns the initial values for the variables , functions, etc.. For variables they are 'undefined' and for functions they are set to their function definition

// Phase 3: Execution phase
// After the creation phase completed, the execution phase begins where actual values of the variables are set. And when the functions are called it creates a new 'Function Execution' context which consists of two phases (they works same as explained above but only for the particular function scope):
// 1. Memory phase 
// 2. Execution phase 
// The return value of the 'Function Execution' context is passed to the Global Execution Context
// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }
// const val=null??10;
// console.log(val);
//nullsing coalsing operator
// const val=5??10;
// console.log(val);
// const val1=undefined??10;
// console.log(val1);
// //tertiary operator
// const teaprice=10;
// teaprice>85 ? console.log("price is above 85"):console.log("price is under 85");
// const emptyObj = {}
// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
// }
// // Nullish Coalescing Operator (??): null undefined
// let val1;
// // val1 = 5 ?? 10
// // val1 = null ?? 10
// // val1 = undefined ?? 15
// val1 = null ?? 10 ?? 2
// console.log(val1);
// // Terniary Operator
// // condition ? true : false
// const iceTeaPrice = 100
// iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")