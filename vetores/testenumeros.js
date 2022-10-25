let vetor1 = [1,2,3,4,5]
let vetor2 = [3,4,5,6,7]
let vetor3 = []


for (let index = 0; index < vetor1.length; index++) {
    for (let index1 = 0; index1 < vetor2.length; index1++) {
        if (vetor1[index]== vetor2[index1]) {
            vetor3.push( vetor2[index1])
        
        }
    }
}

console.log(vetor3);