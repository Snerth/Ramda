const maxByRamda = (f, a, b) => {
    const v1 = f(a)
    const v2 = f(b)
    return v1 > v2 ? b : a
}

const square = n => n * n

console.log(maxByRamda(
    (n) => n + 10,
    1,
    2
))

console.log(maxByRamda(
    square,
    -3,
    2
))
