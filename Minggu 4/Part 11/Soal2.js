/*
Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

Jika input adalah string kosong ('') maka return array kosong
*/

function meleeRangedGrouping (str) {
    //your code here
    if(str.length < 1) {
        return []
    } else {
        let arr = str.split(',')
        let temp1 = []
        let temp2 = []
        let cekRanged = 'Ranged'
        let cekMelee = 'Melee'
        for (let i = 0; i < arr.length; i++) {
            let heroData = arr[i].split('-');
            let heroName = heroData[0];
            let heroType = heroData[1];

            if (heroType === cekRanged) {
                temp1.push(heroName);
            } else if (heroType === cekMelee) {
                temp2.push(heroName);
            }
        }

        let result = [temp1, temp2];
        return result;
    }
}


// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []