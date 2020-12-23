$(document).ready(function(){
    let mode = 0;
    let timeCounter = 0;
    let lapCounter = 0;
    let action;
    let lapNumber = 0;
    let timeMinutes, timeSeconds, timeCentiseconds,
    lapMinutes, lapSeconds,lapCentiseconds;
    
    hideShowButton("#startButton", "#lapButton");
    //clicking start button
    $("#startButton").click(function(){
         mode = 1;
         hideShowButton("#stopButton", "#lapButton");
         startAction();
    });
    // clicking stop button
    $("#stopButton").click(function(){
        hideShowButton("#resumeButton", "#resetButton");
        clearInterval(action);

    });
    // click resume button
    $("#resumeButton").click(function(){
        hideShowButton("#stopButton", "#lapButton");
        startAction();
    });
    //click reset button
    $("#resetButton").click(function(){
        location.reload();
    })
    // click lap
    $("#lapButton").click(function(){
        if(mode) {
            clearInterval(action);
            lapCounter = 0;
            addlap();
            startAction();
        }
    })
    function hideShowButton(x, y){
        $(".control").hide();
        $(x).show();
        $(y).show();
    }

    // start action function goes here
    function startAction(){
        action = setInterval(function(){
            timeCounter++;
            if(timeCounter === 600000) timeCounter = 0;
            lapCounter++;
            if(lapCounter===600000) lapCounter = 0;
            updateTime();
        },10);
    }
    // updateTime
    function updateTime(){
        timeMinutes = Math.floor(timeCounter / 6000);
        timeSeconds = Math.floor((timeCounter % 6000) / 100);
        timeCentiseconds = (timeCounter % 6000) % 100;
        $("#timeminute").text(toDoubleDigit(timeMinutes));
        $("#timesecond").text(toDoubleDigit(timeSeconds));
        $("#timecentisecond").text(toDoubleDigit(timeCentiseconds));

        lapMinutes = Math.floor(lapCounter / 6000);
        lapSeconds = Math.floor((lapCounter % 6000) / 100);
        lapCentiseconds = (lapCounter % 6000) % 100;
        $("#lapminute").text(toDoubleDigit(lapMinutes));
        $("#lapsecond").text(toDoubleDigit(lapSeconds));
        $("#lapcentisecond").text(toDoubleDigit(lapCentiseconds));       
}
// Formating the time to be displayed
  function toDoubleDigit(x){
      return x < 10? ("0" + x): x;
  }
//Adding a lap function
function addlap(){
   lapNumber++;
   let myLapInfo ='<div class="lap">'+
   '<div class="laptimetitle">'+
       'Lap'+ lapNumber +
   '</div>'+
   '<div class="laptime">'+
       '<span>'+ toDoubleDigit(lapMinutes) +'</span>'+
       ':<span>'+ toDoubleDigit(lapSeconds) +'</span>'+
       ':<span>'+ toDoubleDigit(lapCentiseconds) +'</span>'+
   '</div>'+
'</div>';
   $(myLapInfo).prependTo("#laps");
}

});
function openNav(){
    document.getElementById("myNav").style.width = "100%";
}
function closeNav(){
    document.getElementById("myNav").style.width="0%";
}