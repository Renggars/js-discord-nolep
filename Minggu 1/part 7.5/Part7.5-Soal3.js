// Tugas 3
// Buatlah sebuah fungsi bernama processSentence(), yang akan memproses seluruh parameter yang diinput menjadi 
// satu kalimat berikut: 
// "Nama saya [Name], umur saya [Age] tahun, alamat saya di [Address], dan saya punya hobby yaitu [hobby]!"

function processSentence(Name, Age, Address, Hobby) {
    return `Nama saya ${Name}, umur saya ${Age} tahun, alamat saya di ${Address}, dan saya punya hobby yaitu ${Hobby}`
}

let nama = "Agus"
let age = 30
let addres = "Jln. Malioboro, Yogyakarta"
let hobby = "gaming"

console.log(processSentence(nama, age,addres, hobby))