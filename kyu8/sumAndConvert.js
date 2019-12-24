function typeOfSum(a, b) {
    return typeof (a + b);
}

function problem(x){
    if(typeof x === 'number') return (x*50 +
        6);
    else return 'Error';
}

function boolToWord( bool ){
    if(bool === true) return 'Yes';
    else return 'No';
}

//Sum of Angels
function angle(n) {
    return (n - 2) * 180;
}

//Third Angle of a Triangle
function otherAngle(a, b) {
    return (180 - a - b);
}