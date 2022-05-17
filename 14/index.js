const missingReindeer = ids => {
  // Sort asc
  ids.sort()

  // Find the last reindeer
  const lastReindeer = Math.max(...ids)

  // Create range of numbers between 0 and last of reindeers
  const range = Array.from({ length: lastReindeer + 1 }, (_, i) => i)

  // Filter number not included in ids and defaults to last of reindeers plus one
  const [diff = (lastReindeer + 1)] = range.filter(reindeer => !ids.includes(reindeer))

  return diff
}

missingReindeer([0, 2, 3]) // -> 1
missingReindeer([5, 6, 1, 2, 3, 7, 0]) // -> 4
missingReindeer([0, 1]) // -> 2 (¡es el último el que falta!)
missingReindeer([3, 0, 1]) // -> 2
missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1]) // -> 8
missingReindeer([0]) // -> 1 (¡es el último el que falta!)
