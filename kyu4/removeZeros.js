/* Write a function that takes an array of values and moves all elements
that are zero to the end of the array, otherwise preserving the order
of the array. The zero elements must also maintain the order in which
they occurred.
For example, the following array
[7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]
is transformed into
[7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]
Zero elements are defined by either 0 or "0". Some tests may include elements
that are not number literals.
You are NOT allowed to use any temporary arrays or objects. You are also not
 allowed to use any Array.prototype or Object.prototype
 */

function removeZeros(array) {
    let lastZeroPosition = array.length;
    let countO = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === '0' || array[i] === 0) {
            countO++;
        }
    }
    for (let i = array.length - 1; i >= 0 && countO > 0; i--) {
        if (array[i] === 0 || array[i] === '0') {
            const temp = array[i];
            let needToSwap = false;
            for (let j = i+1; j < lastZeroPosition; j++) {
                needToSwap = true;
                array[j-1] = array[j];
            }
            array[lastZeroPosition - 1] = temp;
            lastZeroPosition--;
            countO--;

            // find the next zero
            if (needToSwap && (array[i] === 0 || array[i] === '0')) {
                i++;
            }
        }
    }
    return array;
}
