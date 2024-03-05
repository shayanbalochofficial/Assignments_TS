//* Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.

let transportMode: string[] = ['Bike', 'Car', 'Yacht', 'Jet'];

for (let i = 0; i<transportMode.length; i++){
    console.log(`I would Like to own a ${transportMode[i]}`);
}