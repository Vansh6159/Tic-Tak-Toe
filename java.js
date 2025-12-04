let boxes= document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let msgwinner=document.querySelector(".msgwinner");
let msg=document.querySelector("#msg");

let turnO= true
const winPattern=[
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
];
const resetgame =() => {
turnO= true
enablebutton();
msgwinner.classList.add("hide");
};
boxes.forEach((box)=> {
box.addEventListener("click",()=>{
console.log("box was clicked");
if (turnO){
box.innerText="O";
turnO=false;
}
else{
    box.innerText="X";
    turnO=true;
};
box.disabled=true;
checkWinner();
 });
});
const disablebutton=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enablebutton=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showwinner= (winner) =>{
    msg.innerText = `winner is ${winner}`;

    msgwinner.classList.remove("hide");
    disablebutton();
};
const checkWinner = () =>{
    for (let position of winPattern){
        let P1=boxes[position[0]].innerText;
        let P2=boxes[position[1]].innerText;
        let P3=boxes[position[2]].innerText;
    if(P1!=""&&P2!=""&&P3!=""){
        if(P1===P2 && P2===P3){
            console.log("winner",P1);
            showwinner(P1);
        }
   
    }
        
    }
    

    
};
resetBtn.addEventListener("click",resetgame);