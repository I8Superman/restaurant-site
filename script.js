// Cloning example:

const template = document.querySelector("#templatetest").content;

console.log("template created");

const cloneTest = template.cloneNode(true);

cloneTest.querySelector("h3").textContent = "A NICE Russian meal!";
cloneTest.querySelector("p").textContent = "A completely different short description";
cloneTest.querySelector("h4").textContent = "New price: 2 dollars!";

console.log("content changed");

const whosyourDaddy = document.querySelector("#starters");

whosyourDaddy.appendChild(cloneTest);

console.log("appended to parent element!");


/*

Cloning stuff:

//Step 1: Chose the <template>'s content
const templateElement = document.querySelector("#myTemplate").content;

//Step 2: Make a "clone"
const myClone = templateElement.cloneNode(true);

//Step 3: Change the content
myClone.querySelector("h1").textContent = "Hi Mom";
//...

//Step 4: Chose the new "parent" element
const parentElement = document.querySelector("body");

//Step 5: Add (Append) the clone to the DOM
parentElement.appendChild(myClone);

*/
