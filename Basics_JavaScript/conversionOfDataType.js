let score=33
console.log(typeof score);
//or we can also write the variable name under parenthesis.
console.log(typeof (score));

let valueInString=String(score); //This is how we typecast or convert the datatype just by writing the datatype in which we want to convert the following variable into before the variable under parenthesis and assigning it to some new variable.
console.log(typeof valueInString);

//some exception to keep in mind before datatype converison------
console.log("Exception case example:  \n")
let score1="33"
console.log(typeof score1);
let valueInInteger=Number(score1);
console.log(typeof valueInInteger);
console.log("The the value of the valueInInteger is: " + valueInInteger);
   
//Now changing the sceanario

score1="33ab"  //since it is a string already lets add some alphabet to it
let valueInInteger1=Number(score1);
console.log("The the value of the valueInInteger1 is: " + valueInInteger1); //this will show NaN(Not a Number) just because the value of score1 contains some alphabets too.
console.log(typeof valueInInteger1 ); //this will show its a number

//scenario new

let score2=null;
let valueInInteger2=Number(score2);
console.log("\nThe value of score2 is: "+ score2);
console.log(typeof score2);
console.log( typeof valueInInteger2 );
console.log("The value of the valueInInteger2 is: " + valueInInteger2);//it returns 0 for Null when we converted it to Number

//scenario new

let score3=undefined;
let valueInInteger3=Number(score3);
console.log("\nThe value of score3 is: "+ score3);
console.log(typeof score3);
console.log( typeof valueInInteger3 );
console.log("The value of the valueInInteger3 is: " + valueInInteger3);//it returns NaN for undefined when we converted it to Number

//scenario new

let score4=true;
let valueInInteger4=Number(score4);
console.log("\nThe value of score4 is: "+ score4);
console.log(typeof score4);
console.log( typeof valueInInteger4 );
console.log("The value of the valueInInteger4 is: " + valueInInteger4);//it returns 1 for true when we converted it to Numb

//Conversion to boolean

let score5=1;
let valueInBoolean5=Boolean(score5);
console.log("\nThe value of score5 is: "+ score5);
console.log(typeof score5);
console.log( typeof valueInBoolean5 );
console.log("The value of the valueInBoolean5 is: " + valueInBoolean5);//it returns ture for 1 when we converted it to Number

//similarly:  
// 0=>false       if integer having 0 as value converted boolean it returns false
// "akash"=>true  if its not an empty string then true is returned when converted to boolean
// " "=>false     if its an empty string which is converted to boolean



