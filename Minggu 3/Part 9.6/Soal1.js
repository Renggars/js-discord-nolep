function changeMe(arr) {
    // you can only write your code here!
    let date = new Date()
    let year = date.getFullYear()
    let age
    if (arr.length > 0) {
        for (i = 0; i < arr.length; i++) {
            let tahunLahir = arr[i][3]
            if(tahunLahir == undefined) {
                age = "Invalid Birth Year"
            } else {
                tahunLahir = arr[i][3]
                age = year - tahunLahir
            }

            let data = {
                        firstname : arr[i][0],
                        lastname : arr[i][1],
                        gender : arr[i][2],
                        age : age
                }
            console.log(`${arr[i][0]} ${arr[i][1]} :`)
            console.log(data)
        }
    } else {
        console.log("")
    }

}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// Christ Evans: { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 41 } 2023 - 1982 = 41 kan yak wkwk
// Robert Downey: { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }

changeMe([]); // ""