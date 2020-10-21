/* King Arthur and his knights are having a New Years party.
Last year Lancelot was jealous of Arthur, because Arthur had a
date and Lancelot did not, and they started a duel.
To prevent this from happening again, Arthur wants to make sure
that there are at least as many women as men at this year's party.
He gave you a list of integers of all the party goers.
Arthur needs you to return true if he needs to invite more women or false if he is all set.
 */

function inviteMoreWomen(L) {
  let arrMen = L.filter(el => el === 1);
  let arrWomen = L.filter(el => el === -1);
  return arrMen.length > arrWomen.length;
}