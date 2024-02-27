/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/
function changeVocals (str) {
    //code di sini
    let hurufVokalKecil = "aiueo"
    let hurufVokalBesar = "AIUEO"
    let hurufKecil = "abcdefghijklmnopqrstuvwxyz"
    let hurufBesar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let result = ""
    
    for (let i = 0; i < str.length; i++) {
        let currentChar = str.charAt(i);

        if (currentChar === " ") {
            result += " ";
        } else if (hurufVokalKecil.includes(currentChar)) {
            let indexInAlphabet = hurufKecil.indexOf(currentChar);
            result += hurufKecil.charAt(indexInAlphabet + 1);
        } else if (hurufVokalBesar.includes(currentChar)) {
            let indexInAlphabet = hurufBesar.indexOf(currentChar);
            result += hurufBesar.charAt(indexInAlphabet + 1);
        } else {
            result += currentChar;
        }
    }
    return result
}

function reverseWord (str) {
    //code di sini
    return str.split('').reverse().join('')
}

function setLowerUpperCase (str) {
    //code di sini
    let hurufKecil = "abcdefghijklmnopqrstuvwxyz"
    let hurufBesar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let result = ""

    for (i = 0; i < str.length; i++) {
        let cekHuruf = str.charAt(i)

        for(j = 0; j < hurufKecil.length; j++) {
            if (cekHuruf === hurufKecil.charAt(j)) {
                result += cekHuruf.toUpperCase()
            } else if (cekHuruf === hurufBesar.charAt(j)) {
                result += cekHuruf.toLowerCase()
            } else if (cekHuruf === " ") {
                result += " "
            }
        }
    }
    return result
}

function removeSpaces (str) {
    //code di sini
    let result = ""

    for(i = 0; i < str.length; i++) {
        let huruf = str.charAt(i)

        if(huruf === ' ') {
            result += ''
        } else {
            result += huruf
        }
    }
    return result
}

function passwordGenerator (name) {
    //code di sini
    if (name.length > 5) {
        let change = changeVocals(name)
        let reverse = reverseWord(change)
        let ubahUpLow = setLowerUpperCase(reverse)
        let removeSpasi = removeSpaces(ubahUpLow)
        return removeSpasi
    } else {
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'