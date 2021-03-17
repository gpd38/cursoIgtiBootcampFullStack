console.log('JavaScript em funcionamento!');

var title = document.querySelector('h1');
title.textContent = 'Raphael Gomide via JS';

console.log(typeof(3));
console.log(typeof('Raphael'));
console.log(typeof(true));
console.log(typeof([1,2]));
console.log(typeof({id:1, nome:'Raphael'}));
var x;
console.log(x);
console.log(typeof(x));
x = null;
console.log(x);
console.log(typeof(x));

var num1 = 5;
var num2 = 7;
var aux = num1;
console.log('num1= '+num1);
console.log('num2= '+num2);
console.log('aux= '+aux);

num1 = num2;
num2 = aux;
console.log('num1= '+num1);
console.log('num2= '+num2);
console.log('aux= '+aux);

console.log(8-3);
console.log(8*2);
console.log(8/4);
console.log(8/7);
console.log(9**2);
console.log(7%2);
console.log(6%2);
var a = 2;
console.log('Valor de a= '+a);
console.log(a++);
console.log(++a);
console.log(a--);
console.log(--a);
console.log(a+=3);
console.log(a-=2);
console.log(a*=4);
console.log(a/=2);
console.log('Valor de a= '+a);
console.log(a>6);
console.log(a<6);
console.log(a==6);
console.log(a===6);

console.log('Tabela verdade');
console.log(6>1 && 6>2);
console.log(6>7 && 6>2);
console.log(6>1 && 6>7);
console.log(6>7 && 6>8);
console.log(6>1 || 6>2);
console.log(6>7 || 6>2);
console.log(6>1 || 6>7);
console.log(6>7 || 6>8);

console.log(!true);
console.log(!false);

//Comentário de uma linha
/*
Cometário em bloco
*/