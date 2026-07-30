//WRITE A FUNCTION TO TAKE ANY DIGIT (0-9) AND
// RETURN ITS IN WORD
// 0 -ONE
// 5 - FIVE
const word =(a) => {
    const words =["zero","one","two","three","four","five","six","seven","eight","nine",];
    return words[a];
}
console.log(word(0));
console.log(word(5));