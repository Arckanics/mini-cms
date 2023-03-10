
// url de base pour faciliter la navigation

const setBaseUrl = (ext = "") => {
  return `${window.location.origin}${ext.length > 0 ? "/" : null}${ext}`
}

// nettoie l'url fourni

const cleanPath = path => path.replace(/^\/$|\/$/, '').replace(/\/\//g, '/')

// première lettre en majuscule

const capitalize = (txt) => {
  return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase()
}

// obtenir l'url relative

const endOfPath = (path) => {
  return path.slice(path.lastIndexOf('\/'))
}

// change le titre dans l'onglet

const updateTitle = (n) => {
  n = n.replace(/\//g, "")
  document.title = `Mini-CMS -> ${(n.length > 0 ? capitalize(n) : "Settings")}`
  return;
}

// trouve une expression régulière

const strContains = (str, search) => {
  let re = new RegExp(search, "gi")
  return str.search(re) >= 0 ? true : false
}

// compare deux objets JS

const areEqual = (entry, filter) => {
  if (Object.entries(entry).length !== Object.entries(filter).length) {
    return false
  }

  for (const [key, value] of Object.entries(entry)) {
    if (filter[key] !== value) {
      return false
    }
  }

  return true
}

// verifie si la variable est un JSON valide

const isJSON = (json) => {
  try {
    JSON.parse(json)
  } catch {
    return false
  }
  return true
}

// verifie si la variable est un Tableaux 

const isArray = (array) => {
  return Array.isArray(array)
}

export { setBaseUrl, capitalize, updateTitle, endOfPath, strContains, cleanPath, isJSON, isArray, areEqual };
