/*
 * Using JavaScript in your browser only, you will listen for the form's submit event; when the form is submitted, you will:

 * Get the value of the input text element (this will be the Fibonacci index) 
 * Calculate the Fibonacci value for the given index
 * Determine whether or not the number is a prime number
 * Add a list item to the #fibonacciResults list of numbers you have checked. This list item should have a class of is-prime if it is a prime number, or not-prime it is not.
 * If the user does not have a value for the input when they submit, you should not continue checking and instead should inform them of an error somehow.
*/
let form = document.getElementById("form");
let fibInput = document.getElementById("fibonacci_index_input");
let errorDiv = document.getElementById("error");
let results = document.getElementById("fibonacciResults");
let frmLabel = document.getElementById("formLabel");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = input.value;
    if (input && Number.isInteger(input)) {
      const fibIndex = input < 1 ? 0 : input;
      // TODO


      textInput.classList.remove("inputClass");
      errorDiv.hidden = true;
      frmLabel.classList.remove("error");
      let li = document.createElement("li");

      li.innerHTML = textInput.value;
      myUl.appendChild(li);
      myForm.reset();
      textInput.focus();

    } else {
      textInput.value = "";
      errorDiv.hidden = false;
      errorDiv.innerHTML = "You must enter an integer value!";
      frmLabel.className = "error";
      textInput.focus();
      textInput.className = "inputClass";
    }
  });
}
