// console.dir(window.document);

// document.body.children[1].children[0].href = "https://google.com";

// let anchorElement = document.getElementById("external-link");
// anchorElement.href = "https://google.com";

let anchorElement = document.querySelector("a");
anchorElement.href = "https://naver.com";

// add an element
// 1. 새로운 요소 만들기
let newAnchorElement = document.createElement("a"); // anchor 요소
newAnchorElement.href = "https://google.com";
newAnchorElement.textContent = "This leads to Google!";

// 2. 새로운 요소의 부모 요소에 접근하기
let firstParagraph = document.querySelector("p");

// 3. 부모 요소의 content에 새로운 요소 끼워넣기
firstParagraph.append(newAnchorElement);

// remove elements
// 1. 지울 요소 선택하기
let firstH1Element = document.querySelector("h1");

// 2. 지우기
firstH1Element.remove();

// move existing elements
firstParagraph.parentElement.append(firstParagraph);

// innerHTML
firstParagraph.innerHTML = "Hi! This is <strong>important!</strong>";
