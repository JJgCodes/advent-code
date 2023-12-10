const fs = require('fs')
const data = fs.readFileSync('day 2/data.txt', 'utf-8').split('\n')

const cubes = {
	red: 12,
	green: 13,
	blue: 14,
}

let gameCount = 0

const checkGame = (game) => {
	const currentGame = game.split(':')
	const currentGameNum = +currentGame[0].replace(/[a-zA-Z]/g, '')
	let isValidGame = true

	const subSets = currentGame[1].split(';')

	subSets.forEach((set) => {
		const subSets = set.split(',')
		subSets.forEach((itemSet) => {
			for (const [key, value] of Object.entries(cubes)) {
				const regex = new RegExp(key, 'g')
				if (regex.test(itemSet)) {
					const newSet = itemSet.replace(regex, '')
					if (+newSet > value) {
						isValidGame = false
					}
				}
			}
		})
	})

	if (isValidGame) gameCount = gameCount + currentGameNum
}

const play = () => {
	data.forEach((line) => {
		checkGame(line)
	})

	console.log(gameCount)
}

play()
