/* Write a function filterLucky/filter_lucky() that accepts
a list of integers and filters the list to only include the
elements that contain the digit 7.

For example,

ghci> filterLucky [1,2,3,4,5,6,7,68,69,70,15,17]
[7,70,17]

 */

var filterLucky=x=>{
  return x.filter(n => n.toString().includes(7));
}


//second solution
/*
const filterLucky = (x) => {
  return x.filter((el) => {
    el = el + '';
    for (let i = 0; i < el.length; i++) {
      if (el[i] === '7') {
        return el;
      }
    }
  });
}
 */