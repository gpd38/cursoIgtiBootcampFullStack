function start() {
  setCurrentNumber();
};

function setCurrentNumberToValue(dataRangeValue) {
  var numberValue = document.querySelector('#numberValue');
  numberValue.value = dataRangeValue || '';
};

function setCurrentNumberToLiteral(dataRangeValue) {
  var numberValue = document.querySelector('#literal');
  var literalValue = getLiteral(dataRangeValue);
  numberValue.value = literalValue || '';
};

function getLiteral(dataRangeValue) {
  var number = parseInt(dataRangeValue);
  return parseIntToLiteral(number);
}

function parseIntToLiteral(number) {
  var literalResult = '';
  if (number < 20) {
    literalResult = getLessThan19Value(number);
  } else if (number < 100) {
    literalResult = number % 10 > 0
      ? `${getBetween20And90Multiple10(Math.trunc(number / 10) * 10)} e ${parseIntToLiteral(parseInt(number.toString().substring(1, 2))).toLowerCase()}`
      : `${getBetween20And90Multiple10(number)}`;
  } else if (number == 100) {
    literalResult = 'Cem';
  } else if (number < 1000) {
    literalResult = number % 100 > 0
      ? `${getBetween100And900Multiple100(Math.trunc(number / 100) * 100)} e ${parseIntToLiteral(parseInt(number.toString().substring(1, 3))).toLowerCase()}`
      : `${getBetween100And900Multiple100(number)}`;
  }
  return literalResult;
}

function getLessThan19Value(number) {
  var literalResult = '';
  switch (number) {
    case 0:
      literalResult = 'Zero';
      break;
    case 1:
      literalResult = 'Um';
      break;
    case 2:
      literalResult = 'Dois';
      break;
    case 3:
      literalResult = 'Três';
      break;
    case 4:
      literalResult = 'Quatro';
      break;
    case 5:
      literalResult = 'Cinco';
      break;
    case 6:
      literalResult = 'Seis';
      break;
    case 7:
      literalResult = 'Sete';
      break;
    case 8:
      literalResult = 'Oito';
      break;
    case 9:
      literalResult = 'Nove';
      break;
    case 10:
      literalResult = 'Dez';
      break;
    case 11:
      literalResult = 'Onze';
      break;
    case 12:
      literalResult = 'Doze';
      break;
    case 13:
      literalResult = 'Treze';
      break;
    case 14:
      literalResult = 'Catorze';
      break;
    case 15:
      literalResult = 'Quinze';
      break;
    case 16:
      literalResult = 'Dezasseis';
      break;
    case 17:
      literalResult = 'Dezassete';
      break;
    case 18:
      literalResult = 'Dezoito';
      break;
    case 19:
      literalResult = 'Dezanove';
      break;
    default:
      literalResult = ''
      break;
  }
  return literalResult;
}

function getBetween20And90Multiple10(number) {
  var literalResult = '';
  switch (number) {
    case 20:
      literalResult = 'Vinte';
      break;
    case 30:
      literalResult = 'Trinta';
      break;
    case 40:
      literalResult = 'Quarenta';
      break;
    case 50:
      literalResult = 'Cinquenta';
      break;
    case 60:
      literalResult = 'Sessenta';
      break;
    case 70:
      literalResult = 'Setenta';
      break;
    case 80:
      literalResult = 'Oitenta';
      break;
    case 90:
      literalResult = 'Noventa';
      break;
    default:
      literalResult = '';
      break;
  }
  return literalResult;
}

function getBetween100And900Multiple100(number) {
  var literalResult = '';
  switch (number) {
    case 100:
      literalResult = 'Cento';
      break;
    case 200:
      literalResult = 'Duzentos';
      break;
    case 300:
      literalResult = 'Trezentos';
      break;
    case 400:
      literalResult = 'Quatrocentos';
      break;
    case 500:
      literalResult = 'Quinhentos';
      break;
    case 600:
      literalResult = 'Seiscentos';
      break;
    case 700:
      literalResult = 'Setecentos';
      break;
    case 800:
      literalResult = 'Oitocentos';
      break;
    case 900:
      literalResult = 'Novecentos';
      break;
    default:
      literalResult = '';
      break;
  }
  return literalResult;
}

function setCurrentNumber() {
  function rangeMouseMove(event) {
    setValues(numberRange.value);
  }

  function setValues(currentValue) {
    setCurrentNumberToValue(currentValue);
    setCurrentNumberToLiteral(currentValue)
    currentNumber = parseInt(currentValue);
  }

  var numberRange = document.querySelector('#numberRange');
  //First set of data
  setValues(numberRange.value);

  numberRange.addEventListener('input', rangeMouseMove);
}

start();