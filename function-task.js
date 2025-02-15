// function numbers(sum,sum1,sum2,sum3){
//     const sums=sum*sum1*sum2*sum3;
//     return sums;
// }
// const sums=numbers(5,3,9,11);
// console.log(sums);


function oddofEvenNumbers(numbers){
  let sum=0;
  for(const number of numbers){
    if(number%2===1){    
      console.log(number);         
    }    
  }
  return sum;  
}
const numbers = [3,8,10,13,16,17];
const sum=oddofEvenNumbers(numbers);
console.log("odd number sum",sum);

