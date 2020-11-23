/* you will be given an array. Each value represents a meeting room.
Your job? Find the first empty one and return its index (N.B. There may
be more than one empty room in some test cases).
'X' --> busy 'O' --> empty
If all rooms are busy, return 'None available!'.
 */

function meeting(x){
    if(x.indexOf('O') === -1)
        return 'None available!';
    else
        return x.indexOf('O');
}