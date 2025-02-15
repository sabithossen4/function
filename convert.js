function inchToFeet(inch){
  const feet = inch/12;
  return feet;
} 

function inchToFeet2(inch){
  const feetFration = inch/12;
  const feetNumber =parseInt(feetFration);
  const inchRemaing = inch%12;
  const result = feetNumber+ ' Feet '+inchRemaing+' inch';
  return result;
} 
const shuvoheight= inchToFeet(75);
const shuvoheight2= inchToFeet2(75);
console.log(shuvoheight);
console.log(shuvoheight2);

function mileToKilo(mile){
  const kilo=mile*1.6003;
  return kilo;
}
const kilomiter=mileToKilo(5);
console.log(kilomiter)