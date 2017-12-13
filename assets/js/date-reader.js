"use strict";

const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const getReadableTime = timestamp => {
    let date = new Date(timestamp);

    let hours = date.getHours();
    let m = " am";
    if (hours == 0) {
        hours = 12;
    } else if (hours > 11) {
        m = " pm";
    }
    if (hours > 12) {
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