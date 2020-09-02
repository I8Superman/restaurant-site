// Fetch the data - categories

init();

function init() {
    fetch("https://kea-alt-del.dk/t5/api/categories").then(response => response.json()).then(
        function (data) {
            categoriesReceived(data)
        })
}

function categoriesReceived(cats) {
    //console.log(cats);
    createSections(cats);
    createNavigation(cats);
    fetchCourses(cats);

}

function createSections(categories) {
    categories.forEach(category => {
        const section = document.createElement("section");
        section.setAttribute("id", category);
        const h2 = document.createElement("h2");
        h2.textContent = category;
        section.appendChild(h2);
        document.querySelector(".productlist").appendChild(section);
    })
}

function createNavigation(categories) {
    categories.forEach(category => {
        //console.log(category)
        const a = document.createElement("a");
        a.textContent = category;
        a.setAttribute("href", `#${category}`);
        document.querySelector("nav").appendChild(a);
    })
}


// Fetch the data - productlist

function fetchCourses() {
    fetch("https://kea-alt-del.dk/t5/api/productlist")
        .then(function (response) {
            //console.log(response);
            return response.json();
        })
        .then(function (data) {
            //console.log(data);
            dataReceived(data);
        })
}


function dataReceived(courses) {
    // loop through data
    courses.forEach(showCourse);
}

// Executed once for each course
function showCourse(oneCourse) {
    // Find the template
    const template = document.querySelector("#courseTemplate").content;
    // clone the template
    const myCopy = template.cloneNode(true);

    // Add icons
    if (oneCourse.vegetarian) {
        myCopy.querySelector(".vegetarian").classList.remove("hidden");
    }

    // add soldout sign
    if (oneCourse.soldout) {
        const p = document.createElement("p");
        p.textContent = "Sold Out";
        myCopy.querySelector("article").appendChild(p);
    }

    // Setup classes for filtering
    // 1. Find the element
    const article = myCopy.querySelector("article");
    if (oneCourse.vegetarian) {
        article.classList.add("vegetarian");
    }
    // 2. Add classes

    // Fill out the template
    myCopy.querySelector(".course_name").textContent = oneCourse.name;
    myCopy.querySelector(".short_description").textContent = oneCourse.shortdescription;
    myCopy.querySelector(".course_price").textContent = `${oneCourse.price},-`
    // Append the template
    const parentElement = document.querySelector("section#starter");
    parentElement.appendChild(myCopy);
}

const vegetarian_button = document.querySelector("#vegetarian_button");
vegetarian_button.addEventListener("click", vegetarianButtonClicked);

function vegetarianButtonClicked(){
    const articles = document.querySelectorAll("article:not(.vegetarian)");
    articles.forEach(article => {
        article.classList.toggle("hidden");
    })
}




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
