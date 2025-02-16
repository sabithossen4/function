const biraniKhor=['abul','babul','kabul','abul','babul','bulbul','kobul','kobul'];
const numbers=[45,98,21,68,45,5,7,5,8];

function dublicateArry(arry){
  const unique=[];
  for(const item of arry){
     if(!unique.includes(item)){
         unique.push(item);
     }
  }
  return unique;
}
const unickArry=dublicateArry(biraniKhor);
const unickArry2=dublicateArry(numbers);
console.log(unickArry);
// console.log(unickArry2);
