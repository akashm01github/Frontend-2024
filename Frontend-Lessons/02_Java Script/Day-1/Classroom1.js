//Variables in Javascript

// Java Script var
//আবার আমরা let নিয়ে আলোচনা করবো।

var x1 = 10;

var y1 = 50;

var z = x1 + y1;

console.log(z);

//***************************************************************



// Java Script let.
//আবার আমরা let নিয়ে আলোচনা করবো।

//Can not be Re-Decleared.

//Exapmle
//output: Uncaught SyntaxError: Identifier 'x' has already been declared

let x2 = "Akash";

let y2 =  10;

console.log("The Y2 Value is : "+y2);

//Blcok Scope of let 

//এটা একটা function scope
function sleep() {
  console.log("This is Sleep Function");
}
sleep();

//এটা একটা ব্লক স্কোপ

let x3 = 20;

if (true) {
  let x3 = 10;
  console.log("This is Block X3: "+x3);
}

console.log("This is Outer X3: "+x3);

//VAR Key Word Use করলে BLOCK SCOPE এর ঝামেলা তে পড়তে হবে না | কিন্তু ভ্যারিয়েবল কে re-declaring করা যায়না 


//Let vs Var Hoisting

carName = "Tesla";

var carName;

console.log(carName);

//জাভা স্ক্রিপ্ট Hoisting করে উপরে নিয়ে চলে যায় না var carName কে। 


//Let Hoisting

// carCompany = "BMW";

// let carCompany;

// console.log(carCompany);

//এখানে কিন্তু error আসবে Cannot access 'carCompany' before initialization

//*************************************************************

//Java Script Const Variable:

const num1 = 10;

// num1 =15; // const use করলে re-assign করা যাই না 

console.log("The Number1 is : "+num1);


// const num2;
// num2 = 20;

// console.log("The Number2 is : "+num2);
//error: Missing initializer in const declaration


const arr = [1,2,3,4,5];

console.log(arr);


const country  = "India";

console.log("My Country Name is : "+ country);

const studentNames = ["Raja","Rani","Badsha","Amit"];

studentNames[0] = "Alex";

console.log(studentNames);

console.log("Hello");













