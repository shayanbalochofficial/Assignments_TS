let userNames = ['Shayan123', 'Ali99', 'admin', 'itx_99', 'im_latin'];

// Using For Of Loop
for (const user of userNames) {
    if (user === 'admin') {
        console.log('Hello Admin, Would you like to see a status report');
    }
    else {
        console.log(`Hello ${user}, thank you for logging in again`);
    }
}
