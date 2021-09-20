//Array Vazio com a escrita Padrão
var array1 = new Array();    
//Array de 100 elementos Vazios com a escrita padrão
var array2 = new Array(100); 
//Array Vazio com a escrita sucinta
var array3 = [];             
//Array de 3 elementos com a escrita sucinta
var array2 = [100,200,300]; 

//---------------------------------------------------------------------------------
// Array de strings
var arrayString = ["banana", "laranja", "maçã"];
// Array de numbers
var arrayNumbers = [1, 2, 3];
// Array de objetos                    
var arrayObjetos = [{nome: 'Marcelo', idade: 59},{nome: 'Beatriz', idade: 43},{nome: 'Bruno', idade: 24}];
// Array de arrays, ou mais conhecida como array bidimensional                    
  // var arrayArray = [[1,2,3], [4,5,6], [7,8,9]];
// Array mista   
  // var arrayMisto = ["banana", 1, {nome: 'Marcelo', idade: 59}, [4,5,6]];           

// Acessando dados do array
  // console.log(arrayObjetos[1]);
  // console.log(arrayArray[1]);
  // console.log(arrayMisto);
// Alterando elementos do array
  // console.log("Array inicial "+ arrayString);
  // arrayString[1] = "abacaxi";
  // console.log("Após alteração na posição 1 " + arrayString);

// Exibe quantos elementos tem o array
  // console.log(arrayObjetos.length);               

// Array com funções
  // function ola(){alert("Alo")}

  // var arrayFuncao = [1, 2, ola, function(){alert("oi")}];
//arrayFuncao[3]();

// nomeDoArray.push() inclui um item dentro de um Array
var numero = [1, 2, 3, 4];
console.log(numero);
numero.push(5);
console.log(numero);

var frutas = ["laranja", "abacaxi", "banana","uva"];
console.log(frutas);
frutas.push("maçã");
console.log(frutas);

// nomeDoArray.pop() retira o ultimo item de uma array
numero.pop();
console.log(numero);
frutas.pop();
console.log(frutas);

// nomeDoArray.shift() retira o primeiro item de uma array
numero.shift();
console.log(numero);
frutas.shift();
console.log(frutas);

// nomeDoArray.unshift() retira o primeiro item de uma array
numero.unshift(1);
console.log(numero);
frutas.unshift("melancia");
console.log(frutas);

// nomeDoArray.slice() retorna uma cópia de parte de um array a partir de um subarray 
var letras = ["a","b","c","d","e","f","g"]
console.log(letras);
console.log(letras.slice(1,2));


