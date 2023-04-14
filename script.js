const smiley = document.querySelector('.face')
count = 0

function moveSmiley() {
    count += 50
    smiley.style.left = count + 'px'
    console.log(`Smiley moved! ${count}`)
}
