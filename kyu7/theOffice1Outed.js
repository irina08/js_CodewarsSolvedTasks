/* In a team meeting, a terrible, awful person declares to the group
that you aren't working. You're in trouble. You quickly have to
gauge the feeling in the room to decide whether or not you should
gather your things and leave.
Given an object (meet) containing team member names as keys,
and their happiness rating out of 10 as the value, you need
to assess the overall happiness rating of the group.
If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'.
Happiness rating will be total score / number of people in the room.
Note that your boss is in the room (boss), their score is worth double it's face value (but they are still just one person!).
 */

function outed(meet, boss){
    let result = 0;
    for (let el in meet) {
        result += (el === boss ? 2 * meet[el] : meet[el]);
    }
    return result / Object.keys(meet).length <= 5 ? 'Get Out Now!' : 'Nice Work Champ!';
}