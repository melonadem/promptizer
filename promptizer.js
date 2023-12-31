function randTime() {
    var timeInMins = Math.ceil(Math.random() * 12) * 15; //Up to 3 hours, in intervals of 15 minutes
    var timeInHrs = Math.floor(timeInMins / 60);
    var timeRemMins = timeInMins % 60;
    if (timeRemMins == 0) {
        timeRemMins = "00";
    }
    return timeInHrs + "h" + timeRemMins + "m";
}

function randColour() {
    var colRed = Math.floor(Math.random() * 256).toString(16); //we want the hex for this
    var colBlue = Math.floor(Math.random() * 256).toString(16); // same for tihs
    var colGreen = Math.floor(Math.random() * 256).toString(16); // yeah

    //The actual script will have logic to set the page background to one of the colours it generates, or a small division of it at least for accessibility.
    return "#" + "0".repeat(2 - colRed.length) + colRed
               + "0".repeat(2 - colGreen.length) + colGreen
               + "0".repeat(2 - colBlue.length) + colBlue;
}

function randTempo() {
    return Math.floor((Math.random() * 30))*5 + 50; //Effective range is 50-200, increments of 5
}

function randTimeSig(timeComplex) {
    var sigSimple = timeComplex;
    var sigNumerator = 2;
    var sigDenominator = 2;
    if (sigSimple) {
        sigNumerator = Math.ceil(Math.random() * 14) + 1; // Between 2 and 15
    }
    else {
        sigNumerator = Math.ceil(Math.random() * 31); // Between 1 and 32
    }
    sigDenominator = Math.pow(2, Math.floor(Math.random() * 4) + 1); // Between 2, 4, 8 and 16
    return sigNumerator + "/" + sigDenominator;
}

function randChord(complexity) {
    var chordKeysList = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    var chordModesList = ["", "Maj", "Min", "+", "°", "ø", "MinMaj7"];
    var chordExtList = ["", "7", "9", "11", "13"];
    var chordAddList = ["", "sus4", "sus2", "add2", "add4", "add6", "no3", "no5", "#9", "b9", "#11", "b11", "#13", "b13"]
    if (complexity == 0) {
        chordKey = chordKeysList[Math.floor(Math.random() * chordKeysList.length)];
        chordMode = chordModesList[Math.floor(Math.random() * 2) + 1];
        return chordKey + chordMode;
    }
    else if (complexity > 0 && complexity < 1) {
        var chordKey = chordKeysList[Math.floor(Math.random() * chordKeysList.length)];
        var chordMode = chordModesList[Math.floor(Math.random() * chordModesList.length)];
        var chordExt = chordExtList[Math.floor(Math.random() * chordExtList.length)];
        if (chordMode == "MinMaj7")
        {
            return chordKey + chordMode;
        }
        else
        {
            return chordKey + chordMode + chordExt;
        }
    }
    else {
        var chordKey = chordKeysList[Math.floor(Math.random() * chordKeysList.length)];
        var chordMode = chordModesList[Math.floor(Math.random() * chordModesList.length)];
        var chordExt = chordExtList[Math.floor(Math.random() * chordExtList.length)];
        var chordAdd = chordAddList[Math.floor(Math.random() * chordAddList.length)];
        if (chordMode == "MinMaj7")
        {
            return chordKey + chordMode + chordAdd;
        }
        else
        {
            return chordKey + chordMode + chordExt + chordAdd;
        }
    }
}

var emojis = [
	'😄','😃','😀','😊','☺','😉','😍','😘','😚','😗','😙','😜','😝','😛','😳','😁','😔','😌','😒','😞','😣','😢','😂','😭','😪','😥','😰','😅','😓','😩','😫','😨','😱','😠','😡','😤','😖','😆','😋','😷','😎','😴','😵','😲','😟','😦','😧','😈','👿','😮','😬','😐','😕','😯','😶','😇','😏','😑','👲','👳','👮','👷','💂','👶','👦','👧','👨','👩','👴','👵','👱','👼','👸','😺','😸','😻','😽','😼','🙀','😿','😹','😾','👹','👺','🙈','🙉','🙊','💀','👽','💩','🔥','✨','🌟','💫','💥','💢','💦','💧','💤','💨','👂','👀','👃','👅','👄','👍','👎','👌','👊','✊','✌','👋','✋','👐','👆','👇','👉','👈','🙌','🙏','☝','👏','💪','🚶','🏃','💃','👫','👪','👬','👭','💏','💑','👯','🙆','🙅','💁','🙋','💆','💇','💅','👰','🙎','🙍','🙇','🎩','👑','👒','👟','👞','👡','👠','👢','👕','👔','👚','👗','🎽','👖','👘','👙','💼','👜','👝','👛','👓','🎀','🌂','💄','💛','💙','💜','💚','❤','💔','💗','💓','💕','💖','💞','💘','💌','💋','💍','💎','👤','👥','💬','👣','💭','🐶','🐺','🐱','🐭','🐹','🐰','🐸','🐯','🐨','🐻','🐷','🐽','🐮','🐗','🐵','🐒','🐴','🐑','🐘','🐼','🐧','🐦','🐤','🐥','🐣','🐔','🐍','🐢','🐛','🐝','🐜','🐞','🐌','🐙','🐚','🐠','🐟','🐬','🐳','🐋','🐄','🐏','🐀','🐃','🐅','🐇','🐉','🐎','🐐','🐓','🐕','🐖','🐁','🐂','🐲','🐡','🐊','🐫','🐪','🐆','🐈','🐩','🐾','💐','🌸','🌷','🍀','🌹','🌻','🌺','🍁','🍃','🍂','🌿','🌾','🍄','🌵','🌴','🌲','🌳','🌰','🌱','🌼','🌐','🌞','🌝','🌚','🌑','🌒','🌓','🌔','🌕','🌖','🌗','🌘','🌜','🌛','🌙','🌍','🌎','🌏','🌋','🌌','🌠','⭐','☀','⛅','☁','⚡','☔','❄','⛄','🌀','🌁','🌈','🌊','🎍','💝','🎎','🎒','🎓','🎏','🎆','🎇','🎐','🎑','🎃','👻','🎅','🎄','🎁','🎋','🎉','🎊','🎈','🎌','🔮','🎥','📷','📹','📼','💿','📀','💽','💾','💻','📱','☎','📞','📟','📠','📡','📺','📻','🔊','🔉','🔈','🔇','🔔','🔕','📢','📣','⏳','⌛','⏰','⌚','🔓','🔒','🔏','🔐','🔑','🔎','💡','🔦','🔆','🔅','🔌','🔋','🔍','🛁','🛀','🚿','🚽','🔧','🔩','🔨','🚪','🚬','💣','🔫','🔪','💊','💉','💰','💴','💵','💷','💶','💳','💸','📲','📧','📥','📤','✉','📩','📨','📯','📫','📪','📬','📭','📮','📦','📝','📄','📃','📑','📊','📈','📉','📜','📋','📅','📆','📇','📁','📂','✂','📌','📎','✒','✏','📏','📐','📕','📗','📘','📙','📓','📔','📒','📚','📖','🔖','📛','🔬','🔭','📰','🎨','🎬','🎤','🎧','🎼','🎵','🎶','🎹','🎻','🎺','🎷','🎸','👾','🎮','🃏','🎴','🀄','🎲','🎯','🏈','🏀','⚽','⚾','🎾','🎱','🏉','🎳','⛳','🚵','🚴','🏁','🏇','🏆','🎿','🏂','🏊','🏄','🎣','☕','🍵','🍶','🍼','🍺','🍻','🍸','🍹','🍷','🍴','🍕','🍔','🍟','🍗','🍖','🍝','🍛','🍤','🍱','🍣','🍥','🍙','🍘','🍚','🍜','🍲','🍢','🍡','🍳','🍞','🍩','🍮','🍦','🍨','🍧','🎂','🍰','🍪','🍫','🍬','🍭','🍯','🍎','🍏','🍊','🍋','🍒','🍇','🍉','🍓','🍑','🍈','🍌','🍐','🍍','🍠','🍆','🍅','🌽','🏠','🏡','🏫','🏢','🏣','🏥','🏦','🏪','🏩','🏨','💒','⛪','🏬','🏤','🌇','🌆','🏯','🏰','⛺','🏭','🗼','🗾','🗻','🌄','🌅','🌃','🗽','🌉','🎠','🎡','⛲','🎢','🚢','⛵','🚤','🚣','⚓','🚀','✈','💺','🚁','🚂','🚊','🚉','🚞','🚆','🚄','🚅','🚈','🚇','🚝','🚋','🚃','🚎','🚌','🚍','🚙','🚘','🚗','🚕','🚖','🚛','🚚','🚨','🚓','🚔','🚒','🚑','🚐','🚲','🚡','🚟','🚠','🚜','💈','🚏','🎫','🚦','🚥','⚠','🚧','🔰','⛽','🏮','🎰','♨','🗿','🎪','🎭','📍','🚩','⬆','⬇','⬅','➡','🔠','🔡','🔤','↗','↖','↘','↙','↔','↕','🔄','◀','▶','🔼','🔽','↩','↪','ℹ','⏪','⏩','⏫','⏬','⤵','⤴','🆗','🔀','🔁','🔂','🆕','🆙','🆒','🆓','🆖','📶','🎦','🈁','🈯','🈳','🈵','🈴','🈲','🉐','🈹','🈺','🈶','🈚','🚻','🚹','🚺','🚼','🚾','🚰','🚮','🅿','♿','🚭','🈷','🈸','🈂','Ⓜ','🛂','🛄','🛅','🛃','🉑','㊙','㊗','🆑','🆘','🆔','🚫','🔞','📵','🚯','🚱','🚳','🚷','🚸','⛔','✳','❇','❎','✅','✴','💟','🆚','📳','📴','🅰','🅱','🆎','🅾','💠','➿','♻','♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓','⛎','🔯','🏧','💹','💲','💱','©','®','™','〽','〰','🔝','🔚','🔙','🔛','🔜','❌','⭕','❗','❓','❕','❔','🔃','🕛','🕧','🕐','🕜','🕑','🕝','🕒','🕞','🕓','🕟','🕔','🕠','🕕','🕖','🕗','🕘','🕙','🕚','🕡','🕢','🕣','🕤','🕥','🕦','✖','➕','➖','➗','♠','♥','♣','♦','💮','💯','✔','☑','🔘','🔗','➰','🔱','🔲','🔳','◼','◻','◾','◽','▪','▫','🔺','⬜','⬛','⚫','⚪','🔴','🔵','🔻','🔶','🔷','🔸','🔹'
];

function displayEmoji(){
    var emojiloops = 3;
    document.getElementById("emoji").innerHTML="";
    for (i = 0; i < emojiloops; i++) {
        var random = Math.floor(Math.random() * emojis.length);
        var emoji = emojis[random];
        document.getElementById("emoji").innerHTML = document.getElementById("emoji").innerHTML + emoji ;
    }
}

function displayChords(comp) {
    var chordloops = 8;
    document.getElementById("chords").innerHTML = "";
    for (j = 0; j < chordloops; j++) {
        document.getElementById("chords").innerHTML = document.getElementById("chords").innerHTML + randChord(comp) + ", ";
    }
}

function displayColour() {
    document.body.style.backgroundColor = randColour();
}

function displayTempo() {
    document.getElementById("tempo").innerHTML = randTempo() + " BPM";
}

function displayTimeSig(c) {
    document.getElementById("timesig").innerHTML = randTimeSig(c);
}

function displayTime() {
    document.getElementById("timelimit").innerHTML = "You have " + randTime() + ". Get crackin!";
}
