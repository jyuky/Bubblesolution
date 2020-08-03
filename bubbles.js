//1)Listar todas as soluções com suas notas correspondentes 
//2)Imprimir o total de notas das bolhas (quantidade de itens no array)
//3)Descobrir qual a maior nota 
//4)Quais indices possuem a maior nota 


var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];
//Array de notas 


//1)Listar todas as soluções com suas notas correspondentes 

var output;
var i = 0;

/* while( i < scores.length){
    output = ("Bubble solution #" + i + "score:" + scores[i]);

    console.log(output);
    i = i + 1;
} */

for (var i = 0; i < scores.length ; i++){ //Loop for usado para interar todas as notas das soluções 
    output = ("Bubble solution #" + i + "score:" + scores[i]);// A cada loop feito, uma string contendo o indice a o valor do array será gerada
    console.log(output);
}
//

//2)Imprimir o total de notas das bolhas (quantidade de itens no array)

var size = scores.length
console.log("Bubbles test:"+ size)  

//3)Descobrir qual a maior nota 
var highScore = 0;
for(var i = 0; i < scores.length; i++){
    if(scores[i] > highScore){
        highScore = scores[i];
     }
}
console.log("Highest bubble score: " + highScore);


//4)Quais indices possuem a maior nota 

var bestSolution = [];
for(var i = 0; i < scores.length; i++){
   if(scores[i] == highScore) {
       bestSolution.push(i);
   }
}
console.log("Solutions with the highest score:" + bestSolution)