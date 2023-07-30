module.exports = function toReadable(number) {
  const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  if(number === 0) {
      return 'zero'
  } else if(number < 20) {
      return units[number]
  } else if(number < 100) {
      const ones = number % 10
      const ten = Math.floor(number / 10)
      return tens[ten] + (ones ? (' '+ units[ones]) : '');
  } else {
      const ones = number % 10
      const tensDigit = Math.floor((number % 100) / 10)
      const hundreds = Math.floor(number / 100)
      let result = units[hundreds] + ' hundred'
      if(tensDigit === 1) {
          result += ' '+ units[number % 100]
          return result;
      } else {
          result += tens[tensDigit] ? (' '+ tens[tensDigit]) : '';
          result += units[ones] ? (' '+ units[ones]) : '';
          return result;
      }
  }
}
