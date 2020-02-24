class VigenereCipheringMachine { 
      

    constructor(isDirect = true)
    {
        this.isDirect = isDirect;
    }

    encrypt(message, key) {
        if(!message || !key) throw 'argument absent';
        key = key.toUpperCase();
        let inpMessage = message.split('');
        message = message.replace(/[^a-zA-Z]+/g,'').toUpperCase();

        while(key.length < message.length)
        {
            key+=key;
        }
        key = key.substring(0, message.length);
        let encrMessage = key.split('');
        encrMessage = encrMessage.map((k,i) => encrMessage[i] = k.charCodeAt(0)-65);        
        let i=0;
        for(let m of message){
          encrMessage[i] += m.charCodeAt(0)-65;
          if(encrMessage[i] > 25) encrMessage[i] -= 26;
          encrMessage[i] = String.fromCharCode(encrMessage[i] + 65);
          i++;
        }
        let k=0;
        for(let i = 0; i < inpMessage.length; i++){
            if(inpMessage[i].match(/[a-zA-Z]/)) {
                inpMessage[i] = encrMessage[k];
                k++;
            }
        }
        if(!this.isDirect) inpMessage.reverse();
        return inpMessage.join('');
    }

    decrypt(encryptedMessage, key) {
        if(!encryptedMessage || !key) throw 'argument absent';
        let inpMessage = encryptedMessage.split('');
        encryptedMessage = encryptedMessage.replace(/[^a-zA-Z]+/g,'').toUpperCase();
        key = key.toUpperCase();
        while(key.length < encryptedMessage.length)
        {
            key+=key;
        }        
        key = key.substring(0, encryptedMessage.length);
        let message = key.split('');
        message = message.map((k,i) => message[i]=k.charCodeAt(0)-65);
        let i=0;
        for(let m of encryptedMessage){
          message[i] = m.charCodeAt(0)-65 - message[i];
          if(message[i]<0) message[i]+=26;
          message[i] = String.fromCharCode(message[i]+65);
          i++;
        }       

        let k=0;
        for(let i = 0; i < inpMessage.length; i++){
            if(inpMessage[i].match(/[a-zA-Z]/)) {
                inpMessage[i]=message[k];
                k++;
            }
        }
        if(!this.isDirect) inpMessage.reverse();
        return inpMessage.join('');
    }  
}

module.exports = VigenereCipheringMachine;
