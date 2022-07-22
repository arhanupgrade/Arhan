function rollDice()
{
  var randomNumber1 = Math.round(Math.random()*5) + 1;
  var randomNumber2 = Math.round(Math.random()*5) + 1;

  document.querySelector(".img1").src="dice"+randomNumber1+".png";
  document.querySelector(".img2").src="dice"+randomNumber2+".png";

  if(randomNumber1 > randomNumber2)
  {
    document.querySelector("h1").innerHTML="Player 1 Wins!!";
  }
  else if(randomNumber1 < randomNumber2)
  {
    document.querySelector("h1").innerHTML="Player 2 Wins!!";
  }
  else
  {
    document.querySelector("h1").innerHTML="Draw!!";
  }

}
