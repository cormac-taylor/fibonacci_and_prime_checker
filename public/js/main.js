let formLabel = document.getElementById("formLabel");
let form = document.getElementById("form");
let fibInput = document.getElementById("fibonacci_index_input");
let subButton = document.getElementById("submitButton");

let errorDiv = document.getElementById("error");
let calculatingDiv = document.getElementById("calculating");

let results = document.getElementById("fibonacciResults");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = fibInput.value;
    let index;
    if (!isNaN(input) && Number.isInteger((index = Number.parseFloat(input)))) {
      const fibIndex = index < 1 ? 0 : index;
      formLabel.className = "text";
      errorDiv.hidden = true;

      fibInput.disabled = true;
      subButton.disabled = true;
      calculatingDiv.hidden = false;
      calculatingDiv.innerHTML = `Calculating the Fibonacci of ${input}...`;

      fibValue = fib(fibIndex);
      let li = document.createElement("li");
      li.className = isPrime(fibValue) ? "is-prime" : "not-prime";
      li.innerHTML = `The Fibonacci of ${input} is ${fibValue === Infinity ? "<strong>TOO LARGE</strong>" : fibValue}.`;
      results.appendChild(li);

      calculatingDiv.hidden = true;
      fibInput.disabled = false;
      subButton.disabled = false;
      form.reset();
      fibInput.focus();
    } else {
      form.reset();
      formLabel.className = "error";
      errorDiv.hidden = false;
      errorDiv.innerHTML = "You must enter an integer value!";
      fibInput.focus();
    }
  });
}

function fib(index) {
  function fasterFib(a, b, i) {
    if (!isFinite(b)) return Infinity;
    if (i === 0) return a;
    else return fasterFib(b, a + b, --i);
  }
  return fasterFib(0, 1, index);
}

const isPrime = (val) => {
  if (val < 2 || !isFinite(val)) return false;
  const sqrtval = Math.floor(Math.sqrt(val));
  for (let i = 2; i <= sqrtval; i++) if (val % i === 0) return false;
  return true;
};
