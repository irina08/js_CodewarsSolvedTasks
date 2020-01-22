/* X and Y are playing a game. A list will be provided which contains n pairs
of strings and integers. They have to add the integeri to the ASCII values
of the stringi characters. Then they have to check if any of the new added
numbers is prime or not. If for any character of the word the added number
is prime then the word will be considered as prime word.

Example:
prime_word({{"Emma",30},{"Liam",30}}) = {1,1};
For the first word "Emma" ASCII values are: 69 109 109 97
After adding 30 the values will be: 99 139 139 127
As 139 is prime number so "Emma" is a Prime Word.
 */

function primeWord(arr){
    const result = [];

    function isPrime(n) {
        for(let i = 2; i < n; i++) {
            if(n % i === 0) return false;
        }
        return true;
    }

    for(let i = 0; i < arr.length; i++){
        let chars = [];
        let num = arr[i][1];
        let letters = arr[i][0].split('');
        chars = letters.map(el => el.charCodeAt(0) + num);
        if(chars.find(isPrime)) result.push(1);
        else result.push(0);
    }
    return result;
}