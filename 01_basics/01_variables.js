const accountId = 14453
let accountEmail = "Souvik@google.com"
var accountPassword = "12345"
accountCity = "Kolkata"
let accountState;
// accountId = 2 // *not allowed

// accountEmail = "hc@hc.com"
// accountPassword = "2121221221"
accountCity = "Bengaluru"

console.log(accountId);
console.log(accountEmail);

// Souvik Kundu

/*
prefer not to use var 
because of issue in block and functional scope
*/

console.table([accountId, accountEmail,accountPassword,accountCity,accountState])