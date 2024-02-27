// Problem
// Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu 
// dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut. 
// Contoh, jika menit adalah 63, maka function akan me-return "1:03".

function konversiMenit(menit) {
    // you can only write your code here!
    let jam = 0
    let Menit = 0
    
    if (menit > 60) {
        jam =+ menit / 60
        Menit += menit % 60
    } else if (menit < 60) {
        Menit += menit
    }
    
    if(Menit < 10) {
        return `${Math.floor(jam)}:0${Menit}`
    } else {
        return `${Math.floor(jam)}:${Menit}`
    }
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
