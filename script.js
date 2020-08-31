// fetch data

fetch("https://kea-alt-del.dk/t5/api/productlist")
    .then(function (res) {
        return res.json();
        console.log(res)
    })
    .then(function (data) {
        console.log(data)
        dataReceived(data);
    })

// Here we pass the data to a function andgive he data a new name - products

function dateReceived(courses) {
    // loop through data
    courses.forEach(showCourse);
}

function showCourse(myCourse) {
console.log(mycourse)
}

// find the template

// clone template

// Fill out the template

// Append the template


/* Cloning example:

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

*/


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
