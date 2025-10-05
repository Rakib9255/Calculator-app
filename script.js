const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const value = e.target.textContent;

    if (value === "C") {
      currentInput = "";
      display.value = "";
    } else if (value === "⌫") {
      currentInput = currentInput.slice(0, -1);
      display.value = currentInput;
    } else if (value === "=") {
      try {
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
      } catch {
        display.value = "Error";
      }
    } else {
      currentInput += value;
      display.value = currentInput;
    }
  });
});
