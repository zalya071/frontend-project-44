import readlineSync from 'readline-sync'

export default (gameDescription, getRoundData) => {
  console.log('Welcome to the Brain Games!')
  console.log('May I have your name?')

  const name = readlineSync.question('Your answer: ')
  console.log(`Hello, ${name}!`)

  console.log(gameDescription)

  const roundsCount = 3

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = getRoundData()

    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ')

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }

    console.log('Correct!')
  }

  console.log(`Congratulations, ${name}!`)
}
