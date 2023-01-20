function capitalized(str) {
    let newString = str.toLowerCase()
    return newString.charAt(0).toUpperCase() + newString.slice(1);
    
    
     
}


module.exports = capitalized;