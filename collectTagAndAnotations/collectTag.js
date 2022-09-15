/* Collecting all <a> inside <ul> and printing them one by one
* https://ifpb.github.io/ls/classnote
*/ 
const allElements = document.querySelectorAll("main ul li a");

for (const element of allElements) {
    console.log(element.innerHTML);
}

// or
for (let i = 0; i < allElements.length; i++) {
    console.log(allElements[i].innerHTML);
}

// or
allElements.forEach(element => console.log(element.innerHTML));

// change color
allElements.forEach(element => console.log(element.setAttribute("style", "color: red;")));

// get href
allElements.forEach(element => console.log(element.getAttribute("href", "href")));