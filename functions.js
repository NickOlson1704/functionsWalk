let pikachuHp = 100
let pikachuHpAttack = 30

let sheildonHp = 120
let sheildonHpAttack = 26


//returns a boolean: true if defender survives attack from attacker
function isAlive(defenderHp, attackerAttack){
    
    if (defenderHp > 0){
        return true
    } else {
        return false
    }
}

if (isAlive(pikachuHp, sheildonHpAttack)) {
    console.log(`Pikachu lives!`)
}else {
    console.log(`Pikachu is no more.`)
}


const attack = (defenderHp, attackerAttack) => defenderHp - attackerAttack
const diceRollMaker = ()  => Math.floor(Math.random() * 6 + 1)

const diceRoll = diceRollMaker()

for (let i = 0; i < 5; i++) {
    console.log(`Shieldon attacks Pikachu!`) 
        if (isAlive(pikachuHp)) {
            pikachuHp = attack(pikachuHp, sheildonHpAttack)
            console.log(`Pikachu HP at` + pikachuHp)
        }else {
            break;

        }
    }

    if (isAlive(pikachuHp)) {
        console.log(`Pikachu has survived the onslaught: he uses Mega Thunder Cannon and wins.`)

     } else {
        console.log(`Shieldon has won. He stands in triumph over the qory scene`)
     }


 //These are all function definitions

//function declaration
function double1(num) {
    return num + num
  }
  
  //(traditional) function expression
  const double2 = function(num) {
    return num + num
  }
  
  // arrow function (a shorthand function expression)
  const double3 = (num) => {
    return num + num
  }
  
  // arrow function with omitted parameter parentheses 
  const double4 = num => {
    return num + num
  }
  
  // arrow function with implicit return (and omitted param parens)
  const double5 = num => num + num
  
  console.log(double1(2))
  console.log(double2(3))
  console.log(double3(4))
  console.log(double4(5))
  console.log(double5(6))
  
  function quadraticFormula(a, b, c, isPlus) {
    let topOfFraction
  
    if (isPlus) {
      topOfFraction = -b + Math.sqrt((b * b)-(4 * a * c))
    } else {
      topOfFraction = -b - Math.sqrt((b * b)-(4 * a * c))
    }
    
    let bottomOfFraction = 2 * a
  
    let x = topOfFraction / bottomOfFraction
  
    return x
}
  
  let answer1a = quadraticFormula(5, 6, 1, true)
  let answer1b = quadraticFormula(5, 6, 1, false)
  
  console.log(answer1a, answer1b)  