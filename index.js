// Code your solution here
function findMatching(drivers, string) {
  // takes in an array of drivers' names and a string
  // returns the matching list of drivers
  // be case insensitive
  // return empty array if there is no match

  // if there is no match
    // return an empty array

  // filter the input array to see if there are matches to the string
    // add these to an empty array
  // return the empty array

  const filterDrivers = drivers.filter(function (name) {
    return name.toLowerCase() === string.toLowerCase()
  })
  return filterDrivers;
}

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

console.log(findMatching(drivers, 'Bobby'));
console.log(findMatching(drivers, 'Amanda'));

function fuzzyMatch(drivers, string) {

  const firstLetter = drivers.filter(driver => driver[0].toLowerCase() === string[0].toLowerCase());
  console.log('firstLetter', firstLetter);

  return firstLetter;

}

console.log(fuzzyMatch(drivers, 'S'));
console.log(fuzzyMatch(drivers, "Z"));

function matchName(drivers, string) {
  
  const driverMatch = drivers.filter(function (name) {
    return name.name === string;
  })
  console.log('driverMatch', driverMatch)
  return driverMatch;
}

console.log(matchName(drivers, "Bobby"));