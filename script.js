const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

const check = () => {
  const regex = /[^a-zA-Z\d]/g;
  const wordInput = document
    .getElementById("text-input")
    .value.replace(regex, "")
    .toLowerCase();
  if (wordInput === "") {
    alert("Please input a value");
  } else if (wordInput === wordInput.split("").reverse().join("")) {
    result.innerText = `${
      document.getElementById("text-input").value
    } is a palindrome`;
  } else {
    result.innerText = `${
      document.getElementById("text-input").value
    } is not a palindrome`;
  }
};

checkButton.addEventListener("click", check);
