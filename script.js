// // // --------------- PRÁTICA GUIADA ---------------
// const bimestre1 = [10,3,4,5]
// const bimestre2 = [9,8,4,1]
// const bimestre3 = [8,8,5,2]
// const bimestre4 = [6,1,4,2]


// const notasDoAno = [bimestre1,bimestre2,bimestre3,bimestre4]

// console.table(notasDoAno)

// // for(let indiceBimestre = 0; indiceBimestre < notasDoAno.length; indiceBimestre++){
// //     let soma = 0

// //     for(let indiceNota = 0; indiceNota < notasDoAno[indiceBimestre].length; indiceNota++){
// //         soma = soma + notasDoAno[indiceBimestre][indiceNota]
// //     }
// //     // console.log("soma do bimestre", soma)

// //     let mediaBimestre = soma / notasDoAno[indiceBimestre].length

// //     console.log(`A soma das notas do bimestre ${indiceBimestre + 1} é: ${soma}\nA média do bimestre ${indiceBimestre + 1} é ${mediaBimestre}`)
// // }



// // for(let indiceBimestre in notasDoAno){
// //     console.log(indiceBimestre)
// //     let soma = 0

// //     for(let nota of notasDoAno[indiceBimestre]){
// //         soma = soma + nota
// //     }

// //     let mediaBimestre = soma / notasDoAno[indiceBimestre].length

// //     console.log(`A soma das notas do bimestre ${Number(indiceBimestre) + 1} é: ${soma}\nA média do bimestre ${Number(indiceBimestre) + 1} é ${mediaBimestre}`)
// //     // é necessário transformar o indice em number para ele n concatenar strings
// // }















// // --------------- EXERCÍCIO DE FIXAÇÃO ---------------
const filmes = [
  {
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    diretor: 'Guel Arraes',
    elenco: [
      'Selton Mello',
      'Mateus Nachtergaele',
      'Marco Nanini',
      'Fernanda Montenegro',
    ],
  },
  {
    titulo: 'Carandiru',
    ano: 2001,
    diretor: 'Hector Babenco',
    elenco: [
      'Wagner Moura',
      'José Carlos Vasconcelos',
      'Ailton Graça',
      'Caio Blat',
    ],
  },
  {
    titulo: 'Aquarius',
    ano: 2012,
    diretor: 'Kléber Mendonça Filho',
    elenco: [
      'Sônia Braga',
      'Humberto Carrão',
      'Maeve Jinkings',
      'Bárbara Colen',
    ],
  },
]

// escreva seu código abaixo 👇🏻

// for(let i in filmes){
//     console.log(`${filmes[i].titulo} de ${filmes[i].ano}, foi dirigido por ${filmes[i].diretor}`)
// } 
//     for(let j in filmes){
//         console.log(`Ator/Atriz: ${filmes[i].elenco[j]}`)
//     }

    for(let i in filmes){
        console.log(`${filmes[i].titulo} de ${filmes[i].ano}, foi dirigido por ${filmes[i].diretor}`)
    } 
        for(let j of filmes[i].elenco){
            console.log(`Ator/Atriz: ${filmes[j]}`)
        }
    
    
