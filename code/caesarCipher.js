function CaesarCipher(str, num) {
    
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let text = str.toLowerCase();
    let shift = num;
    let encrypt = ""

    for(let i = 0; i < text.length; i++) {
        if(text[i] === " ") {
            encrypt += " "
            continue
        }
        let charPos = (alphabet.indexOf(text[i]))
        let newCharPos = charPos + shift;
        if(newCharPos >= alphabet.length) { newCharPos = (newCharPos - alphabet.length)}
        encrypt += alphabet[newCharPos]

    }
  return encrypt
}


module.exports = CaesarCipher;