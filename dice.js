// Sets the value of the dice
var dice = {
    sides: 6,
    roll: function() {
        var num = Math.floor(Math.random() * this.sides) + 1;
        return num;
    }
}

// Prints dice roll
function display(num0, num1) {
    var placeholder0 = document.getElementById("placeholder0");
    placeholder0.innerHTML = num0;
    var placeholder1 = document.getElementById("placeholder1");
    placeholder1.innerHTML = num1;
    var placeholder2 = document.getElementById("placeholder2");
    placeholder2.innerHTML = num0 + num1;
}

// Button that prints two dice rolls and their sum
var button = document.getElementById("button");

button.onclick = function() {
    var result0 = dice.roll();
    var result1 = dice.roll();
    display(result0, result1);
}