function appendToDisplay(button){
    const inputElement = document.getElementById('display');
    inputElement.value += button;
}

function clearDisplay(){
    const inputElement = document.getElementById('display');
    inputElement.value='';
}

function calculateResult() {
    const inputValue = document.getElementById("display").value;
  
    // Valider l'expression
    const regex = /^[0-9+\-*/\s]+$/;
    if (regex.test(inputValue)) {
        // Évaluer l'expression
        const result = eval(inputValue);
        // Vérifier si le résultat est un nombre fini
        if (Number.isFinite(result)) {
          document.getElementById("display").value = result;
        } else {
          document.getElementById("display").value = "Division by zero is not allowed";
        }
      }
  }
  