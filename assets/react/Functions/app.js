// prepareForSend prepare une date pour PHP
const prepareForSend = (data) => {
  const result = {}
  for (let [k,v] of Object.entries(data)) {
    if (v instanceof Date) {
      v.setDate(v.getDate()+1)
      result[k] = v.toISOString().replace(/T|\.[0-9]+Z$/g, (ex) => ex === "T" ? " " : "")
    } else {
      result[k] = v
    }
  }
  return result;
}


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

// normalize un string pour filtre

const strNormalize = (str) => {
  const test = (l,reg) => new RegExp(reg).test(l)
  return str.toLowerCase()
    .replace(/[^a-z]/g, (w) => {
      switch (true) {
        case test(w ,/ã|à|á|â|ä/gi):
          return "a"
        case test(w, /è|é|ê|ë/gi):
          return "e"
        case test(w, /ì|í|î|ï/gi):
          return "i"
        case test(w, /õ|ò|ó|ô|ö/gi):
          return "o"
        case test(w, /ù|ú|û|ü/gi):
          return "u"
        case test(w, /ý|ÿ/gi):
          return "y"
        case test(w, /ñ/gi):
          return "n"
        case test(w, /œ/gi):
          return "oe"
        case test(w, /æ/gi):
          return "ae"
        case test(w, /ç/gi):
          return "c"
        case test(w, /ß/gi):
          return "ss"
        default:
          return w
      }
    })
}

// trouver une props booléen (vrai ou faux) dans un objet recursif

const getPropsBoolStatus = (obj, prop, boolState) => {

  if (obj[prop]) {
    return obj[prop] === boolState;
  }

  for (const [key,value] of Object.entries(obj)) {
    if (isObject(value)) {
      if (getPropsBoolStatus(value, prop, boolState)) {
        return true
      }
    }
  }

  return false
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

const sortAsc = (a,b) => {
  return a.sort < b.sort ? -1 : a.sort > b.sort ? 1 : 0
}

const sortDes = (a,b) => {
  return a.sort > b.sort ? -1 : a.sort < b.sort ? 1 : 0
}

export { 
  setBaseUrl, 
  capitalize, 
  updateTitle, 
  endOfPath, 
  strContains, 
  cleanPath, 
  isJSON, 
  isArray, 
  areEqual, 
  sortAsc, 
  sortDes,
  getPropsBoolStatus,
  strNormalize,
  prepareForSend
};
