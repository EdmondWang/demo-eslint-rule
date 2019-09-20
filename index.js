'use strict';

const today = new Date();
const curHour = today.getHours();
const curDay = today.getUTCDay();

let output = '';
if ( curHour < 12 ) {
    output = 'Good Morning';
} else if ( curHour < 18 ) {
    output = 'Good Afternoon';
} else {
    output = 'Good Evening';
}

output += ', ';
output += curDay <= 5? 'Have a good time!': 'Have a nice weekend!';

console.log( output );
