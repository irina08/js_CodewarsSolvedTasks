/*
All words must have their first letter capitalized without spaces.
For instance:
"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord
 */
String.prototype.camelCase=function(){
    return this.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
}
