function digitalClock() {
    let dateFunction = new Date();
    let day = dateFunction.getDay();
    let hours = dateFunction.getHours();
    let minutes = dateFunction.getMinutes();
    let seconds = dateFunction.getSeconds();
    let timeFormat = 'AM';
    const is24Hour = document.getElementById('toggleFormat').checked;

    if (!is24Hour) {
        timeFormat = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
    }
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    document.querySelector('.hours').innerHTML = hours;
    document.querySelector('.minutes').innerHTML = minutes;
    document.querySelector('.seconds').innerHTML = seconds;
    document.querySelector('.format').innerHTML = is24Hour ? '' : timeFormat;

    let weekdays = document.querySelectorAll('.weekdays span');
    weekdays.forEach(span => span.classList.remove('active'));
    weekdays[day].classList.add('active');

    let dateStr = dateFunction.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    document.querySelector('.dateDisplay .date').innerHTML = dateStr;
}

setInterval(digitalClock, 1000);

document.getElementById('toggleFormat').addEventListener('change', digitalClock);
