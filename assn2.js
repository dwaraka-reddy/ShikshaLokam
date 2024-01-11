function modifyString(s) {
  const charArray = s.split('').map(char => char.charCodeAt(0));
  const modifiedArray = [];

  for (let i = 0; i < charArray.length; i++) {
    if (i === 0) {
      modifiedArray.push(charArray[i]);
    } else {
      if (charArray[i - 1] !== -1) {
        if (charArray[i] % 2 === 0) {
          const incrementValue = charArray[i] % 7;
          const newChar = charArray[i] + incrementValue;
          modifiedArray.push(newChar > 127 ? 83 : newChar);
        } else {
          const decrementValue = charArray[i] % 5;
          const newChar = charArray[i - 1] - decrementValue;
          modifiedArray.push(newChar < 0 ? 83 : newChar);
        }
      } else {
        modifiedArray.push(charArray[i]);
      }
    }
  }

  return modifiedArray.map(charCode => String.fromCharCode(charCode)).join('');
}


console.log(modifyString("fjtydfhf"));