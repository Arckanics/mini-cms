
const getToken = () => {
  let token = document.head.querySelector('meta[name=_token]')
  if (!token) {
    return null
  }
  let key = token.getAttribute('value')
  token.remove()
  return key
}

export { getToken }