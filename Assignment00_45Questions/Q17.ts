//* Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
let folks: string[] = ['Shayan', 'John', 'Shane', 'Washington']; //Changed name of array bcz of error

console.log(`Hello Guests, I would like to Inform,I can invite only two people for dinner.\n`);

// removing until reaches 2
while (folks.length > 2) {
    let removed = folks.pop();
    console.log(`Hello Dear ${removed}, We are really sorry that we had to cancel your invitation.\n`);
}

// Confirming Invitation
for (let i = 0; i < folks.length; i++){
    console.log(`Hello Dear ${folks[i]}, You are still invited to join us.\n`);
}

//Emptying the Array
folks.splice(0, 2);
console.log(folks);