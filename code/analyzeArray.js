function analyzeArray(arr) {
   

    if(arr.length === 0) return 'Array is emty'
    const arrAverage = arr.reduce((acc, current) => {
        return acc + current
    }, 0)

    return {
        average: Math.floor(arrAverage / arr.length),
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length
    }
    

}


module.exports = analyzeArray;