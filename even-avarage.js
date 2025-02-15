function evenAvarageNumber(numbers){
  const even =[];
  for(const number of numbers){
    if(number%2===0){
       even.push(number);
    }
  }
  let sum=0;
  for(number of even){
    sum=sum+number;
  }
  // const count = even.length;
  const avg=sum/even.length;
  return avg;
    // return even;
}
const numbers=[45,82,15,68,79,20];
const age =evenAvarageNumber(numbers);
console.log('even avarage',age);