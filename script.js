let title = document.querySelector('.title');
let turn = 'X';
let squares = [];
let gameOver = false;
function win(num1,num2,num3){
    title.innerHTML=`${squares[1]} Winner`
    document.getElementById('item'+num1).style.background='#000'
    document.getElementById('item'+num2).style.background='#000'
    document.getElementById('item'+num3).style.background='#000'

    setInterval(function(){title.innerHTML += '.'},1000);
    setTimeout(function(){location.reload()},5000);
    gameOver = true
}
function winner(){
    for(let i=1;i<10; i++){
        squares[i] = document.getElementById("item"+i).innerHTML;
    }
    if(squares[1]==squares[2]&&squares[2]==squares[3]&&squares[2]!=''){
        win(1,2,3);
    }
    else if(squares[4]==squares[5]&&squares[5]==squares[6]&&squares[5]!=''){
        win(4,5,6);
    }
    else if(squares[7]==squares[8]&&squares[8]==squares[9]&&squares[8]!=''){
        win(7,8,9);
    }
    else if(squares[1]==squares[4]&&squares[4]==squares[7]&&squares[4]!=''){
        win(1,4,7)
    }
    else if(squares[2]==squares[5]&&squares[5]==squares[8]&&squares[5]!=''){
        win(2,5,8);
    }
    else if(squares[3]==squares[6]&&squares[6]==squares[9]&&squares[6]!=''){
        win(3,6,9);
    }
    else if(squares[1]==squares[5]&&squares[5]==squares[9]&&squares[5]!=''){
        win(1,5,9);
    }
    else if(squares[3]==squares[5]&&squares[5]==squares[7]&&squares[5]!=''){
        win(3,5,7);
    }
}

function game(id) {
    if (gameOver) return
    let element = document.getElementById(id);
    if (element.innerHTML === '') { 
        if (turn === 'X') {
            element.innerHTML = 'X'; 
            turn = 'O'; 
            title.innerHTML = "O's Turn";
        } else {
            element.innerHTML = 'O'; 
            turn = 'X'; 
            title.innerHTML = "X's Turn";
        }
    }
    winner();
}
