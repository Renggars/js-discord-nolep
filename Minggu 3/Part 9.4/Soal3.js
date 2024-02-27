//TIPS: gunakan method toUpperCase() dan toLowerCase()
function tukarBesarKecil(kalimat) {
// you can only write your code here!
    let hurufKecil = "abcdefghijklmnopqrstuvwxyz"
    let hurufBesar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let result = ""
    for (i = 0; i < kalimat.length; i++) {
        let huruf = kalimat.charAt(i)
        if(hurufKecil.includes(huruf)) {
            result += huruf.toUpperCase()
        } else if(hurufBesar.includes(huruf)) {
            result += huruf.toLowerCase()
        } else {
            result += kalimat[i]
        }
    }
    return result
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"