let clockDigital = document.querySelector('.digital');
let clockSecond = document.querySelector('.p_s')
let clockMinute = document.querySelector('.p_m')
let clockHour = document.querySelector('.p_h')

function updateClock() {
    let nowDate = new Date();
    let hour = nowDate.getHours();
    let minute = nowDate.getMinutes();
    let second = nowDate.getSeconds();

    clockDigital.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`

    let secondDeg = ((360 / 60) * second) - 90;
    let minuteDeg = ((360 / 60) * minute) - 90;
    let hourDeg = ((360 / 12) * hour) - 90;

    clockSecond.style.transform = `rotate(${secondDeg}deg)`;
    clockMinute.style.transform = `rotate(${minuteDeg}deg)`;
    clockHour.style.transform = `rotate(${hourDeg}deg)`
}

function fixZero(time) {
    return time < 10 ? `0${time}` : time;
}

setInterval(updateClock, 1000);
updateClock();