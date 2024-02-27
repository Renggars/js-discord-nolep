// 3. Breaking Sentence (Again) using Substring
// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

let word3 = 'wow JavaScript is so cool';
let exampleFirstWord3 = word3.substring(0,3)
let kataKeDua = word3.substring(4,14)
let kataKeTiga = word3.substring(15,17)
let kataKeEmpat = word3.substring(18,20)
let kataKeLima = word3.substring(21,25)

console.log('First Word: ' + exampleFirstWord3);
console.log('Kata Ke dua: ' + kataKeDua);
console.log('Kata ke tiga: ' + kataKeTiga);
console.log('Kata Ke empat: ' + kataKeEmpat);
console.log('Kata Ke lima: ' + kataKeLima);
