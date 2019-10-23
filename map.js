const obj = {x: 1, y: 2, z: 3}
const arr = [1, 2, 3]
const arr2 = ['a', 'b', 'c']

const mapRamda = (f, a) => {
    if(f && a) {
        const res = a
        for(let i in a) {
        res[i] = f(a[i])
        }
        return res
    }
    else if(f) {
        return (a) => {
            const res = a
            for(let i in a) {
            res[i] = f(a[i])
            }
            return res
        }
    }    
}

const double = (a) => a * 2
const addUnderscore = (a) => a + '_'
const doubleMap = mapRamda(double)



console.log(mapRamda(double, obj))
console.log(mapRamda(double, arr))
console.log(mapRamda(addUnderscore, arr2))
console.log(doubleMap(arr))