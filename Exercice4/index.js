function message(){
    const body = document.querySelector("body");
    const parag = document.createElement("p");
    body.appendChild(parag);
    parag.textContent = 'Bonjour, vous avez cliqué sur le bouton !';
}

document.getElementById("myButton").addEventListener("click", message);
