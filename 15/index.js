const checkSledJump = heights => {
  const maxPoint = heights.indexOf(Math.max(...heights))
  const increasingSteps = heights.slice(0, maxPoint)
  const decreasingSteps = heights.slice(maxPoint + 1)

  if (heights.length < 3 || !increasingSteps.length || !decreasingSteps.length) {
    return false
  }

  const strictDirectionUp = increasingSteps.every((step, index, arr) => step > (arr[index - 1] || -1))
  const strictDirectionDown = decreasingSteps.every((step, index, arr) => step > (arr[index + 1] || -1))

  return strictDirectionUp && strictDirectionDown
}

checkSledJump([1, 2, 3, 2, 1]) // true: sube y baja de forma estricta
checkSledJump([0, 1, 0]) // -> true: sube y baja de forma estricta
checkSledJump([0, 3, 2, 1]) // -> true: sube y baja de forma estricta
checkSledJump([0, 1000, 1]) // -> true: sube y baja de forma estricta
checkSledJump([2, 4, 4, 6, 2]) // false: no sube de forma estricta
checkSledJump([1, 2, 3]) // false: sólo sube
checkSledJump([1, 2, 3, 2, 1, 2, 3]) // false: sube y baja y sube... ¡no vale!
