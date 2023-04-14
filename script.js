const smiley = document.querySelector('.face')
count = 0

function moveSmiley() {
    count += 50    
    // Adds 50 to count when the function is invoked.
    smiley.style.left = count + 'px' 
     //Moves smiley to horizontaly by count number in px.
    console.log(`Smiley moved! ${count}`)
    //Keeps track of smiley's moves.
}

smiley.addEventListener('click', moveSmiley)
// Invokes "moveSmiley" function when smiley's face is clicked.