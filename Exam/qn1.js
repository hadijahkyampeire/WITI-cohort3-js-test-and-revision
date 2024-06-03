/**
 * Create an object to store the following information about your favorite movie: title (a string), duration (a number), 
 * and star (an object of name, country, and age strings). Create a function to log the movie information like so: 
 * "Puff the Magic Dragon lasts for 30 minutes. Star: Puff is 45 years old and born in Uganda." (3mks)
 */


const movieObj = { 
  title: 'Five o', 
  duration: 30, 
  star: { 
    name: 'Steve', 
    country: 'US', 
    age: 35 
  }
};

function logMovieInfo() {
  const starInfo = movieObj.star;
  return `${movieObj.title} lasts for ${movieObj.duration} minutes. Star: ${starInfo.name} is ${starInfo.age} years old and born in ${starInfo.country}`;
}

console.log(logMovieInfo());
