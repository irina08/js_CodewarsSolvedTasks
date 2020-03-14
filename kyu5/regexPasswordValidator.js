/* You need to write regex that will validate a password to make
sure it meets the following criteria:
At least six characters long
contains a lowercase letter
contains an uppercase letter
contains a number
Valid passwords will only be alphanumeric characters.
 */

function validate(password) {
  /*let l = password.length >= 6;
  let lower = password.match(/[a-z]/g);
  let upper = password.match(/[A-Z]/g);
  let number = password.match(/[0-9]/g);
  let sign = !password.match(/\W/g);
  return l && lower && upper && number && sign;
  */
  return (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/).test(password);

}