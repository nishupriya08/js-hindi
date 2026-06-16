const accountId = 12343575;
var accountEmail = "abc123@gmail.com";
let  accountPassword = "123456";
accountCity = "Jaipur";
let accountState;


//accountId = 244 //no allowed

accountEmail = "nishu234@gmail.com";
accountPassword = "345678";
accountCity = "Bengluru";

/* Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountEmail, accountId, accountPassword, accountCity, accountState]);