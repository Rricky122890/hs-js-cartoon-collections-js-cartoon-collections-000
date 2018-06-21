function dwarfRollCall(dwarves) {
var i = 0;
 var line = [];  
 
  while (i < dwarves.length){


line.push( parseInt(i + 1)  + `. `  +  dwarves[i]+ " "); 
  i++;
  } 
 
 return line.join(""); 
}

function summonCaptainPlanet(planeteerCalls){
  var newCall = [];

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
     if (foods[i] === "gouda" || foods[i] === "cheddar" || foods[i] === "camembert" ) {
      
       return foods[i]
     }

       
  }    

return "no cheese!";
  
}


