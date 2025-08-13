document.addEventListener('DOMContentLoaded', () => {
   const gridDisplay = document.querySelector(".grid")
    const score = document.querySelector("#score")
    const result = document.querySelector("#result")
    const width = 4
    const squares = []
    // create the board
    function createBoard(){
       for(let i = 0; i < width*width; i++){
          const square = document.createElement("div")
           square.innerHTML = 0;
           gridDisplay.appendChild(square)
           squares.push(square)
       }
        generate()
        generate()
    }
    createBoard();
    function generate(){
       const randomNumber = Math.floor(Math.random() * squares.length);
       if(parseInt(squares[randomNumber].innerHTML) === 0){
           squares[randomNumber].innerHTML = 2;
       }
       else {
           generate()
       }
     }
     function moveRight(){
        for(let i = 0; i < 16 ; i++){
            if(i % 4 ===0){
                let totalOne = squares[i].innerHTML;
                let totalTwo = squares[i+1].innerHTML;
                let totalThree = squares[i+2].innerHTML;
                let totalFour = squares[i+3].innerHTML;
                let row = [parseInt(totalOne),parseInt(totalTwo),parseInt(totalThree) ,parseInt(totalFour)];
                let filteredRow = row.filter(num => num !== 0);
                // find the missing numbers
                let missing = 4 - filteredRow.length;
                // fill the missing numbers with zeros
                let zeros = Array(missing).fill(0);
                let newRow = zeros.concat(filteredRow)
                console.log(newRow)
            }
        }
     }
    moveRight();
})