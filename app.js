const btns = document.querySelectorAll(".btn");
const display = document.querySelector(".display");

btns.forEach(function (btn) {
   // console.log(btn)
   btn.addEventListener("click", function () {
      // console.log(this.textContent);
      Calculate(this.textContent);
   });
});

let result = "";

function Calculate(btnValue) {
   result = display.value;
   if (btnValue === "=") {
      result = result.replace("X", "*").replace("÷", "/");
      result = eval(result);
      if(result===Infinity || result === -Infinity){
         result = "Cannot divide by zero";
      }
   } else if (btnValue === "C") {
      result = result.slice(0, -1);
   } else if (btnValue === "AC") {
      result = "";
   } else {
      result += btnValue;
   }
   display.value = result;
   btnValue = "";
}
