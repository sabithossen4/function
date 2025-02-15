function oddAvarageNumber(numbers){
     const odd= [];
     for(const number of numbers){
       if(number%2===1){
        odd.push(number)       
       }       
     }     
     let sum=0;
     for(const number of odd){
       sum=sum+number;
     };
     const count = odd.length;
     const avg = sum/count;
     
     return avg;
    //  return odd;
}
const numbers=[45,82,15,68,79,20];
const age = oddAvarageNumber(numbers);
console.log('total age ',age);



