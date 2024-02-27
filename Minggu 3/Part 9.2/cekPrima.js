    let angka = 6
    let faktor = 0
    for (i = 1; i <= angka; i++) {
        if(angka % i == 0) {
            faktor++
        }
        let hasil = angka % i
        console.log(`${angka} dimodulus ${i} = ${hasil}`)
    }
    if (faktor == 2) {
        console.log('true')
    } else {
        console.log('false')
    }
    