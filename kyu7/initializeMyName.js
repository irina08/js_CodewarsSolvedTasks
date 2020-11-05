/* You task is to initialize the middle names (if there is any).

Examples
'Jack Ryan'                   => 'Jack Ryan'
'Lois Mary Lane'              => 'Lois M. Lane'
'Dimitri'                     => 'Dimitri'
'Alice Betty Catherine Davis' => 'Alice B. C. Davis'

 */

function initializeNames(name){
  name = name.split(' ')
  if (name.length > 2) {
    for (let i = 1; i < name.length-1; i++)
      name[i]= name[i][0]+'.'
  }
  return name.join(' ')
}

/*
function initializeNames(name){
  return name.split(' ').map((e,i,a) => i == 0 || i == a.length-1 ? e : e[0]+'.').join(' ');
}
 */