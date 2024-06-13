//votre code ici

function pairNumbers(min, max) {
    const evenList = [];
    for (let i = min; i <= max; i++) {
      if (i % 2 === 0) {
        evenList.push(i);
      }
    }
    return evenList.join(',');
  }
  
  export default pairNumbers;
