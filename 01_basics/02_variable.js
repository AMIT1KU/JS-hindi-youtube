const accountId = 144553
let accountEmail = "amit@google.com"
var accountPassword = "12345"
accountCity = "Alwar"
let accountState;

// accountId = 2
accountEmail = "Amit23@gooogle.com"
accountPassword = "67890"
accountCity = "Pune"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and function scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
