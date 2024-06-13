// Créez votre fonction ici
function calculateAverage(numbers){
    if(!numbers || numbers.length === 0) {
        return 'No numbers to calculate average';
    } else {
        let sumNumbers = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        return sumNumbers / numbers.length;
    }
}
// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])) // retourne 10
console.log(calculateAverage([10, 20, 30, 20])) // retourne 20
console.log(calculateAverage()) // No numbers to calculate average

export default calculateAverage
