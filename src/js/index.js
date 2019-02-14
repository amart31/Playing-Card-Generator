import "bootstrap"; //breathecode dom for more explicit errors
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = () => {
  //loads on click of the button & displays same suit//
  document.querySelector("button").addEventListener("click", () => {
    var x = document.querySelector("#topsuit");
    var y = document.querySelector("#bottomsuit");
    var suit = cardSuit();
    x.innerHTML = suit;
    y.innerHTML = suit;

    //boolean function to assign red/black based on suit//
    if (suit === "\u2665") {
      document.body.style.color = "red";
    } else if (suit === "\u2666") {
      document.body.style.color = "red";
    } else {
      document.body.style.color = "black";
    }
    document.querySelector("#cardvalue").innerHTML = cardValue();
  });

  //generate a random integer to be called later //
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  //Generates a random suit for the cards//
  let cardSuit = () => {
    let suits = ["\u2665", "\u2666", "\u2663", "\u2660"];
    return suits[getRndInteger(0, 4)];
  };
  //Generates a random value for the cards//
  let cardValue = () => {
    let value = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A"
    ];
    return value[getRndInteger(0, 13)];
  };
};
