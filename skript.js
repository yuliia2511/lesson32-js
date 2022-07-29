document.querySelector('.first_btn').onclick = findCommonTime

function findCommonTime() {
    const date = new Date();
    document.querySelector('.answer1').innerHTML = new Date().toLocaleTimeString();
}



//не работает, отдает другое время

document.querySelector('.second_btn').onclick = findCommonSecond

function findCommonSecond() {
    let sec = document.querySelector('.second').value;
    let d = (new Date()).getTime();
    let someSecondsLater = new Date(d + sec * 1000);
    
    document.querySelector('.answer2').innerHTML = someSecondsLater;
}



document.querySelector('.third_btn').onclick = findCommonMinute

function findCommonMinute() {
    let min = document.querySelector('.minute').value;
    let m = (new Date()).getTime();
    let someMinutesLater = new Date(m + min * 60 * 1000);
    
    document.querySelector('.answer3').innerHTML = someMinutesLater;
}



document.querySelector('.forth_btn').onclick = findCommonHour

function findCommonHour() {
    let commonHour = document.querySelector('.hour').value;
    let h = (new Date()).getTime();
    let someHoursLater = new Date(h + commonHour * 60 * 60 * 1000);
    
    document.querySelector('.answer4').innerHTML = someHoursLater;
}


