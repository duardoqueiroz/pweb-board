const boards = []

function addBoard(){
    const board = document.createElement("div")
    board.id = `board-${boards.length + 1}`
    const button = document.createElement("button")
    const plusButton = document.createElement("i")
    board.className += "shadow-lg rounded-lg my-20 ml-5 w-96 h-32"
    plusButton.className += "m-3 text-3xl fas fa-plus-circle text-white z-10"
    button.setAttribute("onclick",`addCard(${boards.length})`)
    button.appendChild(plusButton)
    board.appendChild(button)
    document.getElementById("pattern").appendChild(board)
    boards.push(board)
}

function addCard(i){
    //adicionar card
}