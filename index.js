for(var i=0; i<document.querySelectorAll(".drum").length; i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
  var btn = this.innerHTML;
  makeSound(btn);
  btnAnim(btn);
  });
}

document.addEventListener("keydown", function(ev){
  makeSound(ev.key);
  btnAnim(ev.key);
});


function makeSound(keypressed)
{
  switch (keypressed)
  {
    case "w":
    case "W":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

      case "a":
      case "A":
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
        break;

      case "s":
      case "S":
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        break;

      case "d":
      case "D":
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        break;

      case "j":
      case "J":
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
        break;

      case "k":
      case "K":
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
        break;

      case "l":
      case "L":
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;

    default:
        break;
  }
}

function btnAnim(key)
{
  var activebtn = document.querySelector("."+key);
  console.log(activebtn);
  activebtn.classList.add("pressed");
  setTimeout(function(){activebtn.classList.remove("pressed")}, 100);
}
