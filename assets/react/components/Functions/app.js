
// url de base pour faciliter la navigation

const setBaseUrl = (ext = "") => {
  return `${window.location.origin}${ext.length > 0 ? "/" : null}${ext}`
}

const cleanPath = path => path.replace(/^\/$|\/$/, '')

// première lettre en majuscule

const capitalize = (txt) => {
  return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase()
}

// obtenir l'url relative

const endOfPath = (path) => {
  return path.slice(path.lastIndexOf('\/'))
}

const updateTitle = (n) => {
  n = n.replace(/\//g, "")
  let title = document.querySelector('title')
  title.innerText = `Mini-CMS -> ${(n.length > 0 ? capitalize(n) : "Settings")}`
  return;
}

const strContains = (str, search) => {
  let re = new RegExp(search, "gi")
  return str.search(re) >= 0 ? true : false
}

export { setBaseUrl, capitalize, updateTitle, endOfPath, strContains, cleanPath };
