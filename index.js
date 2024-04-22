var numOfButtons = document.querySelectorAll(".drum").length;

for(i = 0;i<numOfButtons;i++){

document.querySelectorAll("button")[i].addEventListener("click", function (){

    var buttonPressed = this.innerHTML;
    keyPres(buttonPressed);
    animateButton(buttonPressed);

}); // for click operations need to trigger we need to add event listener to all the elements present
}

document.addEventListener("keydown",function(sam){

    keyPres(sam.key);
    animateButton(sam.key);

})// for keypress(keydown) we can take document and from that we can filter/figure out based on add event listener

function keyPres(event){

    switch(event){
        case 'w' :
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;

        case 'a' :
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case 's' :
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case 'd' :
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case 'j' :
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case 'k' :
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case 'l' :
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        default:
            alert('Invalid Key Pressed');
    }

}


function animateButton(key){
   var cssClass = document.querySelector("."+key);
   cssClass.classList.add("pressed");

   setTimeout(function(){
    cssClass.classList.remove("pressed");
   },100);
}