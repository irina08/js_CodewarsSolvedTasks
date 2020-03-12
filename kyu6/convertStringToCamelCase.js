/* Complete the method/function so that it converts dash/underscore
delimited words into camel casing. The first word within the output
should be capitalized only if the original word was capitalized
(known as Upper Camel Case, also often referred to as Pascal case).
Examples
toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
 */
function toCamelCase(str){
  return str.split(/[^a-zA-Z]/g).map((el , i) => i > 0 ? el[0].toUpperCase() + el.slice(1):el).join('')
}