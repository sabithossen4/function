const numbe = [5,8,11,14,17,18];
function sumofEvenNumbers(numbers){
    let sum=0;
    for(const number of numbers){
      if(number%2===0){
        console.log(number);
      }
      else if(number%2===1){
        console.log('number');
      }
      
    }
    return sum;
};
const sum= sumofEvenNumbers(numbe);
// const odd = sumofEvenNumbers(numbe);

console.log('sum if the even', sum);
// console.log('odd if the even', odd);
