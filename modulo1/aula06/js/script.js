console.log('JavaScript em funcionamento!');

// Comparando 2 números com if/else
var a = 3;
var b = 5;

if (a < b) {
  console.log(a + ' é menor que ' + b);
} else {
  if (a > b) {
    console.log(a + ' é maior que ' + b);
  } else {
    console.log(a + ' e ' + b + ' são iguais');
  }
}

// Validação de dia com if/else
var day = 1;

if (day === 1) {
  console.log('Domingo');
} else {
  if (day === 2) {
    console.log('Segunda-feira');
  } else {
    if (day === 3) {
      console.log('Terça-feira');
    } else {
      if (day === 4) {
        console.log('Quarta-feira');
      } else {
        if (day === 5) {
          console.log('Quinta-feira');
        } else {
          if (day === 6) {
            console.log('Sexta-feira');
          } else {
            if (day === 7) {
              console.log('Sábado');
            } else {
              console.log('Dia inválido');
            }
          }
        }
      }
    }
  }
}

// Validação de dia com switch
day = 3;
switch (day) {
  case 1:
    console.log('Domingo');
    break;
  case 2:
    console.log('Segunda-feira');
    break;
  case 3:
    console.log('Terça-feira');
    break;
  case 4:
    console.log('Quarta-feira');
    break;
  case 5:
    console.log('Quinta-feira');
    break;
  case 6:
    console.log('Sexta-feira');
    break;
  case 7:
    console.log('Sábado');
    break;
  default:
    console.log('Dia inválido');
}

var result='';
day = 8;
switch (day) {
  case 1: result=('Domingo'); break;
  case 2: result=('Segunda-feira'); break;
  case 3: result=('Terça-feira'); break;
  case 4: result=('Quarta-feira'); break;
  case 5: result=('Quinta-feira'); break;
  case 6: result=('Sexta-feira'); break;
  case 7: result=('Sábado'); break;
  default: result=('Dia inválido');
}
console.log(result);

// Comparando 2 números com operador ternário
var compareResult = a > b ? 1 : a < b ? -1 : 0;
console.log(compareResult);

// Verificando dia da semana com operador ternário
day = 6;
var weekDay =
  day === 1
    ? 'Domingo'
    : day === 2
    ? 'Segunda-feira'
    : day === 3
    ? 'Terça-feira'
    : day === 4
    ? 'Quarta-feira'
    : day === 5
    ? 'Quinta-feira'
    : day === 6
    ? 'Sexta-feira'
    : day === 7
    ? 'Sábado'
    : 'Dia inválido';
console.log(weekDay);

// Somatório com while
var numAtual1 = 1;
var somatorio1 = 0;
while(numAtual1 <= 10){
  somatorio1+=numAtual1;
  numAtual1++;
}
console.log('A soma é: '+somatorio1);

// Somatório com do-while
var numAtual2 = 1;
var somatorio2 = 0;
do{
  somatorio2+=numAtual2;
  numAtual2++;
}while(numAtual2 <= 10);
console.log('A soma é: '+somatorio2);

// Somatório com for
var somatorio3 = 0;
for(var numAtual3=1; numAtual3<=10; numAtual3++){
  somatorio3+=numAtual3
}
console.log('A soma é: '+somatorio3);