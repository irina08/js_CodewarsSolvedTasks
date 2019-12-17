/* Find the longest substring in alphabetical order.
 Eg: the longest alphabetical substring in "asdfaaaabbbbcttavvfffffdf" is "aaaabbbbctt".
 There are tests with strings up to 10 000 characters long so your code will need
 to be efficient.
The input will only consist of lowercase characters and will be at least one letter long.
If there are multiple solutions, return the one that appears first.
*/

function longest(str) {
    let arr = [];
    let s = str[0];
    if(str.length === 1) {
        arr.push(s);
        return arr[0];
    }
    else {
        for(let i = 1; i < str.length; i++) {
            if(str[i] >= str[i-1]) {
                s += str[i];
                if( i === str.length - 1) arr.push(s);
            }
            else  {
                arr.push(s);
                s = str[i];
            }
        }
    }

    let tempArray = Array.from(arr);
    const sortedArray = tempArray.sort((a, b) => b.length - a.length);

    for (let i = 0; i < arr.length; i++) {
        if(arr[i].length === sortedArray[0].length) {
            return arr[i];
        }
    }
}