var c=1;
var sc=-1;
function callfun(atr){

sc++;
//b1.disabled=true;

var n=Math.random()*10;
n=Math.floor(n);
n=n*8/10;
n=Math.floor(n);
n++;
c=n;
var id="b"+c;


document. getElementById(atr). style. backgroundColor = '';
document. getElementById(id). style. backgroundColor = 'Red';

document.getElementById("tt").value=n;
document.getElementById("score").value=sc;
document.getElementById(id).innerHTML=n;




}
function fun()
{
alert("your score is : "+sc)
}
//Define vars to hold time values
let seconds = 10;

//Define vars to hold "display" value
let displaySeconds = 0;

//Define var to hold setInterval() function
let interval = null;

//Define var to hold stopwatch status
let status = "stopped";

//Stopwatch function (logic to determine when to increment next value, etc.)
function stopWatch(){

    seconds--;

    //Logic to determine when to increment next value
    if(seconds === 0){
startStop();
    }

    //If seconds/minutes/hours are only one digit, add a leading 0 to the value
    if(seconds < 10){
        displaySeconds = "0" + seconds.toString();
    }
    else{
        displaySeconds = seconds;
    }
    //Display updated time values to user
    document.getElementById("display").innerHTML =  displaySeconds;

}



function startStop(){

    if(status === "stopped"){

        //Start the stopwatch (by calling the setInterval() function)
        interval = window.setInterval(stopWatch, 1000);
        document.getElementById("startStop").innerHTML = "Stop";
        status = "started";

    }
    else{

        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        status = "stopped";

    }

}

//Function to reset the stopwatch
function reset(){

    window.clearInterval(interval);
    seconds = 10;
    document.getElementById("display").innerHTML = "10";
    document.getElementById("startStop").innerHTML = "Start";
}