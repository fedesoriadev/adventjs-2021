const draw = (maxWidth, width, symbol = '*', newLine = true) => {
  const spacing = (maxWidth - width) / 2

  let line = ''
  line += '_'.repeat(spacing)
  line += symbol.repeat(width)
  line += '_'.repeat(spacing)

  if (newLine) {
    line += '\n'
  }

  return line
}

const createXmasTree = height => {
  if (height < 1 || height > 100) return

  const maxWidth = (height * 2) - 1

  let tree = ''
  for (let index = 0; index < height; index++) {
    tree += draw(maxWidth, (index * 2) + 1)
  }

  tree += draw(maxWidth, 1, '#')
  tree += draw(maxWidth, 1, '#', false)

  return tree
}

console.log(createXmasTree(5))
console.log(createXmasTree(10))
console.log(createXmasTree(25))
console.log(createXmasTree(50))
console.log(createXmasTree(75))
console.log(createXmasTree(100))
console.log(createXmasTree(-10))
console.log(createXmasTree(-110))
