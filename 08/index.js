const maxProfit = prices => {
  const maxProfitPerNumber = prices.map((price, index, { length }) => {
    // Avoid end of array
    if (index + 1 !== length) {
      // Get de maximum profit of the current number
      const restOfPrices = prices.slice(index + 1)
      const max = Math.max(...restOfPrices)
      const diff = max - price

      return diff > 0 ? diff : -1
    }

    return -1
  })

  return Math.max(...maxProfitPerNumber)
}

const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
maxProfit(pricesBtc) // -> 16 (compra a 18, vende a 34)

const pricesEth = [10, 20, 30, 40, 50, 60, 70]
maxProfit(pricesEth) // -> 60 (compra a 10, vende a 70)

const pricesDoge = [18, 15, 12, 11, 9, 7]
maxProfit(pricesDoge) // -> -1 (no hay ganancia posible)

const pricesAda = [3, 3, 3, 3, 3]
maxProfit(pricesAda) // -> -1 (no hay ganancia posible)
