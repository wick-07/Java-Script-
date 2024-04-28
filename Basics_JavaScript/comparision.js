//all the three comparision below will return true as Javascript automatically converts the string to integer.

console.log("2" > 1);
console.log("02" > 1);
console.log(1 > "0");

//Case of NULL

console.log(null>0); //returns false
console.log(null==0);
console.log(null>=0);//returns true

/*reason :- the equality operator and the comparision operator works differently in javascript
            the comparision operator converts the null to number datatype and we know the null 
            when converted to number has zero as the value so the line (8) returns true. */