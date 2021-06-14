const findMatching = (drivers, name) => {
    const newDrivers = drivers.filter(function (person) {
        return person.toLowerCase() === name.toLowerCase()
    });
    return newDrivers
} 

const fuzzyMatch = (drivers, query) => {
        return drivers.filter(function(firstLetters) {
            return firstLetters.toLowerCase().indexOf(query.toLowerCase()) === 0
        })
      }
    
//const matchName = (collection, string) => {


    /*const length = query.length;
    return drivers.filter(el => el.toLowerCase().indexOf(query.toLowerCase())!== -1)
    if () {
    return []
*/

function matchName(drivers, name){
    return drivers.filter(function(driver){
      return driver.name === name
    })
  }