const container = document.getElementById('container')

const colors = [
    '#e74c3c','#8e44ad','#3498ad','#e67e22',
    '#2ecc71','#e9732a','#23ba7b','#a4f828','#da4da8','#8df7de','#c81c32','#7ef1d8','#f8127c','#74baf8'
 ]

const SQUARES = 500

for(let i=0; i< SQUARES ; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', ()=> setColor(square))
    square.addEventListener('mouseout', ()=> removeColor(square))

    container.appendChild(square)
}


function setColor(element){
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element){
    element.style.background = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)]
}