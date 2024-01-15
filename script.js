const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");
const wordInput = document.getElementById("text-input");

// cleans string and returns if string is a palindrome
const palindromeCheck = (str) => {
  const cleanStr = str.replace(/[^a-zA-Z\d]/g, "").toLowerCase();
  return cleanStr === cleanStr.split("").reverse().join("");
};

// function for Check Button on-click event
const getResult = () => {
  const wordValue = wordInput.value.trim();

  if (wordValue === "") {
    alert("Please input a value");
  } else {
    const message = palindromeCheck(wordValue)
      ? `${wordValue} is a palindrome`
      : `${wordValue} is not a palindrome`;

    result.innerText = message;
  }
};

checkButton.addEventListener("click", getResult);
