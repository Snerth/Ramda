const divideRamda = (a, x) => {
    if(x) {
        return a / x
    }
    const AdividedBySomething = (b) => a / b
    return AdividedBySomething
} 

const HundreddividedBy = divideRamda(100)
console.log(HundreddividedBy(20))
console.log(divideRamda(100)(20))
console.log(divideRamda(100, 20))