//* Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.

let guest: string[] = ['Shayan', 'John', 'Shane', 'Washington']; //Changed name of array bcz of error

guest.pop();
guest.push('Jude');

for (let i = 0; i < guest.length; i++){
    console.log(`Hello Dear ${guest[i]}, I would like to invite you to join me tomorrow dinner at 9pm`);
}






