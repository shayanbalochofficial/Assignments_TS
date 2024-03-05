
let current_users = ['Shayan', 'Shuraim', 'Shahid', 'Admin', 'Mi Rey'];
let new_users = ['Admin', 'Shayan', 'Faye', 'Simon', 'Nazario'];

let low_current_user = current_users.map((user) => user.toLowerCase());

for (const user1 of new_users) {
    if (low_current_user.includes(user1.toLowerCase())) {
        console.log(`Dear ${user1}, We are sorry. Ths userName is already taken`);
    
    } else {
        console.log(`Dear ${user1}, We are glad to have you on board`); //* A little frank Message, So that the user don't be annoyed
    
}
    }
