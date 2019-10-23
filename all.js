const arr = [11, 12, 13, 15]

const allRamda = (f) => {
    
    res = (a) => {
        let t = true
        for(let i in a) {
            if(!f(a[i])) {
                t = false
                return t
            }
            return t
        }
    }
    return res
}

const greaterThan10 = (a) => a > 10 ? true : false

console.log(allRamda(greaterThan10)(arr))
console.log(allRamda((a) => a > 12 ? true : false)(arr))