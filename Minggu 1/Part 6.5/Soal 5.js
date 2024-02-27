// 5. Bintang asteriks
// Problem buatlah bintang seperti berikut
// let input = 5
//hasilnya
//*
//**
//***
//****
//*****
let input = 5
for (i = 1; i <= input; i++) {
    let bintang = ''
    for(j = 1; j <= i; j++) {
        bintang += "*"
    }
    console.log(bintang)
}