function cariMedian(arr) {
    // you can only write your code here!
    let newArr = arr.sort((a, b) => a - b)
    let length = newArr.length
    let index = length / 2
    if (length % 2 == 0) {
        angkaTengahPertama = newArr[index - 1]
        angkaTengahKedua = newArr[Math.ceil(index)]
        let hasil = (angkaTengahPertama + angkaTengahKedua) / 2
        return hasil
    } else {
        return newArr[Math.floor(index)]
    }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5