const wrapGifts = gifts => {
  if (!gifts.length) return []

  const border = gifts[0].length + 2
  const wrapper = ['*'.repeat(border)]

  gifts.forEach(gift => {
    wrapper.push(`*${gift}*`)
  })

  wrapper.push('*'.repeat(border))

  return wrapper
}

wrapGifts(['📷', '⚽️'])
/* Resultado:
[ '****',
  '*📷*',
  '*⚽️*',
  '****'
]
*/

wrapGifts(['🏈🎸', '🎮🧸'])
/* Resultado:
[ '******',
  '*🏈🎸*',
  '*🎮🧸*',
  '******'
]
*/

wrapGifts(['📷'])
/* Resultado:
[ '****',
  '*📷*',
  '****'
]
*/

wrapGifts([])
