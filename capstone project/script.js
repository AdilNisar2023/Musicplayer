let a = document.querySelector(".w");
a.addEventListener("click",handleclick)
var isPlaying=false;
let s = document.querySelector(".s")
s.addEventListener("click",stopPlayer)
let b=document.querySelectorAll(".card-items").length
for(i=0;i<b;i++)
{
    document.querySelectorAll(".card-items")[i].addEventListener("mouseover",()=>{
        document.querySelector(".one").style.visibility="visible";
    });
    document.querySelectorAll(".card-items")[i].addEventListener("mouseout",()=>{
        document.querySelector(".one").style.visibility="hidden";
    });
    
}
console.log(b)
function handleclick()
{
    var sound=new Audio('./musics/videoplayback.m4a')
    isPlaying=true;
    if(isPlaying)
    {
        sound.play();
        isPlaying=false;
    }
}
function stopPlayer()
{
   if(isPlaying)
   {
    sound.pause();
   } 
}
// function handleclick1()
// {
    
//     var sound1=new Audio('./charlie.jpg')
//     sound1.play();
// }
