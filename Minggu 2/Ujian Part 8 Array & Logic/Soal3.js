/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
    // you can only write your code here!
    let temp = {}
    for (let i = 0; i < animals.length; i++) {
        let hewan = animals[i]
        let hurufPertama = hewan[0]
        if(!temp[hurufPertama]) {
            temp[hurufPertama] = [hewan]
        } else {
            temp[hurufPertama].push(hewan)
        }
    }

    let result = []
    for(const key in temp) {
        result.push(temp[key])
    }

    return result.sort()
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]