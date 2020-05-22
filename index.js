
var length=document.querySelectorAll(".drum").length;
for(var i=0;i<length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
var ch=this.innerHTML;
var audio;
playsound(ch);
animation(ch);
});
}

document.addEventListener("keydown",function(ev){
    playsound(ev.key);
    animation(ev.key);
});
function playsound(ch){
    switch(ch){
        case "w": audio=new Audio("sounds/crash.mp3");
                 audio.play();
                 break;
        case "a": audio=new Audio("sounds/snare.mp3");
                 audio.play();
                 break;
        case "d": audio=new Audio("sounds/kick-bass.mp3");
                 audio.play();
                 break;
        case "l": audio=new Audio("sounds/tom-1.mp3");
                 audio.play();
                 break;
        case "s": audio=new Audio("sounds/tom-2.mp3");
                 audio.play();
                 break;
        case "k": audio=new Audio("sounds/tom-3.mp3");
                 audio.play();
                 break;
        case "j": audio=new Audio("sounds/tom-4.mp3");
                 audio.play();
                 break;
        
        default:alert("cannot play !");         
        }
}
function animation(event){
    var tapped=document.querySelector("."+event);
     tapped.classList.add("pressed");
     setTimeout(function(){ tapped.classList.remove("pressed");},100);

}
