const boardNumbers = 75 // number of ->(numbers in the board)

window.onload = function(){
    let board = document.getElementById('board')

    for (let i = 0; i < boardNumbers; i++) {
        let cell = document.createElement("div");
        cell.classList.add("day");
        let numberInBoard = document.createElement("h3");
        numberInBoard.innerText = i + 1;
        cell.appendChild(numberInBoard);
        board.appendChild(cell);
    }
}

const randomNumber = function(){

    let rand = Math.floor(Math.random() * boardNumbers + 1)
    let drawn = document.getElementById('meeting-day')
    drawn.innerText = rand
    markNumber()
}

markNumber = function(){
    
    let cells = document.querySelectorAll('h3')
    let drawn = document.getElementById('meeting-day').innerText
    
    for(let i=0; i<boardNumbers; i++){
        if(drawn === cells[i].innerText){
            cells[i].classList.add('selected')
            console.log(cells[i])
        }
    }
}
