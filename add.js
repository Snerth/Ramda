const addRamda = (a, x) => {
    if(x) {
        return a + x
    }
    const AplusSomething = (b) => a + b
    return AplusSomething
} 

const FivePlus = addRamda(5)
console.log(FivePlus(10))
console.log(addRamda(7)(10))
console.log(addRamda(2,3))
