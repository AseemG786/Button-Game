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