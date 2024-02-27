//sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
//intinya ubah huruf menjadi huruf setelahnya
function ubahHuruf(kata) {
    // you can only write your code here!
    let huruf = "abcdefghijklmnopqrstuvwxyz"
    let result = ""

    for (let i = 0; i < kata.length; i++) {
        let currentChar = kata.charAt(i)

        if (currentChar === 'z') {
            result += 'a'
        } else {
            let indexInAlphabet = huruf.indexOf(currentChar)
            result += huruf.charAt(indexInAlphabet + 1)
        }
    }

    return result
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu