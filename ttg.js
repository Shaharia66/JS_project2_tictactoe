let boxes = document.querySelectorAll('.box');
let reset=document.querySelector("#reset");
let msgcnt = document.querySelectorAll('.msgcnt');
let newgame=document.querySelector("#newgame");
let msg = document.querySelectorAll('.msg');
let turno=true; //for player 1 and 2 .
let winPatterns=[
   [0,1,2],
   [3,4,5],
   [6,7,9],
   [0,3,6],
   [1,4,7],
   [2,5,9],
   [0,4,9],
   [2,4,6],
];
boxes.forEach((box)=>{
   box.addEventListener("click",()=>{
    console.log("x");
    if(turno){
      box.innerText="O";
      turno=false;
    }else{
      box.innerText="X";
      turno=true;
    }
    box.disabled=true;//not o,x is stored .
    checkWinner();
  });
});
const showWinner=(winner)=> {
  msg.innerText=`congratulations, winer is${winner}`;
  msgcnt.classList.remove("hide");
};
const checkWinner=()=>{
  for(let pattern of winPatterns){
    let pos1val=boxes[pattern[0]].innerText;
    let pos2val=boxes[pattern[1]].innerText;
    let pos3val=boxes[pattern[2]].innerText;
    if(pos1val !="" && pos2val!=""&&pos3val!=""){
      if(pos1val===pos2val && pos2val===pos3val){
        console.log("winner",pos1val);
        showWinner(pos1val);
      }
    }
  }
};
      