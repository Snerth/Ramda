const moveRamda = (from, to, list) => {
    const item = list[from]
    const list2 = list
    list2.splice(from, 1)
    list2.splice(to, 0, item)
    return list2
}

console.log(moveRamda(1,2,[1, 2, 3, 4]))
console.log(moveRamda(1,3,[1, 2, 3, 4]))
console.log(moveRamda(3,0,[1, 2, 3, 4]))