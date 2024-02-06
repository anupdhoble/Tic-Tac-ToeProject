console.log("Welcome to tic tac toe");
let music = new Audio("music.mp3");
let ting = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let gameovers=false;

//Function to change turn
const changeTurn=()=>{
    return turn === "X"?"0":"X"
}

//Function to check for win
const checkWin = ()=>{
    let boxtexts= document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e=>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText!=="")){
            document.querySelector('.info').innerText=boxtexts[e[0]].innerText + " Won!!!"
            gameovers=true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
        }
    })
}

//Game Logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext= element.querySelector('.boxtext'); //
    element.addEventListener('click',(e)=>{
    if(boxtext.innerText===''){
        boxtext.innerText = turn;
        turn=changeTurn();
        ting.play();
        checkWin();
        if(!gameovers){
       document.getElementsByClassName("info")[0].innerText="Turn For "+turn;}
    }
})
})


//reset button
reset.addEventListener('click',()=>{
    let boxtext1=document.querySelectorAll('.boxtext');
    Array.from(boxtext1).forEach(element=>{
        element.innerText=""
    });
    turn="X";
    gameovers=false;
    document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
})

