
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

// compare deux objets JS (tout types)

const areEqual = (obj1,obj2) => {
  if (typeof obj1 !== typeof obj2) {
    return false
  }

  if (isArray(obj1) && isArray(obj2)) {
    if (obj1.length !== obj2.length) {
      return false
    }

    for (let i = 0; i < obj1.length; i++) {
      if (!areEqual(obj1[i],obj2[i])) {
        return false
      }
    }

    return true
  }

  if (isObject(obj1) && isObject(obj2)) {
    const ent1 = Object.entries(obj1)
    const ent2 = Object.entries(obj2)
    if (ent1.length !== ent2.length) {
      return false
    }
    for (const [key, value] of Object.entries(obj1)) {
      if (isDefined(value) && isDefined(obj2[key])) {
        if (!areEqual(obj1[key],obj2[key])) {
          return false
        }
      }
    }

    return true
  }
  return obj1 === obj2
}

// verifie si la variable est définie

const isDefined = (obj) => obj !== null && obj !== undefined

// verifie si la variable est un JSON valide

const isJSON = (json) => {
  try {
    JSON.parse(json)
  } catch {
    return false
  }
  return true
}

// verifie si la variable est un objet JS

const isObject = (object) => typeof object === "object" && !isArray(object)

// verifie si la variable est un Tableaux 

const isArray = (array) => {
  return Array.isArray(array)
}

export { setBaseUrl, capitalize, updateTitle, endOfPath, strContains, cleanPath, isJSON, isArray, areEqual };
