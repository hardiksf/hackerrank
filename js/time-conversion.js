function timeConversion(s) {
    const indexBeforeAmPm = s.length - 2;
    const amPm = s.substring(indexBeforeAmPm);
    let hours = s.substring(0, 2);
    const minutes = s.substring(3, 5);
    const seconds = s.substring(6, 8);
    if (amPm === "PM" && hours !== "12") {
        hours = parseInt(hours) + 12;
    }
    if (amPm === "AM" && hours === "12") {
        hours = parseInt(hours) - 12;
        hours = hours.toString() + 0;
    }
    return `${hours}:${minutes}:${seconds}`;
}

console.log(timeConversion("12:05:45PM"));