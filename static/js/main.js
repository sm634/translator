///// Without Anonymous (arrow) function (i.e. like lambda expression)
// document.querySelector("html").addEventListener("click", function () {
//     alert("Ouch! Stop poking me!");
//   });

///// With Anonymous (arrow) function.
// document.querySelector("html").addEventListener("click", () => {
//     alert("Ouch! Stop poking me!")
// })

const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc.includes("soultech2.jpg")) {
        myImage.setAttribute("src", "/static/images/soultech1.jpg");
    } else {
        myImage.setAttribute("src", "/static/images/soultech2.jpg");
    }
});

let myButton = document.querySelector('button');
let myHeading = document.querySelector('p');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Soul Tech is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Soul Tech is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
  