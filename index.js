let input=document.getElementById("input");
let start=document.getElementById("start");
let pause=document.getElementById("pause");
let restart=document.getElementById("restart");

let costum_interval=null;
let count=null;

start.addEventListener("click",()=>{
    if (count === null) {
    count = Number(input.value);
}
    costum_interval=setInterval(()=>{
         if(count!==0){
         console.log(count);   
         count--;
       }else{
        console.log("FINISHED")
        clearInterval(costum_interval);
       }
    },1000);
});


pause.addEventListener("click",()=>{

    console.log("PAUSED");
    clearInterval(costum_interval);
    costum_interval=null
});


restart.addEventListener("click",()=>{
    clearInterval(costum_interval);
    count=null;
    costum_interval=null;
    input.value="";
});