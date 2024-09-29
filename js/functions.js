document.getElementById('dice').addEventListener('click', diceroll)

function diceroll() {
    const randomNumber = Math.floor(Math.random() * 6) + 1
    const diceimg = document.getElementById('diceimg')
    diceimg.src = `./img/${randomNumber}.png`
}