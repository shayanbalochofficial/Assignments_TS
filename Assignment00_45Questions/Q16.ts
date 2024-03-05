//* More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

let gest: string[] = ['Shayan', 'John', 'Shane', 'Washington']; //Changed name of array bcz of error

console.log(`Hello Guests, I would like to Inform, I got more room available so would like to invite 3 more people\n`);

gest.unshift('Robert');
gest.splice(3, 0, 'Thomas');
gest.push('Davies');

for (let i = 0; i < gest.length; i++){
    console.log(`Hello Dear ${gest[i]}, I would like to invite you to join me tomorrow dinner at 9pm`);
}

