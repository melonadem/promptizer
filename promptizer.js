function randTime() {
    timeInMins = Math.ceil(Math.random() * 12) * 15; //Up to 3 hours, in intervals of 15 minutes
    timeInHrs = Math.floor(timeInMins / 60);
    timeRemMins = timeInMins % 60;
    if (timeRemMins == 0) {
        timeRemMins = "00";
    }
    return timeInHrs + ":" + timeRemMins;
}

function randColour() {
    colRed = Math.floor(Math.random() * 256).toString(16); //we want the hex for this
    colBlue = Math.floor(Math.random() * 256).toString(16); // same for tihs
    colGreen = Math.floor(Math.random() * 256).toString(16); // yeah

    //The actual script will have logic to set the page background to one of the colours it generates, or a small division of it at least for accessibility.
    return "#" + colRed + colGreen + colBlue;
}
