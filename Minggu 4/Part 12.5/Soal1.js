function hapusSimbol(str) {
    // you can only write your code here!
    let hapusSimbol = str.match(/[a-z, 0-9]+/gi)
    let temp = ""
    let result = ""
    for(i = 0; i < hapusSimbol.length; i++) {
            temp += hapusSimbol[i]
    }

    let hapusSpasi = temp.split(/\s/)
    for(i = 0; i < hapusSpasi.length; i++) {
        result += hapusSpasi[i]
    }   

    return result
}

// TEST CASES
console.log(hapusSimbol('test%$4aa')); // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100