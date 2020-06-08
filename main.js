//1a - map() function that takes [an array of chars, and a function] and returns an array of uppercase chars
//build functions
function upperCase(arr){
    let newArr = [];
    for(let i=0; i<arr.length; i++){
        newArr.push(arr[i].toUpperCase());
    }
    return newArr;
}

function map(arr, func){
    let newArr = func(arr);
    return newArr;
}

//define variables and program flow
let arr = ['a', 'b', 'c', 'd'];

console.log("1a: Map");
console.log("--------------------------------------------");
console.log("Original Array:  " + arr);
console.log("UpperCase Array: " + map(arr, upperCase));
console.log("--------------------------------------------\n");

//1b - .reduce() function that takes [an array of food orders, with their amounts] and returns the total amount of all the food orders.
let foodItems = [
    "Soft Taco", 
    7.00,
    "Chicken Fajita",
    13.00,
    "Burger",
    10.00
]

let foodCosts = [];

for(let i=0; i<foodItems.length; i++){
    if(foodItems[i]>0){
        foodCosts.push(foodItems[i]);
    }
}

console.log("1b: Reduce");
console.log("--------------------------------------------");
for(let i=0; i<foodItems.length; i+=2) {
    console.log("    " + foodItems[i] + " $" + foodItems[i+1].toFixed(2));
}
console.log("\n    Total: $" + foodCosts.reduce((sum, i) => sum + i).toFixed(2));
console.log("--------------------------------------------\n");

//1c - .filter() function that takes [an array of items, and a function that returns an array with only the items that return true in the function].
const words = ['cheese', 'yogurt', 'bread', 'eggplant', 'milk', 'asparagus'];
const result = words.filter(word => word[0] == 'a' || word[0] == 'e'|| word[0] == 'i'|| word[0] == 'o'|| word[0] == 'u')
//const result = words.filter(word => word.length > 6);

console.log("1c: Filter");
console.log("--------------------------------------------");
console.log("List of all words: " + words);
console.log("Starts with vowel: " + result);
console.log("--------------------------------------------");