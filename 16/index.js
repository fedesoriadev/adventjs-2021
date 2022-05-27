const decodeNumbers = symbols => {
  const symbolsArray = Array.from(symbols)

  const mapping = {
    '.': 1,
    ',': 5,
    ':': 10,
    ';': 50,
    '!': 100
  }

  if (!symbolsArray.every(s => Object.keys(mapping).includes(s))) {
    return NaN
  }

  return symbolsArray.reduce((sum, current, index) => {
    const number = mapping[current]
    const nextNumber = mapping[symbolsArray[index + 1]] || 0

    if (nextNumber > number) {
      return sum - number
    }

    return sum + number
  }, 0)
}

decodeNumbers('...') // 3
decodeNumbers('.,') // 4 (5 - 1)
decodeNumbers(',.') // 6 (5 + 1)
decodeNumbers(',...') // 8 (5 + 3)
decodeNumbers('.........!') // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
decodeNumbers('.;') // 49 (50 - 1)
decodeNumbers('..,') // 5 (-1 + 1 + 5)
decodeNumbers('..,!') // 95 (1 - 1 - 5 + 100)
decodeNumbers('.;!') // 49 (-1 -50 + 100)
decodeNumbers('!!!') // 300
decodeNumbers(';!') // 50
decodeNumbers(';.W') // NaN
