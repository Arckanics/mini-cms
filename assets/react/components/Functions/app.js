
const setBaseUrl = (ext = "") => {
  return `${window.location.origin}/${ext}`
}

const uppercase = (txt) => {
  return txt.charAt(0).toUpperCase() + txt.slice(1)
}

const endOfPath = (path) => {
  return path.slice(path.lastIndexOf('\/'))
}

const updateTitle = (n) => {
  n = n.replace(/\//g, "")
  let title = document.querySelector('title')
  title.innerText = `Mini-CMS -> ${(n.length > 0 ? uppercase(n) : "Settings")}`
}

export { setBaseUrl, uppercase, updateTitle, endOfPath };
