//--------------------------------------------VARIABLES

let fullName = "Tushar";
const bithYear = 2003;
let currentYear = 2025;
let age = 23;

console.log("Name: ", fullName)
console.log("Age: ", age)

//--------------------------------------------DATA TYPES

let Uname = "Tushar";                        //---- String
let score = 98.5;                           //---- Numbers
let isPassed = true;                        //---- Boolean
let colors = ["red", "blue", "green"];      //---- Array
let user = {                                //---- Object
    name: "Tushar",
    age: 24,
    isAdmin: false
};

let emptyValue = null;                      //---- Null
let notAssigned;                            //---- Undefined

console.log("Name: ", Uname);
console.log("Score: ", score);
console.log("Is Passed? ", isPassed);
console.log("Colors: ", colors);
console.log("User Object: ", user);
console.log("Null: ", emptyValue);
console.log("Undefined", notAssigned);

//--------------------------------------------OPERATORS

let a = 10, b = 3;                  //---- Arithmetic Opertors
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

let x = 5;                          //---- Assignment Operators
x += 3;
x *= 2;

let myAge = 18;                     //---- Comparison Operators
console.log(myAge > 18);
console.log(myAge >= 18);
console.log(myAge == 18);
console.log(myAge === 18);
console.log(myAge != 18);

let isAdult = true;                 //---- Logical Operators
let hasId = false;
console.log(isAdult && hasId);
console.log(isAdult || hasId);
console.log(!isAdult);

//------------------------------------>>>> CONDITIONAL STATEMENTS

let Myage = 20;                     //---- if-else if-else
if (age < 13){
    console.log("You are child.")
} else if (Myage >= 13 && Myage < 18){
    console.log("You are teenager.")
} else{
    console.log("You are an adult.")
}

let day = "Monday";                 //---- Switch Case
switch(day){
    case "Monday":
        console.log("Start of the week!")
        break;
    case "Friday":
        console.log("Almost Weekend!")
        break;
    case "Sunday":
      console.log("Rest Day!")  
      break;
    default:
        console.log("Regular Day!")
}

//------------------------------------>>>> LOOPS

for (let i = 1; i < 5; i++){                //---- For loop
    console.log("Count: ", i);
}

let i = 1;                                  //---- While loop
while(i <= 5){
    console.log("While Loop: ",i);
    i++;
}

let j = 1;                                  //---- Do-While loop
do{
    console.log("While Loop: ",j);
    j++;
} while (j <= 5);

let allColors = ["red", "green", "blue"]
allColors.forEach(function(allColor){
    console.log("Colors: ", allColor);
});

//------------------------------------>>>> FUNCTIONS

function greet(){
    console.log("Hello, Tushar!");
}
greet();

function greetUser(name){
    console.log("Hello" + name + "!");
}
greetUser("Tushar");

function add(a, b){
    return a + b;
}
let sum = add(4, 6);
console.log("Sum is: ", sum)

const multiply = (x, y) => {
    return x*y;
}
console.log(multiply(4,5));


//--------------------------------------------->>>> ARRAY METHODS

let movies = ["Ironheart","Fantastic Four","Thunderbolts","Stranger Things","Wednesday"];
console.log(movies[1]);
console.log(movies.push("Jurrasic Park"));
console.log(movies.shift[0]);

movies.forEach(function(movies){
    console.log(movies);
});

const numbers = [1,2,3,4,5,6,7,8,9,10];
const squared = numbers.map(num => num * num);      //-------------MAP
console.log(squared);
const greater = numbers.filter(num => num > 5)      //-------------FILTER
console.log(greater);
const total = numbers.reduce((acc, numbers) => acc + numbers, 0); //----REDUCE
console.log(total);

//----------------------------------->>>>> OBJECT

let car = {
    brand: "BMW",
    model: "X5",
    year: 2021,
    fuel_type: "diesel"
};

car.carColor = "Light Blue";
car.model = "X7";
delete car.fuel_type

for (let key in car){
    console.log(key + ": " + car[key])
}

//---------------------------------------- DOM (DOCUMENT OBJECT MODEL)

const title = document.getElementById("title");
const button = document.getElementById("changeBtn");

button.addEventListener("click", function(){
    title.textContent = "Welcome to My Homepage"
    title.style.color = "red"
    title.style.fontSize = "40px"
})




