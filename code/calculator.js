class calculator {

    static sum(a, b) {

        if(isNaN(a) || isNaN(b)) {
            throw new Error('Input its not a number')
        }
        
        let nr = Number(a) + Number(b);
        return Number(nr.toFixed(2))

    }
    static subtract(a, b) {
        if(isNaN(a) || isNaN(b)) {
            throw new Error('Input its not a number')
        }

        let nr = Number(a) - Number(b);
       return Number(nr.toFixed(2))
       
    }


    static divide(a, b) {
        if(isNaN(a) || isNaN(b)) {
            throw new Error('Input its not a number')
        }
        if(a === 0 || b === 0) {
            throw new Error('Its not allowed to divide by zero')
        }
        let nr = Number(a) / Number(b);
        return Number(nr.toFixed(2))
    }

    static multiply(a, b) {
        if(isNaN(a) || isNaN(b)) {
            throw new Error('Input its not a number')
        }
        let nr = Number(a) * Number(b);
        return Number(nr.toFixed(2))
    }

}

module.exports = calculator;