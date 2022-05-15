const carta = 'bici coche  balón _playstation bici coche peluche'

const listGifts = letter => {
  const gifts = letter.trim().split(/\s+/)

  return gifts
    .filter(gift => !gift.trim().startsWith('_'))
    .reduce((giftsObject, gift) => {
      if (!giftsObject[gift]) {
        giftsObject[gift] = 0
      }

      giftsObject[gift]++

      return giftsObject
    }, {})
}

const regalos = listGifts(carta)
console.log(regalos)
