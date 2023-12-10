const wordsToNums = {
	zero: 'z0e',
	one: 'o1e',
	two: 't2o',
	three: 't3e',
	four: 'f4r',
	five: 'f5e',
	six: 's6x',
	seven: 's7n',
	eight: 'e8t',
	nine: 'n9e',
}

const convertString = (input) => {
	for (const [key, value] of Object.entries(wordsToNums)) {
		const regex = new RegExp(key, 'g')
		input = input.replace(regex, value)
	}

	const result = input.replace(/[a-z]/g, '')
	const final = result.slice(0, 1) + result.slice(-1)
	return final
}

const calValues = () => {
	const fs = require('fs')
	const data = fs.readFileSync('day 1/data.txt', 'utf-8').split('\n')

	let count = 0
	data.forEach((line) => {
		let nums = convertString(line)
		if (nums.length === 1) {
			nums = nums + nums
		}
		count += +nums
	})

	return count
}

const result = calValues()

console.log(result)
