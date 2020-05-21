function wakeDog(dogName, dogBreed) {
   
    console.log(`Wake ${dogName} the ${dogBreed}`);
    return `Wake ${dogName} the ${dogBreed}`;
};

wakeDog();

function leashDog(dogName, dogBreed) {
    console.log(`Leash ${dogName} the ${dogBreed}`);
    return `Leash ${dogName} the ${dogBreed}`;
};

function walkToPark(dogName, dogBreed) {
    console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
    return `Walk to the park with ${dogName} the ${dogBreed}`;

};

function throwFrisbee(dogName, dogBreed ) {
    console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
    return `Throw the frisbee for ${dogName} the ${dogBreed}`;
};

function walkHome(dogName, dogBreed) {
    console.log(`Walk home with ${dogName} the ${dogBreed}`);
    return `Walk home with ${dogName} the ${dogBreed}`;
};

function unleashDog(dogName, dogBreed) {
    console.log(`Unleash ${dogName} the ${dogBreed}`);
    return `Unleash ${dogName} the ${dogBreed}`;
};


const routine = [
    wakeDog,
    leashDog,
    throwFrisbee,
    walkHome,
    unleashDog,
    walkToPark
];

function exerciseDog(dogName, dogBreed) {
    return routine.map(x => x(dogName, dogBreed));

    //iterating over the array of functions using.map (which returns the new array) and returning each function
}

