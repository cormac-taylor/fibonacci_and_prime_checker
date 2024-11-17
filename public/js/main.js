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
let formLabel = document.getElementById("formLabel");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = fibInput.value;
    let index;
    if (!isNaN(input) && Number.isInteger((index = Number.parseFloat(input)))) {
      const fibIndex = index < 1 ? 0 : index;
      errorDiv.hidden = true;
      formLabel.className = "text";
      fibValue = fib(fibIndex);
      let li = document.createElement("li");
      li.className = isPrime(fibValue) ? "is-prime" : "not-prime";
      li.innerHTML = `The Fibonacci of ${input} is ${fibValue}.`;
      results.appendChild(li);
      form.reset();
      fibInput.focus();
    } else {
      form.reset();
      errorDiv.hidden = false;
      errorDiv.innerHTML = "You must enter an integer value!";
      formLabel.className = "error";
      fibInput.focus();
    }
  });
}

function fib(index) {
  function fasterFib(a, b, i) {
    if (i === 0) return a;
    else return fasterFib(b, a + b, --i);
  }
  return fasterFib(0, 1, index);
}

const isPrime = (val) => {
  if (val < 2) return false;
  const sqrtval = Math.floor(Math.sqrt(val));
  for (let i = 2; i <= sqrtval; i++) if (val % i === 0) return false;
  return true;
};
