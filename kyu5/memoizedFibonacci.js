/* For this particular Kata we want to implement the memoization solution.
This will be cool because it will let us keep using the tree recursion algorithm
while still keeping it sufficiently optimized to get an answer very rapidly.
The trick of the memoized version is that we will keep a cache data structure
(most likely an associative array) where we will store the Fibonacci numbers
as we calculate them. When a Fibonacci number is calculated, we first look it
up in the cache, if it's not there, we calculate it and put it in the cache,
otherwise we returned the cached number.
Refactor the function into a recursive Fibonacci function that using a
memoized data structure avoids the deficiencies of tree recursion
Can you make it so the memoization cache is private to this function?
 */

let fibonacci = function(n) {
    if(n==0 || n == 1)
        return n;
    let array = [1, 1];
    for (let i = 1; i < n; i++) {
        array.push(array[i - 1] + array[i]);
    }
    return array[array.length - 2];
}