
const encrypt = (secretKey = 'trybe', vinNumber = '1HGCM82633A004352') => {
  let newString = '';
  let codigoKey;
  let codigoVin;

  for(let cont = 0; cont < vinNumber.length; cont += 1){
    const splitedKey = secretKey.split('');
    const splitedVin = vinNumber.split('');
    
    if(cont < secretKey.length){
      codigoKey = splitedKey[cont].charCodeAt();
      codigoVin = splitedVin[cont].charCodeAt();
      
      newString += String.fromCharCode(codigoVin + codigoKey);
      } else {
        codigoVin = splitedVin[cont].charCodeAt();
        newString += String.fromCharCode(codigoVin + 3);
      }
    }

    console.log(newString);
    return newString;

  }

encrypt()