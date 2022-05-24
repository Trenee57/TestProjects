document.addEventListener('DOMContentLoaded', () => {
const grid = document.querySelector('.grid');
const scoreDisplay = document.getElementById('score')
const width = 8;
const squares = [];
let score = 0;

const candyColors = [
    'url(img/alternative-red.png)',
    'url(img/alternative-yellow.png)',
    'url(img/alternative-orange.png)',
    'url(img/alternative-purple.png)',
    'url(img/alternative-green.png)',
    'url(img/alternative-blue.png)'
]

//Create the Board
function createBoard(){
    for (let i = 0; i < width*width; i++){
        const square = document.createElement('div');
        square.setAttribute('draggable', true);
        square.setAttribute('id', i);
        let randomColor = Math.floor(Math.random() * candyColors.length);
        square.style.backgroundImage = candyColors[randomColor];
        grid.appendChild(square);
        squares.push(square);
    }
}
createBoard();

let colorBeingDragged
let colorBeingReplaced
let squareIdBeingDragged
let squareIdBeingReplaced

// Drag the candies
squares.forEach(square => square.addEventListener('dragstart', dragStart));
squares.forEach(square => square.addEventListener('dragend', dragEnd));
squares.forEach(square => square.addEventListener('dragover', dragOver));
squares.forEach(square => square.addEventListener('dragenter', dragEnter));
squares.forEach(square => square.addEventListener('dragleave', dragLeave));
squares.forEach(square => square.addEventListener('drop', dragDrop));

function dragStart() {
    colorBeingDragged = this.style.backgroundImage
    squareIdBeingDragged = parseInt(this.id)
}
function dragOver(e) {
    e.preventDefault()
}
function dragEnter(e) {
    e.preventDefault()
}
function dragLeave() {

}

function dragDrop() {
    colorBeingReplaced = this.style.backgroundImage
    squareIdBeingReplaced = parseInt(this.id)
    this.style.backgroundImage = colorBeingDragged
    squares[squareIdBeingDragged].style.backgroundImage = colorBeingReplaced

}

function dragEnd() {
//what is a valid move?
    let validMoves = [
        squareIdBeingDragged -1, 
        squareIdBeingDragged -width,
        squareIdBeingDragged +1,
        squareIdBeingDragged +width
    ]
    let validMove = validMoves.includes(squareIdBeingReplaced)

    if(squareIdBeingReplaced && validMove){
        //squareIdBeingReplaced = null
        let scoredRowOfFour = checkRowForFour();
        let scoredColumnOfFour = checkColumnForFour();
        let scoredRowOfThree = checkRowForThree();
        let scoredColumnOfThree = checkColumnForThree();
        
        //check if any combo was scored
        if(scoredRowOfFour || scoredColumnOfFour || scoredRowOfThree || scoredColumnOfThree){
          squareIdBeingReplaced = null;
        }
        //if no combo scored swap back to original candies
        else if(!scoredRowOfFour && !scoredColumnOfFour && !scoredRowOfThree && !scoredColumnOfThree){
          squares[squareIdBeingDragged].style.backgroundImage = colorBeingDragged;
          squares[squareIdBeingReplaced].style.backgroundImage = colorBeingReplaced;
        }

    }else if (squareIdBeingReplaced && !validMove){
        squares[squareIdBeingReplaced].style.backgroundImage = colorBeingReplaced
        squares[squareIdBeingDragged].style.backgroundImage = colorBeingDragged
    }else 
     squares[squareIdBeingDragged].style.backgroundImage = colorBeingDragged



     
//Drop candies once some have been cleared
function moveDown(){
    for (i = 0; i < 55; i++){
        if (squares[i + width].style.backgroundImage === ''){
            squares[i + width].style.backgroundImage = squares[i].style.backgroundImage
            squares[i].style.backgroundImage = ''
        }    
            
            const firstRow = [0, 1, 2, 3, 4, 5, 6, 7]
            const isFirstRow = firstRow.includes(i)
            if (isFirstRow && squares[i].style.backgroundImage === ''){
                let randomColor = Math.floor(Math.random() * candyColors.length)
                squares[i].style.backgroundImage = candyColors[randomColor]
            }
    }
}



//Checking for matches
    //check for row of Five
    // function checkRowForFive(){ 
    //     for (i = 0; i <= 59; i++){
    //         let rowOfFive = [i, i+1, i+2, i+3, i+4]
    //         let decidedColor = squares[i].style.backgroundImage
    //         const isBlank = squares[i].style.backgroundImage === ''
            
    //         const notValid = [4, 5, 12, 13, 22, 23, 28, 29, 36, 37, 44, 45, 52, 53]
    //         if (notValid.includes(i)) continue

    //         if(rowOfFive.every(index => squares[index].style.backgroundImage === decidedColor && !isBlank)){
    //             score += 5
    //             rowOfFive.forEach(index => {
    //                 squares[index].style.backgroundImage = ''
    //                 console.log('Row 4 works')
    //             })
    //             return true;
    //         }
    //     }
    //     return false;
    // }

    // //check for column of Five
    // function checkColumnForFive(){ 
    //     for (i = 0; i <= 47; i++){
    //         let columnOfFive = [i, i+width, i+width*2, i+width*3, i+width*4]
    //         let decidedColor = squares[i].style.backgroundImage
    //         const isBlank = squares[i].style.backgroundImage === ''
    
    //         if(columnOfFive.every(index => squares[index].style.backgroundImage === decidedColor && !isBlank)){
    //             score += 5
    //             columnOfFive.forEach(index => {
    //                 squares[index].style.backgroundImage = ''
    //                 console.log('Column 4 works')
    //             })
    //             return true;
    //         }
    //     }
    //     return false;
    // }


    //check for row of Four
    function checkRowForFour(){ 
        for (i = 0; i <= 60; i++){
            let rowOfFour = [i, i+1, i+2, i+3]
            let decidedColor = squares[i].style.backgroundImage
            const isBlank = squares[i].style.backgroundImage === ''
            
            const notValid = [5, 6, 13, 14, 23, 24, 29, 30, 37, 38, 45, 46, 53, 54]
            if (notValid.includes(i)) continue

            if(rowOfFour.every(index => squares[index].style.backgroundImage === decidedColor && !isBlank)){
                score += 4
                scoreDisplay.innerHTML = score
                rowOfFour.forEach(index => {
                    squares[index].style.backgroundImage = ''
                    console.log('Row 4 works')
                })
                return true;
            }
        }
        return false;
    }


    //check for column of Four
    function checkColumnForFour(){ 
        for (i = 0; i <= 39; i++){
            let columnOfFour = [i, i+width, i+width*2, i+width*3]
            let decidedColor = squares[i].style.backgroundImage
            const isBlank = squares[i].style.backgroundImage === ''
    
            if(columnOfFour.every(index => squares[index].style.backgroundImage === decidedColor && !isBlank)){
                score += 4
                scoreDisplay.innerHTML = score
                columnOfFour.forEach(index => {
                    squares[index].style.backgroundImage = ''
                    console.log('Column 4 works')
                })
                return true;
            }
        }
        return false;
    }


    //check for row of Three
    function checkRowForThree(){ 
        for (i = 0; i <= 61; i++){
            let rowOfThree = [i, i+1, i+2]
            let decidedColor = squares[i].style.backgroundImage
            const isBlank = squares[i].style.backgroundImage === ''

            const notValid = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55]
            if (notValid.includes(i)) continue

            if(rowOfThree.every(index => squares[index].style.backgroundImage === decidedColor && !isBlank)){
                score += 3
                scoreDisplay.innerHTML = score
                rowOfThree.forEach(index => {
                    squares[index].style.backgroundImage = ''
                    console.log('Row 3 works')
                })
                return true;
            }
        }
        return false;
    }


    //check for column of Three
    function checkColumnForThree(){ 
        for (i = 0; i <= 47; i++){
            let columnOfThree = [i, i+width, i+width*2]
            let decidedColor = squares[i].style.backgroundImage
            const isBlank = squares[i].style.backgroundImage === ''
    
            if(columnOfThree.every(index => squares[index].style.backgroundImage === decidedColor && !isBlank)){
                score += 3
                scoreDisplay.innerHTML = score
                columnOfThree.forEach(index => {
                    squares[index].style.backgroundImage = ''
                    console.log('Column 3 works')
                })
                return true;
            }
        }
        return false;
    }


//Refresh loop
    // window.setInterval(function(){
    //     if (squares.some(tile => tile.style.backgroundImage === '')) {
    //         moveDown()
    //     } else {
    //         checkRowForFour()
    //         checkColumnForFour()
    //         checkRowForThree()
    //         checkColumnForThree()
    //         }
    // }, 100)


}

})

