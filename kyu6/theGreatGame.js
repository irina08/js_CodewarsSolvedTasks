/* Two teams meet in The Game World Championship. Some scientists consider
this game to be the most intellectually challenging game in the world.
You are given 2 strings describing the teams' actions in the final battle.
Figure out who became the champion.
Input:
The input contains two strings of equal length : between 2 and 20 characters,
inclusive. Each line describes the actions of one team.
Ouput:
Output TEAM 1 WINS if the first team won, TEAM 2 WINS if the second team won,
and TIE if there was a tie.
Examples:
string team1 = "[]";
string team2 = "8<";
GreatGame.WhoIsWinner(team1, team2)) // ==>  "TEAM 2 WINS"
string team1 = "()[]8<";
string team2 = "[]()8<";
GreatGame.WhoIsWinner(team1, team2)) // ==>  "TIE"
string team1 = "[]";
string team2 = "()";
GreatGame.WhoIsWinner(team1, team2)) // ==>  "TEAM 1 WINS"
PUZZLESFUNDAMENTALSGAMESALGORITHMS
 */

function whoIsWinner(team1, team2){
  let team1Score = 0;
  let team2Score = 0;
  for (let i = 0; i < team1.length; i+=2) {
    if (team1.substring(i, i+2) === '8<' && team2.substring(i, i+2) === '[]')
      team1Score++;
    else if (team1.substring(i, i+2) === '[]' && team2.substring(i, i+2) === '()')
      team1Score++;
    else if (team1.substring(i, i+2) === '()' && team2.substring(i, i+2) === '8<')
      team1Score++;
    else if (team1.substring(i, i+2) === team2.substring(i, i+2)) {
      team1Score +=0; team2Score +=0;
    }
    else team2Score++;
  }
  if (team1Score === team2Score) return 'TIE';
  else return team1Score > team2Score ? 'TEAM 1 WINS' : 'TEAM 2 WINS';
}