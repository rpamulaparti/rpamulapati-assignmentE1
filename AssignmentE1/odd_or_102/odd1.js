var inputElement = document.getElementById("start");
inputElement.addEventListener("input", calculate);

function calculate() {
    var inputElement = document.getElementById("start");
    var resultElement = document.getElementById("result");
  
    var num1 = parseInt(inputElement.value);
    var sum = 0;
  
    for (var i = num1; i <= num1 + 50; i++) {
      if (i % 2 === 0) { 
        sum += i;
      }
    }
    resultElement.textContent = "Sum of even numbers from " + num1 + " to " + (num1 + 50) + " is: " + sum;
  }

  
