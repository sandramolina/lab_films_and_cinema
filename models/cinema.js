const Cinema = function (films) {
  this.films = films
};


Cinema.prototype.getFilmTitles = function () {
  const result = []
  this.films.forEach((film) => {
    result.push(film.title)
    
  });  
  return result
}

Cinema.prototype.findFilmByTitle = function (title) {
  const foundFilm = this.films.find((film) => {
    return film.title === title
  })
  return foundFilm // the square brackets is how you get it to return the object
}


// Cinema.prototype.findByGenre = function (genre) {
//   const filteredArray = this.films.filter((film) => {
//     return film.genre === genre
//   })
//   return filteredArray
// }


Cinema.prototype.isItThere = function (year) {
  const result = this.films.some((film) => {
    return film.year === year
  })
    return result
}

Cinema.prototype.isItNotThere = function (year) {
  const result = this.films.some((film) => {
    return film.year !== year
  })
    return result
}

Cinema.prototype.allFilmsAreLong = function (length) {
  const result = this.films.every((film) => {
    return film.length >= length
  })
  return result
}

Cinema.prototype.totalRunningTime = function () {
  const total = this.films.reduce((runningTotal, film) => {
    return runningTotal + film.length
  },0)
  return total
}

Cinema.prototype.filmsByProperty = function (property, value) {
  const filteredArray = this.films.filter((film) => {
    return film.hasOwnProperty(property) && film[property] == value
    
  })
  return filteredArray
}

module.exports = Cinema;
