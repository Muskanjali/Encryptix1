// create variable that contains display value
let displayValue='';

//creating function to input value that parameterized  a value in the display
function inputValue(value){  //value is a parameter
    displayValue+=value; //concatenating display value
    updateDisplay();
}

//creating function to clear display 
function clearDisplay(){
    displayValue='';  //clearing display value
    updateDisplay();  //calling updateDisplay function to clear dispaly
}

function deleteLast(){
    displayValue=displayValue.slice(0, -1);
    updateDisplay();
}



//creating function to update Display
function updateDisplay(){
    document.getElementById('display').innerText=displayValue||'0';  //displaying display value
}

// creating function to calculate result
function calculateResult(){
    try{
        displayValue=eval(displayValue).toString(); //evaluating  displayy value

    }catch(err){
        displayValue='Error';  //displaying error
    }
    updateDisplay();  //calling updatedisplay function to update calculated result
}