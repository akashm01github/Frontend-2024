//First Java Script Line.

console.log("Hello World.");

console.log(100);


let a = 5;

let b = 10;

let c =  (a+b);

console.log(c);



var num1 =  20;

var num2 = 30;

var num5 = 2;



var sum =  num1+num2;

var ans = sum * num5;

let ans2  =  ans /2 ;
console.log(sum);

console.log(ans)

console.log(ans2);



let name  = "Akash Mukherjee";

console.log(name);

//Number 3 is Undefined.
let num3;
console.log("The Number3 is: "+num3);




//Number 4 is Null

let num4 = null;

console.log("The Number4 is: "+num4)


let person = {
    firstName : "Akash",

    lastName : "Mukherjee",

    age : 23
};

console.log(person.firstName);
console.log(person.lastName);

let names = ['Akash' , 'Aparna' , 'Java Script'];

console.log(names[2]);

names[3] = 'java';
console.log(names);

//Post and Pre Increment 

let a1 = 5; // 6 --> 7

let b1 = 10; // 9 --> 8 

let ans1 = (++a1) * (--b1);

console.log(ans1);


let ans4 = (a++) * (--b);

console.log(ans4);


let ans3 = (a++) * (b--);

console.log(ans3);

console.log(3!==4);


// Loose Equality (==) and Strict Equality (===)


let num =1;
let str  = '1';

console.log(num == str);
console.log(num === str);

//Conditional Statement

let marks = 50;

if(marks >=90){
    console.log("A");
}
else if(marks >= 80){
    console.log("B");
}

else if(marks >= 70){
    console.log("C");
}

else{
    console.log("D");
}






//For Loop:


for(let i = 1 ; i<= 5; i++){
    console.log("Akash " + i);
} 



