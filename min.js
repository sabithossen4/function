const height=[45,87,89,60,70,49,47];
function minHeight(numbers){
    let min =numbers[0];
    for(const num of numbers){
      if(min>=num){
        min=num;
      }
    }
    return min;
}
const getmin=minHeight(height);
console.log(getmin);