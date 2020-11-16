/* You need to cast the whole array to the correct type.
Create the function
JavaScript: toNumberArray(array)
 */

function toNumberArray(stringarray){
  return stringarray.map(el=>+el)
}