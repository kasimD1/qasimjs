// let array=[1,2,3,4,'qasim','ammar'];
// console.log(array[0]);
// console.log(array);
// //In javascript,the array perform shallow copying when used copy function.
// //shallow copy is the type of copy who shared the same reference point;
// //means a change in array ;make changes in already created array
// //other type of copy is deep copy in which the property do share the different reference point 
// const myArr=[1,2,3,4,5,6];
// // const supHeros=['SAFEGUARD','IRONMAN'];
// // //methods for array;
// // // myArr.push(7);
// // // console.log(myArr);
// // // //unshift() is a method to insert value in starting to a array , but time consuming
// // // myArr.unshift(5);
// // // console.log(myArr);
// // // //shift is the opposite method for array
// // // myArr.shift();
// // // console.log(myArr);
// // //includes and index() are the method to know whether element available and its position respectively
// // console.log(myArr.includes(9));
// // console.log(myArr.indexOf(10));
// // //array 14:00
// // //join() is used to convert the array of any datatype into string
// const new_array=myArr.join();
// console.log(myArr);
// console.log(new_array);
// console.log(typeof(new_array));
// // slice() and splice();
// //slice()  when used , it do only fetch the data ; do not change the content of array
// //slice()  when used , it dont only fetch the data but also  do  change the content of array
// // console.log("A ",myArr);
// // const myarr1=myArr.slice(0,3);
// // console.log(myarr1);
// // console.log("b ",myArr);
// console.log("A ",myArr);
// const myarr2=myArr.splice(0,3);

// console.log(myarr2);
// console.log("b ",myArr);
// const marvel =['ironman','spiderman','thor'];
// const dc=['superman','batman'];
// // marvel.push(dc);
// // console.log(marvel);
// // //to fetch the ata from the dc array pushed in marvel 
// // console.log(marvel[3][1]);
// //concate
// const all_heros=marvel.concat(dc);
// console.log(all_heros);
// //spread is a function which is used to do fuction like concate it deals the array element as an individual
// const all_new_marvel=[...marvel,...dc];
// console.log(all_new_marvel);
// const another_array=[1,5,6,[7,8,9],3,3,2,[1,2,3,4]];
// console.log(another_array);
// //flat function is used to flat the array elements
// const another_new_array=another_array.flat(5);
// console.log(another_new_array);
// // datascraping 
// // sometimes when we fetch data from a web page it might be in other format such as in node list ,object . but you need this datain array fo loop implementation
// console.log(Array.isArray("qasim "));
// console.log(Array.from("qasim"));
// console.log(Array.from({name:'qasim'}));//intersting

// let score1=100;
// let score2=200;
// let score3=300;
// console.log(Array.of(score1,score2,score3));
//important funcions for array 
//Array.of();
//Array.from();
//Array.isArray()
//ARRAY PART 2 COMPLETE
//object literals
const sym=Symbol("key1");
let jsdetail={
    name:"qasim",
    "fullname":"qasim nawaz",
    age:18,
    [sym]:"mykey1",
    islogged:false,
    location:"lahore",
    email:"qasimd00@gmail.com"

}
console.log(jsdetail.age);
//this is best choice to write code to get object detail
console.log(jsdetail["fullname"]);
//console.log(jsdetail.fullname);
//console.log(jsdetail[sym]);
//console.log(typeof(jsdetail.sym));

jsdetail.name="qasim nawaz";
console.log(jsdetail.name);
//To freeze the object item we use freeze fuction/methods
//Object.freeze(jsdetail);
//jsdetail.age=15;
//console.log(jsdetail.age);  
//console.log(jsdetail);
//function
jsdetail.greeting=function(){
    console.log("here is the detail for JS user");}
    console.log(jsdetail.greeting());
    console.log(jsdetail.greeting);
    jsdetail.greetingTwo=function(){
        console.log(`here is the detail , ${this.name}`);
    }
    console.log(jsdetail.greetingTwo());
//object constructors
//end of object part 1