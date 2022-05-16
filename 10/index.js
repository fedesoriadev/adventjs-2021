const getCoins = change => {
  const coinTypes = [50, 20, 10, 5, 2, 1]

  const { coins } = coinTypes.reduce((calculation, coinValue) => {
    // Divide change left by coin value
    const quotient = calculation.change / coinValue

    // Coins rounded
    const coins = Math.floor(quotient)

    // If coins subtract from remaining change
    calculation.change = calculation.change - (coinValue * coins)

    // Push coins needed with higher coin value to the end
    calculation.coins.unshift(coins)

    return calculation
  }, { change, coins: [] })

  return coins
}

getCoins(51) // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
getCoins(3) // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
getCoins(5) // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
getCoins(16) // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
getCoins(100) // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos
