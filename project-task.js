/*
===========================================
🛒 Higher-Order Functions: Product Utilities
===========================================

🎯 Objective:
Students will create and work with higher-order functions to transform and manipulate data.

They will:
- Write higher-order functions that accept callbacks to apply transformations dynamically
- Practice returning functions from higher-order functions for reusable, customizable utilities
- Gain experience using `map`, `filter`, and `reduce` to perform practical data transformations
*/

// ============================================
// 📦 Starting Dataset: Product List
// ============================================

const products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Phone", price: 500, inStock: false },
  { name: "Tablet", price: 800, inStock: true },
  { name: "Monitor", price: 300, inStock: true },
  { name: "Keyboard", price: 100, inStock: false },
];

// ============================================
// 🔧 Tasks
// ============================================

/*
🔹 Task 1: Filter Products by Availability

Create a function `filterProducts` that accepts:
- an array of products
- a callback function

The callback should determine which products to include.
Example: filter by availability or price threshold.

Step-by-Step:
1. Define the `filterProducts` function with appropriate parameters.
2. Use the `filter()` method to apply the callback to the array.
3. Return the filtered result.
*/

// Defining function filterProducts with two parameters
function filterProducts(productArray, callback) {
  //applying .filter() with callback, so it runs for every element in the array
  // and stores the ones that return true in the filteredResult array
  const filteredResult = productArray.filter(callback);
  //returning the result
  return filteredResult;
}

//calling the filterProduct funtion based on product availability
const availableItems = filterProducts(products, product => product.inStock === true);
console.log("Avaialble Products: ", availableItems);

//calling the filterProduct funtion based on price threshold
const exclusiveItems = filterProducts(products, product => product.price > 500);
console.log("Products over $500: ", exclusiveItems);
/*
🔹 Task 2: Transform Product Names

Use `map()` to create a new array of product names in UPPERCASE.

Step-by-Step:
1. Use `map()` on the products array.
2. Extract and transform the `name` property to uppercase.
3. Store the result in a new variable.
*/

//*********Returning only the 'name' property*************

//Applying map method to transform the `name` property to uppercase
const upperCaseProductNames = products.map(product => product.name.toUpperCase());
console.log("Transforming 'name' property to uppercase :",upperCaseProductNames);

//*********If we want to return the whole array after transformation**********

//Applying map method on product array to convert 'name' property to uppercase and returning the whole array
//'...' spread operator is used to copy all the array elements 
const upperCaseNames = products.map(item => ({...item, name:item.name.toUpperCase()}));
console.log("\n Products Array after transforming 'name' property to uppercase :",upperCaseNames);



/*
🔹 Task 3: Generate Discounted Prices

Write a higher-order function `applyDiscount` that:
- Accepts a discount percentage as a whole number
- Returns a function that takes in a product object and returns a discounted price

Step-by-Step:
1. Define a function `applyDiscount` with a parameter `discountPercent`.
2. Return a new function that takes a product object.
3. Use this returned function inside a `forEach()` call to add a new property, `salePrice`, to each product object.
4. Print the array of products to verify the new property and value have been added to each product object.
*/

//Defining function applyDiscount
function applyDiscount(discountPercent) {
  //Return a new function that takes a product object
  return function (product){ 
    const discount =  product.price * (discountPercent/100);
   //Adding new salePrice property to product object
    product.salePrice = product.price - discount ;
    //returning the product object
   return product;
   }
}
//Applying forEach method on function to apply discount on every product of object
products.forEach(applyDiscount(10));
//verifying new property salePrice
console.log("Discounted products:", products);


/*
🔹 Task 4: Calculate Total Inventory Value

Use `reduce()` to calculate the total value of products that are currently in stock.

Step-by-Step:
1. Use the `reduce()` method on the products array.
2. Add only the prices of products where `inStock` is true.
3. Store the total in a new variable.
*/

//Scenario:1----Applying reduce method on the availableItems array(which is already available from task 1)

const totalValue = availableItems.reduce((accumulator,product) => accumulator + product.price, 0);
console.log("Total value in stock:",totalValue);


//Scenario:2 ---- If we do not have an available items array

//Applying reduce method on products array
const totalValueInStock = products.reduce((accumulator,product) =>{
  if(product.inStock === true)
    return accumulator + product.price; //Adding the prices of instock products
  else
    return accumulator; // If there are no items instock returns accumulator
},0); // We are assigning the initial value to 0
console.log("Total value in stock:",totalValueInStock);



// ============================================
// 🧪 Console Test Your Work
// ============================================

// console.log("Filtered products:", ...);
// console.log("Uppercased names:", ...);
// console.log("Discounted products:", ...);
// console.log("Total value in stock:", ...);
