//initialize sounds for soundboard
let SOUNDBOARD = {
    og_meow_1 : new Audio("sounds/og_meow_1.m4a")
}


const playEffect = (soundboard_option) => {
    SOUNDBOARD[soundboard_option].play();
}