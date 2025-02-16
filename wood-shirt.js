function myShoping(shirt,pant,shoe){
  const perShirt =500;
  const perPant =600;
  const perShoe =1000;

  const totalperShirt=perShirt*shirt;
  const totalperPant = perPant*pant;
  const totalpershoe = perShoe*shoe;

  const total=totalperShirt+totalperPant+totalpershoe;

  return total;
}
const totalshoping=myShoping(0,0,1);
console.log("Total shoping",totalshoping);