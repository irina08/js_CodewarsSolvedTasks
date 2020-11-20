/* Count the number of exclamation marks and question marks, return the product.

Examples
Product("") == 0
product("!") == 0
Product("!ab? ?") == 2
Product("!!") == 0
Product("!??") == 2
Product("!???") == 3
Product("!!!??") == 6
Product("!!!???") == 9
Product("!???!!") == 9
Product("!????!!!?") == 20
 */

function product(s){
  return (s.match(/\?/g) || []).length * (s.match(/!/g) || []).length;
}

/*
function product(s){
  let ques = 0;
  let excl = 0;

    s.split('').forEach(function(item){
      if (item === "!"){
        excl += 1;
      }
      if(item === "?"){
        ques += 1;
      }
      if(item === ""){
        return 0;
      }
    });

  return excl * ques;
}
 */
