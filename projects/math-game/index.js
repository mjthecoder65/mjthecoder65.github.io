var playing = false;
var score;
var action;
var correctAnswer;
var timeleft;

document.getElementById("startreset").onclick = function(){
    //if we playing
    if(playing === true){
        location.reload();
        playing = false;
    }else{ // if we are not playing
        score = 0;
        timeleft = 10;
        playing = true;
        // Hiding the game over message
            hide("gameover");
        // updating the score value
        document.getElementById("scorevalue").innerHTML = score;

        // showing time board
        show("timeleft");
        document.getElementById("startreset").innerHTML = "Reset Game"
        document.getElementById("startreset").style.backgroundColor= "red"
        document.getElementById("timeleftvalue").innerHTML = timeleft;
        // Start countdown
        startCountDown();

        // Generating a new Q & A
        generateQA();

    }
}

// Accessing answer boxes
for(var i=1;i <5 ;i++){
    document.getElementById("box"+i).onclick = function(){
        if(playing == true){
            if(this.innerHTML == correctAnswer){
                //correct
                score++;
                document.getElementById("scorevalue").innerHTML = score;
                show("correct");
                hide("wrong");
                setTimeout(function(){
                     hide("correct");
                },1000);
                // Generate new question
                timeleft = 3;
                generateQA();
            }else{
                hide("correct");
                show("wrong");
                setTimeout(function(){
                    hide("wrong");
                }, 1000);
            }
        }
    }
}

// Start the count down
function startCountDown(){
     action = setInterval(function(){
        timeleft--;
        document.getElementById("timeleftvalue").innerHTML = timeleft;
        if(timeleft == 0){ // Game over

            // Stop the countdown
            stopCountDown();
            // Showing game over message
              show("gameover");
            // Updating the score board
            document.getElementById("finalscore").innerHTML = "YOUR SCORE IS " + score;
            // Hide time board
            hide("timeleft");
            // Hiding the correct message
            hide("correct");
            // Hiding the try again message
            hide("wrong");
            //playing = false;
            document.getElementById("startreset").innerHTML = "Start Game";
            document.getElementById("startreset").style.backgroundColor= "seagreen";


        }
     }, 1000);
}
// Stop the counter
function stopCountDown(){
    clearInterval(action);
}
// Show an element
function show(id){
    document.getElementById(id).style.display = "block";
}
// Hide an element
function hide(id){
    document.getElementById(id).style.display = "none";
}
// Generate question and answers
function generateQA(){
    var x = Math.floor(Math.random() * 11) + 1;
    var y = Math.floor(Math.random() * 11) + 1;
    correctAnswer = x * y;
    // Displaying answer on the screen
    document.getElementById("question").innerHTML = x + " x " + y + " = ?";
    var correctPosition = Math.floor(Math.random() * 3) + 1;
    // Displaying correct answer
    document.getElementById("box"+ correctPosition).innerHTML = correctAnswer;
    // Other box
    var answers = [correctAnswer];
    for(var i= 1;i <=4;i++){
        if(i != correctPosition){
            var wrongAnswer;
            do{
                 wrongAnswer = (Math.floor(Math.random() * 11) + 1)  *
                (Math.floor(Math.random() * 11) + 1);
            }while(answers.indexOf(wrongAnswer) > -1)
        answers.push(wrongAnswer);
         document.getElementById("box" + i).innerHTML = wrongAnswer;
        }
    }
}
