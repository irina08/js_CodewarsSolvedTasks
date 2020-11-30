/* This code is a mess! Would you help Pac
to fix the code in time?
 */

function yourFutureCareer(){
  let career = Math.random();
  if (career <= 0.32)
    return 'FrontEnd Developer';
  else if (career <= 0.65)
    return 'BackEnd Developer';
  else
    return 'Full-Stack Developer';
}
yourFutureCareer();