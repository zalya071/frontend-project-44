import runGame from '../index.js'

const isEven = num => num % 2 === 0

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".'

const getRoundData = () => {
  const number = Math.floor(Math.random() * 100)
  const correctAnswer = isEven(number) ? 'yes' : 'no'

  return [number, correctAnswer]
}

export default () => runGame(gameDescription, getRoundData)
