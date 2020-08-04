// Initial variable
let tryLeft = document.getElementById('numOfTry');
let totalTry = 3;
// Hide Section
function hideAllMessage() {
    const notifyWrong = document.getElementById("notify-wrong");
    notifyWrong.style.display = 'none';
    const notifySuccess = document.getElementById("notity-success");
    notifySuccess.style.display = 'none';
  }
  hideAllMessage();

  
// Rendom digit generate part
const generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click",function () {
    let calc = getRandom(1000,9999);
    const numberInput = document.getElementById("show-pin");
    numberInput.value = calc;

})
function getRandom(start,range) {
    let getRandom =  Math.floor(Math.random()*range + start);
    while(getRandom > range) {
       getRandom =  Math.floor(Math.random()*range + start);
    }
    return getRandom;
}

// Pin pad, User Input provide part.
function getOutput(){
	return document.getElementById("user-input-pin").value;
}
function printOutput(num){
        document.getElementById("user-input-pin").value = num;
    }
let operator = document.getElementsByClassName("operator");
for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener("click",function () {
        // when click on 'C' btn
        if (this.id== "clear") {
            printOutput("");
        }
        else if (this.id == "backSpace"){
              // when click on '<' btn
            let output = getOutput().toString();
            if (output) {
                output = output.substr(0,output.length-1);
                printOutput(output);
            }
        }
    })   
}

// when click on the rest number btn
let number = document.getElementsByClassName("button");
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener("click",function () {
       let output = getOutput();
       output = output+this.id;
       printOutput(output); 
    })   
}

// Whwn submit button is clicked
let submitBtn = document.getElementById("submit-btn")
submitBtn.addEventListener("click",function () {
    const inputPin = document.getElementById("user-input-pin").value;
    const generatedPin = document.getElementById("show-pin").value;
    if (inputPin == generatedPin ) {
        const notifyWrong = document.getElementById("notify-wrong");
        notifyWrong.style.display = 'none';
        const notifySuccess = document.getElementById("notity-success");
        notifySuccess.style.display = 'block';
        
    }
    // when not matching the user input
    else {
        const notifyWrong = document.getElementById("notify-wrong");
         notifyWrong.style.display = 'block';
         const notifySuccess = document.getElementById("notity-success");
         notifySuccess.style.display = 'none';
         totalTry--;
         tryLeft.innerText = totalTry;
    }
    // when the button is disabled
    if (totalTry == 0) {
        submitBtn.disabled = true;
        submitBtn.style.backgroundColor = '#3d4153';
      }
})