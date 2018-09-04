module.exports.cardValidator = function cardValidator(cardNumber) {
  if (typeof cardNumber !== 'number' || cardNumber === '' || cardNumber === undefined) {
    throw new Error('Insira um número.');
  } 

  let parseNumber = parseInt(cardNumber).toString();
  if (parseNumber.length <= 1) {
    throw new Error('O número do cartão deve ter mais de 1 dígito.');
  }

  let numberValidation = Array.from(cardNumber.toString()).reverse().map(Number);
  let numberArray = numberValidation.map((number, index) => {
    if (index % 2 === 1) {
      return (number * 2 <= 9) ? number * 2 : number * 2 - 9;
    } else {
      return number;
    }
  })

  let numberResult = numberArray.reduce((i, j) => i + j);
  return (numberResult % 10 === 0) ? true : false;
}