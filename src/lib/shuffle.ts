/**
 * Returns a new array whose contents are a copy shuffled of the array.
 * @param {Array} a items to shuffle.
 * https://stackoverflow.com/a/2450976/1673761
 * https://stackoverflow.com/a/44071316/1673761
 */
function shuffle<T>(array: T[]): T[] {
  let currentIndex = array.length
  let temporaryValue
  let randomIndex
  const newArray = array.slice()
  // While there remain elements to shuffle...
  while (currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1
    // And swap it with the current element.
    temporaryValue = newArray[currentIndex]
    newArray[currentIndex] = newArray[randomIndex]
    newArray[randomIndex] = temporaryValue
  }
  return newArray
}

export default shuffle
