/* In this kata, you will make a function that converts between
camelCase, snake_case, and kebab-case.
You must write a function that changes to a given case.
It must be able to handle all three case types:
js> changeCase("snakeCase", "snake")
"snake_case"
js> changeCase("some-lisp-name", "camel")
"someLispName"
js> changeCase("map_to_all", "kebab")
"map-to-all"
js> changeCase("doHTMLRequest", "kebab")
"do-h-t-m-l-request"
js> changeCase("invalid-inPut_bad", "kebab")
undefined
js> changeCase("valid-input", "huh???")
undefined
js> changeCase("", "camel")
""
Your function must deal with invalid input as shown, though it will only be passed strings.
Furthermore, all valid identifiers will be lowercase except when necessary, in other words
on word boundaries in camelCase.
 */

function changeCase(identifier, targetCase){
  if (!/camel|snake|kebab/.test(targetCase)) return undefined;
  if (identifier.includes('_') && identifier.includes('-')) return undefined;
  if (/[A-Z]/g.test(identifier) && /-|_/.test(identifier)) return undefined;
  if (targetCase === "camel"){
    return identifier.replace(/[_-]\w/gi, char => char[1].toUpperCase());
  }
  if (/[A-Z]/g.test(identifier)) {
    identifier = identifier.replace(/[A-Z]/g, char => '_' + char.toLowerCase());
  }
  targetCase === "snake" ? identifier = identifier.replace(/-/g, '_') : identifier = identifier.replace(/_/g, '-');
  return identifier;
}