function wakeDog(dogName, dogBreed){
  let result = `Wake ${dogName} the ${dogBreed}`
  console.log(result)
  return result
}
function leashDog(dogName, dogBreed){
  let result = `Leash ${dogName} the ${dogBreed}`
  console.log(result)
  return result
}
function walkToPark(dogName, dogBreed){
  let result = `Walk to the park with ${dogName} the ${dogBreed}`
  console.log(result)
  return result
}
function throwFrisbee(dogName, dogBreed){
  let result = `Throw the frisbee for ${dogName} the ${dogBreed}`
  console.log(result)
  return result
}
function walkHome(dogName, dogBreed){
  let result = `Walk home with ${dogName} the ${dogBreed}`
  console.log(result)
  return result
}
function unleashDog(dogName, dogBreed){
  let result = `Unleash ${dogName} the ${dogBreed}`
  console.log(result)
  return result
}
var routine = [
  wakeDog,
  leashDog,
  walkToPark,
  throwFrisbee,
  walkHome,
  unleashDog
  ]
  
  function exerciseDog(dogName, dobBreed){
    for(i = 0; i < routine.length - 1; i++){
      self(dogName, dogBreed)[i]
    }
    
  }
    
  