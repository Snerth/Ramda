const subtractRamda = (a, x) => {
    if(x) {
        return a - x
    }
    const AminusSomething = (b) => a - b
    return AminusSomething
} 

const HundredMinus = subtractRamda(100)
console.log(HundredMinus(30))
console.log(subtractRamda(10)(3))
console.log(subtractRamda(10,3))
