const findTheOldest = function(people) {

  const x = people.reduce((oldest, person)=>{
    let currentYear = new Date().getFullYear();
    if(!Object.hasOwn(person, "yearOfDeath")){
        person.yearOfDeath = currentYear;
    }
    let agePerson = person.yearOfDeath-person.yearOfBirth;
    let ageOldest = oldest.yearOfDeath-oldest.yearOfBirth
  
    if(agePerson>ageOldest||Object.keys(oldest).length<1){
        Object.assign(oldest, person);
    }
    return oldest
  },{});    
  return x
};



// Do not edit below this line
module.exports = findTheOldest;
