/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    let result = []
    let bayar = 2000
    if(arrPenumpang.length < 1) {
        return []
    } else {
        for(i = 0; i < arrPenumpang.length; i++) {
            data = {
                penumpang : arrPenumpang[i][0],
                naikDari : arrPenumpang[i][1],
                tujuan : arrPenumpang[i][2],
                bayar : 0
            }
            let perjalanan = rute.indexOf(data.tujuan) - rute.indexOf(data.naikDari)
            data.bayar = (bayar * perjalanan)
            result.push(data)
        }
    }
    return result
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]