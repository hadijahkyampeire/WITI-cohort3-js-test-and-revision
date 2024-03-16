const movieObj = { title: 'Five o', duration: 30, star: { name: 'Steve', country: 'US', age: 35 }};
function logMovieInfo() {
  const starInfo = movieObj.star;
  return `${movieObj.title} lasts for ${movieObj.duration} minutes. Star: ${starInfo.name} is ${starInfo.age} years old and born in ${starInfo.country}`
}

console.log(logMovieInfo())