function hideSide() {
    var hideSide = document.getElementById(".sidebar");
    hideSide.parentNode.removeChild(hideSide);
}

// sessionto keep track of user logged in

// for top player list, render only first two letters of name 

// HIDE + OPEN SIDEBAR

// CURSOR THAT GETS BIGGER when hovering over div(game)

// keyboard with letters for user to enter

//if not too heavy, then i need sound effects
 // one sound for adding, + one removing

// PASSWORD, NEED A FUNCTION TO RENDER ASTERISKS

// javascript for forgot password page, enter password, loop (restart if user submits empty string), if user enters an email, send a message indicating a password may have been sent to email associated with the account
// obfuscate whether an account+email actually is in db 
// need security for this

// javascript for the forms

const topPlayers = [
    { name: 'username1', type: '5000'},
    { name: 'username2', type: '4000'},
    { name: 'username3', type: '3000'},
    { name: 'username4', type: '2000' },
    { name: 'username5', type: '1000'},
]

// req DOM, create a function, select the table, append child for the row + column