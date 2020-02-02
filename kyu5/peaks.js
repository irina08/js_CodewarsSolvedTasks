/* you will write a function that returns the positions and the values of the "peaks"
(or local maxima) of a numeric array. For example, the array arr = [0, 1, 2, 5, 1, 0]
has a peak at position 3 with a value of 5 (since arr[3] equals 5).
The output will be returned as an object with two properties: pos and peaks.
Both of these properties should be arrays. If there is no peak in the given array,
then the output should be {pos: [], peaks: []}.
Example: pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]) should return {pos: [3, 7], peaks: [6, 3]}
All input arrays will be valid integer arrays (although it could still be empty), so you won't need
to validate the input.
The first and last elements of the array will not be considered as peaks (in the context of
a mathematical function, we don't know what is after and before and therefore,
we don't know if it is a peak or not).
Also, beware of plateaus !!! [1, 2, 2, 2, 1] has a peak while [1, 2, 2, 2, 3] does not.
In case of a plateau-peak, please only return the position and value of the beginning of the plateau.
For example: pickPeaks([1, 2, 2, 2, 1]) returns {pos: [1], peaks: [2]} (or equivalent in other languages)
 */

function pickPeaks(arr){
    let result = { pos:[], peaks:[] };
    for (let i = 1; i < arr.length - 1; i ++) {
        if (arr[i] > arr[i-1] && arr[i] > arr[i+1]) {
            result.pos.push(i);
            result.peaks.push(arr[i]);
        } else if (arr[i] > arr[i-1] && arr[i] === arr[i+1]) {
            let temp = [];
            temp.push(i);
            temp.push(arr[i]);
            for (let j = i + 1; j < arr.length - 1; j++) {
                if (arr[j] > arr[j+1]) {
                    result.pos.push(temp[0]);
                    result.peaks.push(temp[1]);
                    break;
                } else if (arr[j] < arr[j + 1]) {
                    break;
                }
            }
        }
    }
    return result;
}

/*
function pickPeaks(arr){
  let result = {pos: [], peaks: []};
  if(arr.length > 2) {
    let index = -1;
    for(let i = 1; i < arr.length; i++){
      if(arr[i] > arr[i-1]) {
        index = i;
      } else if(arr[i] < arr[i-1] && index != -1) {
        result.pos.push(index);
        result.peaks.push(arr[index]);
        index = -1;
      }
    }
  }
  return result;
}
 */