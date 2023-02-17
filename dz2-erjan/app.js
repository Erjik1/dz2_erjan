// 1 часть

const block = document.querySelector('.block')
const box = document.querySelector('.box')

let positionX = 0
let positionY = 0


const move = () => {
    if (positionX <= 440 && positionY <= 0) {
        positionX += 16
        box.style.left = `${positionX}px`
        setTimeout(move, 100)
    } else if (positionX >= 440 && positionY <= 440) {
        positionY += 16
        box.style.top = `${positionY}px`
        setTimeout(move, 100)
    } else if (positionY === 448 && positionX !==0){
        positionX -= 16
        box.style.left = `${positionX}px`
        setTimeout(move, 100)
    } else {
        positionY -= 16
        box.style.top = `${positionY}px`
        setTimeout(move, 100)
    }
}

move ()

// 2 часть

const reset = document.querySelector('#reset')
const start = document.querySelector('#start')
const timer = document.querySelector('.timer')

let count = 0

start.addEventListener('click', ()=>{
    if (count<60) {
        const increment = setInterval( ()=>{
            count++
            timer.innerHTML = count
            if(count>=60){
                clearInterval(increment)
            }
        }, 100)

        reset.addEventListener('click', ()=>{
            count = 0
            timer.innerHTML = count
            clearInterval(increment)
        })
    }
})