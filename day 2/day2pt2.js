const fs = require('fs')
const data = fs.readFileSync('day 2/data.txt', 'utf-8').split('\n')

let count = 0

const checkGame = (game) => {
	const cubes = {
		red: 0,
		green: 0,
		blue: 0,
	}

	const currentGame = game.split(':')
	// const currentGameNum = +currentGame[0].replace(/[a-zA-Z]/g, '')

	const subSets = currentGame[1].split(';')

	subSets.forEach((set) => {
		const subSets = set.split(',')
		subSets.forEach((itemSet) => {
			for (const [key, value] of Object.entries(cubes)) {
				const regex = new RegExp(key, 'g')
				if (regex.test(itemSet)) {
					const newSet = itemSet.replace(regex, '')
					if (+newSet > value) {
						cubes[key] = +newSet
					}
				}
			}
		})
	})

	const sums = Object.values(cubes)
	const calculatedNums = sums.reduce((preValue, nextValue) => preValue * nextValue)

	count += calculatedNums
}

const play = () => {
	data.forEach((line) => {
		checkGame(line)
	})

	console.log(count)
}

play()
