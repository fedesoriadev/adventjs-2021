const getMinJump = obstacles => {
  obstacles.sort()
  const finish = Math.max(...obstacles) + 1

  let jump = 1
  while (jump < finish) {
    // A remainder equals 0 between each obstacle and the jump size means we hit an obstacle
    const intersect = obstacles.filter(obstacle => obstacle % jump === 0)

    if (!intersect.length) {
      break
    }

    jump++
  }

  return jump
}

getMinJump([5, 3, 6, 7, 9]) // -> 4
getMinJump([2, 4, 6, 8, 10]) // -> 7
getMinJump([1, 2, 3, 5]) // -> 4
getMinJump([3, 7, 5]) // -> 2
getMinJump([9, 5, 1]) // -> 2
