const endDate = new Date("17 july, 2025 14:47:00").getTime();
const startDate = new Date().getTime();



const x = setInterval(function updateTimer(){
    
    const now = new Date().getTime();

    const distanceCovered = now - startDate;
    const distancePending = endDate - now; 

    // calculate days,hrs,min,sec

    const oneDayInMillis = (24*60*60*1000);
    const oneHoursInMillis = (60*60*1000);
    const oneMinutesInMillis = (60*1000);
    const onesecondsInMillis = (1000);

    const days = Math.floor(distancePending / (oneDayInMillis));
    const hrs = Math.floor((distancePending%(oneDayInMillis)) / (oneHoursInMillis));
    const mins = Math.floor((distancePending%(oneHoursInMillis)) / (oneMinutesInMillis));
    const secs = Math.floor((distancePending%(oneMinutesInMillis)) / ( onesecondsInMillis));

    // populate in UI 

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = mins;
    document.getElementById("seconds").innerHTML = secs;

    // calculate width percentage for progess bar 

    const totalDistance = endDate - startDate;
    const percentageDistance = (distanceCovered/totalDistance)*100;

    // set width for percentage bar 

    document.getElementById("progress-bar").style.width = percentageDistance + "%";

    if (distancePending < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
    document.getElementById("progress-bar").style.width = "100%";
}

}, 1000);