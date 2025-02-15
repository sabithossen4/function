const biraniKhor=['abul','babul','kabul','abul','babul','bulbul','kobul','kobul'];
const numbers=[45,98,21,68,45,5,7,5,8];
const unique=[];
function dublicateArry(arry){
  for(const item of arry){
     if(unique.includes(item)===false){
         unique.push(item);
     }
  }
  return unique;
}
const unickArry=dublicateArry(biraniKhor);
// const unickArry=dublicateArry(numbers);
console.log(unickArry);