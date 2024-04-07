const inputElement = document.getElementById("product-name");
const remainingCharsElement = document.getElementById("remaining-chars");

const maxAllowedChars = inputElement.maxLength; // 최대 글자수

function updateRemainingChars(event) {
    const enteredText = event.target.value;
    const enteredTextLength = enteredText.length;
    const remainingChars = maxAllowedChars - enteredTextLength;
    remainingCharsElement.textContent = remainingChars;
}

inputElement.addEventListener("input", updateRemainingChars);
