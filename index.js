function dwarfRollCall(dwarves) {
// <<<<<<< HEAD
var i = dwarves.length/2;
 var line = [];  
 
  while (i < dwarves.length){


line.push( parseInt(i + 1)  + `. `  +  dwarves[i]+ " "); 
  i++;
  } 
 
 return line.join(""); 
// =======
  
// >>>>>>> 63f1a66236354e79471db5aa7ea7219a55db1117
}

function summonCaptainPlanet(planeteerCalls){
  var newCall = [];

// <<<<<<< HEAD
for (var i=0; i < planeteerCalls.length; i++) {


newCall.push(planeteerCalls[i].toUpperCase() +"!" );  


}

return newCall
}

function longPlaneteerCalls(words) {
  for (var i=0; i < words.length; i++) {

  if (words[i].length > 4 ) {return true}
  
  }
  
 return false

}

function findTheCheese (foods) {
for(var i=0; i < foods.length; i++) {
     if (foods[i] === "gouda" || foods[i] === "cheddar" || foods[i] === "camembert" || foods[i] === "swiss"  ) {
      
       return foods[i]
     }

       
  }    

return "no cheese!";
  
}

function wordwithb(words) {
  
  var newarr = [];
  
  for (i=0; i < words.length; i++)
  
{
 
   if(words[i].includes("b")){
     newarr.push(words[i])
     
   } 
  
    
  }
  
  return newarr;
}


