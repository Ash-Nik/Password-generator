const darkModeToggle = document.getElementById("flexSwitchCheckDefault");
const body = document.body;
let box1 = document.getElementById("box1");
let navElements = document.querySelectorAll(".down-nav");
darkModeToggle.addEventListener("change", function () {
  if (darkModeToggle.checked) {
    body.classList.add("dark-mode");
    box1.classList.add("bg-black");
    // navbar.classList.add("bg-dark, border-bottom ,border-body")
    navElements.forEach((navElement) => {
      navElement.classList.remove("bg-white", "text-dark");
      navElement.classList.add("bg-dark", "text-white");
    });
  } else {
    body.classList.remove("dark-mode");
    box1.classList.remove("bg-black");
    navElements.forEach((navElement) => {
      navElement.classList.remove("bg-dark", "text-white");
      navElement.classList.add("bg-white", "text-dark");
    });
  }
});

class Password {
  constructor() {
    this.small = "abcdefghijklmnopqrstuvwxyz";
    this.capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.num = "0123456789";
    this.special = "!@#$%^&*()_+[]{}|;:,.<>?";

    this.rangeValue = 6;
    this.customRange2 = document.getElementById("customRange2");
    this.inputPassword5 = document.getElementById("inputPassword5");

    this.customRange2.addEventListener("input", () => {
      this.rangeValue = this.customRange2.value;
      this.inputPassword5.value = this.rangeValue; // Set inputPassword5 value
    });

    this.inputPassword5.addEventListener("input", () => {
      let inputValue = this.inputPassword5.value;

      if (inputValue < 6) {
        inputValue = 6;
      } else if (inputValue > 45) {
        inputValue = 45;
      }

      this.rangeValue = inputValue; // Update rangeValue as well
      this.customRange2.value = inputValue;
    });
  }

  generatePassword(arr) {
    let pass = "";
    for (let i = 0; i < this.rangeValue; i++) {
      let ran1 = Math.floor(Math.random() * arr.length);
      let ran2 = Math.floor(Math.random() * arr[ran1].length);
      pass += arr[ran1][ran2];
    }
    return pass;
  }

  easy_Pass() {
    let arr = [this.small, this.capital];
    return this.generatePassword(arr);
  }

  medium_pass() {
    let arr = [this.small, this.capital, this.num];
    return this.generatePassword(arr);
  }

  difficult_pass() {
    let arr = [this.small, this.capital, this.num, this.special];
    return this.generatePassword(arr);
  }
}

let a = new Password();
let radio = document.getElementsByClassName("rdio");
let copy = document.getElementById("copy-button");
let disp = document.getElementById("display1");
let generate = document.getElementById("button-addon2");
generate.addEventListener("click", () => {
  let b;
  if (radio[0].checked) {
    b = a.easy_Pass();
  } else if (radio[1].checked) {
    b = a.medium_pass();
  } else if (radio[2].checked) {
    b = a.difficult_pass();
  }
  disp.value = b;
});

copy.addEventListener("click", () => {
  disp.select();
  document.execCommand("copy");
});

const customRange2 = document.getElementById("customRange2");
const rangeValueDisplay = document.getElementById("upper-box");
const inputPassword5 = document.getElementById("inputPassword5");

customRange2.addEventListener("input", () => {
  const rangeValue = customRange2.value;
  const passwordLength = inputPassword5.value;

  if (rangeValue < 10 ) {
    rangeValueDisplay.innerHTML = "Length chosen for: Weak password";
  } else if (rangeValue >= 10 && rangeValue < 20 ) {
    rangeValueDisplay.innerHTML = "Length chosen for: Strong password";
  } else {
    rangeValueDisplay.innerHTML = "Length chosen for: Very-Strong password";
  }
});

inputPassword5.addEventListener("input", () => {
  const rangeValue = customRange2.value;
  const passwordLength = inputPassword5.value;

  if (rangeValue < 10 && passwordLength < 10) {
    rangeValueDisplay.innerHTML = "Length chosen for: Weak password";
  } else if (rangeValue >= 10 && rangeValue < 20) {
    rangeValueDisplay.innerHTML = "Length chosen for: Strong password";

  } else {
    rangeValueDisplay.innerHTML = "Length chosen for: Very-Strong password";
  }
});
