//cari faktor persekutuan terbesar
function fpb(angka1, angka2) {
    // you can only write your code here!
    let angka = 0
    if (angka1 > angka2) {
        angka = angka1
    } else {
        angka = angka2
    }

    let result
    for(i = 1; i <= angka; i++) {
        if (angka1 % i == 0 && angka2 % i == 0) {
            result = i
        }
    }
    return result
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
