const arr = [1, 2, 3]
const arr2 = ['a', 'b', 'c', 'd']

const adjustRamda = (i, f, e) => {
    if(i && f && e) {
        const res = e
        res[i] = f(e[i])
        return res
    }
    else if(i && f) {
        const foo = (e) => {
            const res = e
            res[i] = f(e[i])
            return res
        }
        return foo
    }
}

const toUpper = (a) => a.toUpperCase()
const toUpper2 = adjustRamda(2, toUpper)

console.log(adjustRamda(2, toUpper, arr2))
console.log(adjustRamda(1, (a) => a + 10, arr))
console.log(toUpper2(arr2))