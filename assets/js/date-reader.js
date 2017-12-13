"use strict";

const getReadableTime = timestamp => {
    let date = new Date(timestamp*1000);    
    let timeZone = x.getTimezoneOffset() / 60;
    return date.getHours();
};

module.exports = {getReadableTime};