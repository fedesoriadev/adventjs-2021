const shouldBuyFidelity = times => {
  const price = 12 * times

  let fidelityPrice = 250
  for (let ticket = 1; ticket <= times; ticket++) {
    fidelityPrice += 12 * 0.75 ** ticket
  }

  return fidelityPrice <= price
}

shouldBuyFidelity(1) // false -> Mejor comprar tickets de un sólo uso
shouldBuyFidelity(100) // true -> Mejor comprar tarjeta fidelidad
