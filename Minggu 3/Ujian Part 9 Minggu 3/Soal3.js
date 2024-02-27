function highestScore (students) {
// Code disini
    if(students.length < 1) {
        return {}
    } else {
        let result = {}
        for(i = 0; i < students.length; i++) {
            let temp = students[i].class
            if(!result[students[i].class]) {
                result[students[i].class] = {
                    name : students[i].name,
                    score : students[i].score
                }

                for(j = 0; j < students.length; j++) {
                    if(students[j].class == temp) {
                        if(students[j].score >  students[i].score) {
                            result[students[i].class] = {
                                name : students[j].name,
                                screen : students[j].score
                            }
                        }
                    }
                }
            }
        }
        return result
    }
}

// TEST CASE
console.log(highestScore([
{
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
},
{
    name: 'Alexei',
    score: 85,
    class: 'wolves'
},
{
    name: 'Sergei',
    score: 74,
    class: 'foxes'
},
{
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
}
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
{
    name: 'Alexander',
    score: 100,
    class: 'foxes'
},
{
    name: 'Alisa',
    score: 76,
    class: 'wolves'
},
{
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
},
{
    name: 'Albert',
    score: 71,
    class: 'wolves'
},
{
    name: 'Viktor',
    score: 80,
    class: 'tigers'
}
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}