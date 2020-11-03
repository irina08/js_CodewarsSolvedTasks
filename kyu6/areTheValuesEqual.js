/* Create the areEqual function that will return true if the two
supplied arguments hold exactly the same values and the same number
of values (not necessarily in the same order) and false if they do not.

The supplied arguments will be objects, arrays and strings.

Examples:
{laura:4, adam:3} & {laura:4, adam:3} => true
{adam:3, laura:4, maisie:2} & {laura:4, adam:3} => false
[{a:4},{b:3}] & [{b:3},{a:4}]) => true
{a:['5','6','7'], b:['4','5','6']} & {a:[5,6,7], b:[4,5,6]} => false
'Hello' & 'Hello' => true
 */

function areEqual(value1, value2) {
  if (typeof value1 !== 'object' || typeof value2 !== 'object')
    return value1 === value2;

  const keys = [...new Set([
    ...Object.keys(value1),
    ...Object.keys(value2)
  ])
  ];

  return keys.every(key => areEqual(value1[key], value2[key]));
}

/*
function areEqual(value1, value2) {
  const keys1 = Object.keys(value1);
  const keys2 = Object.keys(value2);

  if (keys1.length !== keys2.length)
    return false;
  return keys1.every((key) => {
    if (typeof value1[key] === "object" && typeof value1[key] === "object") {
      return areEqual(value1[key], value2[key])
    }
    return value1[key] === value2[key];
  });
}
 */

