let precos=[];
let descontos=[]
precos.push(15,30,40,50)



for (let index = 0; index < precos.length; index++) {
   descontos.push(precos[index]*0.9)
    
}
console.log(precos);
console.log(descontos);





//ou com comando

//var descontos= precos.map(precos=>{
  //  return valor*0.9
//})