// Come  VERB  at WALMART, where you`ll receive ADJ   discounts on all of your favorite brand name PLURAL NOUN     .

const randomVerbs = ["slap", "inject", "hammer", "hunt", "sleep", "instruct"]
const randomAdjectives = ["meaty", "fresh", "therapeutic", "aromatic", "stupendous"]
const randomNouns = ["friends", "snakes", "battles", "cakes", "cracks", "airports" ]

const getRandom = (arr) => {
return arr[Math.floor(Math.random()* arr.length)]
}

const getMessage = () => {
    return `Come ${getRandom(randomVerbs)} at WALMART, where you\`ll receive ${getRandom(randomAdjectives)} discounts on all of your favorite brand name ${getRandom(randomNouns)}!`
}

console.log(getMessage());