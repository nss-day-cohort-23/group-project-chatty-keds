"use strict";

const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const getReadableTime = timestamp => {
    let date = new Date(timestamp*1000);    

    let hours = date.getHours();
    let m = " am";
    if (hours > 12) {
        m = " pm";
        hours %= 12;
    }

    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let day = date.getDay();
    let now = new Date(Date.now());
    let today = now.getDay();
    if (day != today) {
        day = `${week[day]}, `;
    } else {
        day = "";
    }
    return `${day+hours}:${minutes+m}`;
};

module.exports = {getReadableTime};