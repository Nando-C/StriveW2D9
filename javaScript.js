const boardNumbers = 75 // number of ->(numbers in the board)
const range = []
for( let i=0; i<boardNumbers; i++){
    range[i] = i + 1
}

window.onload = function(){
    let board = document.getElementById('board')

    for (let i = 0; i < boardNumbers; i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        let numberInBoard = document.createElement("h3");
        numberInBoard.innerText = i + 1;
        cell.appendChild(numberInBoard);
        board.appendChild(cell);
    }
}

markNumber = function(){
    
    let cells = document.querySelectorAll('h3')
    let drawn = document.getElementById('drawn').innerText
    cells[drawn - 1].parentElement.classList.add('selected')
    
    //ANOTHER WAY -> LESS EFFICIENT!
    // for(let i=0; i<boardNumbers; i++){
    //     if(drawn === cells[i].innerText){
    //         cells[i].classList.add('selected')
    //         console.log(cells[i])
    //     }
    // }
}

const randomNumber = function(){
    let drawn = document.getElementById('drawn')
    let flag = true
    while(range.length && flag){
        let rand = Math.floor(Math.random() * boardNumbers + 1)
            if(range.indexOf(rand) !== -1){
                // console.log(`found ${rand}`)
                range.splice(range.indexOf(rand),1)
                drawn.innerText = rand
                markNumber()
                flag = false
            }
    }
    if(range.length === 0){
        console.log('CONGRATULATIONS YOU WON!!!')
        document.getElementById('restart').style.display = "block"
        alert('CONGRATULATIONS YOU WON!!!')
        alert('PRESS RESTART TO PLAY AGAIN!')
    }
    // console.log(range)

}
 const restart = function(){
    let board = document.getElementById('board')
    board.innerHTML = ''
    let drawn = document.getElementById('drawn')
    drawn.innerText = ''
    for( let i=0; i<boardNumbers; i++){
        range[i] = i + 1
        // console.log(range)
    }
    window.onload()
    document.getElementById('restart').style.display = "none"
 }
