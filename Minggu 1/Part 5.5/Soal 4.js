// 4. Breaking Sentence (yet Again) and Count Each Length
// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);
let kataKeDua = word4.substring(4,14);
let kataKeTiga = word4.substring(15,17);
let kataKeEmpat = word4.substring(18,20);
let kataKeLima = word4.substring(21,25);

let firstWordLength = exampleFirstWord4.length;
let panjangDua = kataKeDua.length
let panjangTiga = kataKeTiga.length
let panjangEmpat = kataKeEmpat.length
let panjangLima = kataKeLima.length


console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);
console.log('First Word: ' + kataKeDua + ', with length: ' + panjangDua);
console.log('First Word: ' + kataKeTiga + ', with length: ' + panjangTiga);
console.log('First Word: ' + kataKeEmpat + ', with length: ' + panjangEmpat);
console.log('First Word: ' + kataKeLima + ', with length: ' + panjangLima);