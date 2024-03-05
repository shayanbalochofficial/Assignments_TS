//*Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly
//[Lightning McQueen, Mater, Fillmore, Doc Hudson] Disney Cars 😔

type car = {
    manufacturer: string,
    model: string
}

function makeCar(manufacturer: string, model: string): car { 
    return {
        manufacturer: manufacturer,
        model: model
    }
}

let car1 = makeCar('Disney',"Lightning McQueen");
let car2 = makeCar("Nissan", " GTR (2023)");

console.log(car1);
console.log(car2);