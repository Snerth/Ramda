const moveRamda = (from, to, list) => {
    const item = list[from]
    const list2 = list
    list2.splice(from, 1)
    
    console.log(list2)
}
//not yet ready
moveRamda(1,2,[1, 2, 3, 4])