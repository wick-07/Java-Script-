//"use strict"  // treat all Js code as newer version

let Name= "Akash"
let age=23;

let inLoggedIn=false
console.log(typeof null); //typeof keyword gives the size of the variable. 

//Null
//undefined
//String
//Integer
//Boolean
//Object
//Symbol

//primitive datatype**********************

const score=100
const scorevalue=200.3;
const bigNumber=2343432525341424342342343233242334n;
const isLoggedIn=false;
const outsideTemp=null;
let userEmail=undefined;
console.log(bigNumber);
console.log(typeof(bigNumber));// it returns bigint

//Below are the two symbol datatype which are same vaues but are not equal when checked
const id=Symbol('123');
const anotherId=Symbol('123');

console.log(id === anotherId); //returns false
console.log(id==anotherId);    //returns false

//non primitive datatype***************************

const heros=["batman","superman","antman"];

let myObj={
    name: "akash",
    age:22,
}

const myFunction=function(){
    console.log("Hello World");
}
