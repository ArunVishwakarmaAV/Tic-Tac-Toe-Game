let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn0 = true;
let count=0;
const win =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
    ];
boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turn0){
            box.style.color="#b0413e";;
            box.innerHTML="O";
            turn0=false;
            count++;
        }
        else{
            box.style.color="#32196c";
            box.innerHTML="X";
            turn0=true;   
            count++;         
        }
        box.disabled=true;
        if (count === 9){
            msg.innerHTML= `Draw`;
            msgcontainer.classList.remove("hide");
        }
        checkwinner();
    });
});
const disableboxes = () =>{
    for(let b of boxes){
        b.disabled=true;
    }
};
const showwinner =(winner) => {
    msg.innerHTML= `Congratulations! The winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};
const checkwinner = () => {
    for(let pattern of win){
        let val1=boxes[pattern[0]].innerHTML;
        let val2=boxes[pattern[1]].innerHTML;
        let val3=boxes[pattern[2]].innerHTML;
        if (val1 !="" && val2 !="" && val3 !="" && val1==val2 && val2==val3){
            showwinner(val1);
        }
}
};
const enableboxes = () =>{
    for(let b of boxes){
        b.disabled=false;
        b.innerHTML="";
    }
};
const reset= () =>{
    turn0=true;
    enableboxes();
    msgcontainer.classList.add("hide");
};
newbtn.addEventListener("click",reset);
resetbtn.addEventListener("click",reset);