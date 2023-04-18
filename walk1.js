let pikachuHp = 100

//turns pikachu's hp from a number into a string.
pikachuHp = String(pikachuHp)

let sheildonHp = 120

let theWinnerIs = `The winner is: Pikachu!`

theWinnerIs = theWinnerIs.replace(`Pikachu`, `Shieldon`)

console.log(theWinnerIs)

if(theWinnerIs.includes(`Pikachu`)){
      console.log(`Pikachu is epic!`)
 } else {
        console.log(`Pikachu, you let me down...`)
    }

let kebabCase = theWinnerIs.replace(`:`, ``)
kebabCase = kebabCase.replace(`!`, ``)
kebabCase = kebabCase.toLowerCase()

//way 1
//kebabCase = kebabCase.replaceAll(` `, `-`)

//way 2
let kebabCaseArray = kebabCase.split(` `)
kebabCase = kebabCaseArray.join(`-`)

console.log(kebabCaseArray)