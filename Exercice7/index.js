function convertToBinary(){
    const inputValue = document.getElementById('decimalInput').value;

     // Vérifier si l'entrée est un nombre valide
     if (inputValue.trim() === '' || isNaN(inputValue)) {
        document.getElementById('binaryResult').textContent = '';
        return;
    }

    let decimalNumber = parseInt(inputValue);
    let binaryNumber = '';

    while (decimalNumber > 0){
        let remainder = decimalNumber % 2;
        binaryNumber = remainder + binaryNumber;
        decimalNumber = Math.floor(decimalNumber / 2);
    }

    // Gérer le cas où le nombre est 0
    if (binaryNumber === '') {
        binaryNumber = '0';
    }

    document.getElementById('binaryResult').textContent = binaryNumber;
}
