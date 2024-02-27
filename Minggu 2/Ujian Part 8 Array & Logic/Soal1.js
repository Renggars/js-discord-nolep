/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
    // you can only write your code here!
    let temp = []
    for (i = 0; i < arr.length; i++) {
        if(arr[i] === 'o') {
            for(j = 0; j < arr.length; j++) {
                if(arr[j] === 'x') {
                    let indexI = arr.indexOf(arr[i])
                    let indexX = arr.indexOf(arr[j])
                    if(indexI > indexX) {
                        temp.push(indexI - indexX)
                    } else if (indexI < indexX) {
                        temp.push(indexX - indexI)
                    }
                } 
            }
        }
    }
    if(temp.length === 0) {
        return 0
    } else {
        let result = temp.sort((a,b) => a - b)
        return result[0]
    }
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2