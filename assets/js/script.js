// wait for dom load.
// get button for eventlisten

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked submit");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        })
    }
})

/**
 * the main game "loop", called when the scripts is first loaded
 *  and after the users's answers has been processed
 */
function runGame(){
    let num1 = Math.floor(Math.random() * 25) +1;
    let num1 = Math.floor(Math.random() * 25) +1;
}

function checkAnswer(){

}

function calculateCorrectAnswer(){

}

function incrementScore(){

}

function incrementWrongAnswer(){

}

function displayAddtionQuestion(){

}
function displaySubtractQuestion(){
    
}
function displayMultiplyQuestion(){
    
}
function displayDivideQuestion(){
    
}
