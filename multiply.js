const multiplyRamda = (a, x) => {
    if(x) {
        return a * x
    }
    const AtimesSomething = (b) => a * b
    return AtimesSomething
} 

const double = multiplyRamda(2)
const triple = multiplyRamda(3)
console.log(triple(2))
console.log(double(59))

console.log(multiplyRamda(2, 3))
console.log(multiplyRamda(2)(3))