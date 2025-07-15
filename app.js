function timer(){
let date = new Date();
let time = date.toLocaleTimeString();
document.getElementById('data').innerHTML=time;
setTimeout(timer , 1000)
}
timer()
