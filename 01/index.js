const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo' },
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo' }
]

const contarOvejas = ovejas => {
  return ovejas.filter(({ color, name }) => {
    const nombre = name.toLowerCase()
    return color === 'rojo' && nombre.includes('n') && nombre.includes('a')
  })
}

const ovejasFiltradas = contarOvejas(ovejas)
console.log(ovejasFiltradas)
