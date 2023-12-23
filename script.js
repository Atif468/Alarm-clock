let hour;
let minute;
function showtime() {
    let d = new Date();
    hour = d.getHours();
    minute = d.getMinutes();
    let second = d.getSeconds();

    if (hour < 10) {
        hour = '0' + hour;
    }
    if (minute < 10) {
        minute = '0' + minute;
    }
    if (second < 10) {
        second = '0' + second;
    }
    if (hour <= 12) {
        document.getElementById("ampm").innerText = "AM";
    }
    else {
        document.getElementById("ampm").innerText = "PM";

    }
    if (hour == 12) {
        hour = "00";
    }
    if (hour > 12) {
        hour = "0" + (hour - 12);
    }

    document.getElementById('hour').innerText = hour;
    document.getElementById('minute').innerText = minute;
    document.getElementById('second').innerText = second;

    setInterval(showtime, 1000);
}
var v;
function alarm() {
    let h = prompt("Enter the hour for alarm");
    let m = prompt("Enter the minute for alarm");


    if (h == hour && m == minute) {

        v = new Audio('Alarm.mp3');
        v.play();
    }

}
function pause() {
    v.pause();
    var i = 0;
    var txt = 'Your alarm has been stopped';
    var speed = 50;

    function showText() {
        if (i < txt.length) {
            document.getElementById('text').innerHTML += txt.charAt(i);
            i++;
            setTimeout(showText, speed);
        }
    }
    showText();
    function remove() {
        document.getElementById('text').innerHTML = "";
    }
    setTimeout(remove, 5000);


}
