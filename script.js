// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("calculate").addEventListener("click", function () {
      let num1 = parseFloat(document.getElementById("num1").value);
      let num2 = parseFloat(document.getElementById("num2").value);
      let operation = document.getElementById("operation").value;
      let result;
  
      switch (operation) {
        case "add":
          result = add(num1, num2);
          break;
        case "subtract":
          result = subtract(num1, num2);
          break;
        case "multiply":
          result = multiply(num1, num2);
          break;
        case "divide":
          result = divide(num1, num2);
          break;
        default:
          result = "Invalid operation";
      }
  
      document.getElementById("result").innerText = `Result: ${result}`;
    });
  });
  