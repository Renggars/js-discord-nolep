/*
Diberikan sebuah function totalDigitRekursif(angka) yang menerima satu parameter berupa angka. Function akan me-return nilai total dari digit tersebut dengan menambahkan satu per satu angka dari digit paling depan ke paling belakang. Wajib menggunakan rekursif untuk berlatih rekursif! Disarankan untuk tidak menggunakan looping for untuk soal ini.

Contoh:

512, berarti outputnya adalah 8, karena 5 + 1 + 2 = 8. 1542, berarti outputnya adalah 12, karena 1 + 5 + 4 + 2 = 12.
*/

function totalDigitRekursif(angka) {
    // you can only write your code here!
    let result = 0
    let int = 0
    let angkaToString = angka.toString()
    let index = angkaToString.length
    if(angka > 0 && index > int) {
        let temp = ''
        temp = angkaToString[int]
        result += parseInt(temp)
        int++
        let potongAngka = angkaToString.slice(1)
        let toNumber = parseInt(potongAngka)
        return result + totalDigitRekursif(toNumber)
    } else {
        return result
    }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5