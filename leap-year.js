function isLeapYear(year){
  if(year%100 !== 0 && year%4===0){
    return true;
  }
  else if(year%400===0){
    return true;    
  }
  else{
    return false;
  }
  
  
}
const isLeap=isLeapYear(2000);
const isLeap1=isLeapYear(2021);
const isLeap2=isLeapYear(2035);
const isLeap3=isLeapYear(1999);
const isLeap4=isLeapYear(2024);
console.log(isLeap,isLeap1,isLeap2,isLeap3,isLeap4);
