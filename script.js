//initialize sounds for soundboard
let SOUNDBOARD = {
    "Happy" : "meow (6).m4a",
    "The Ambush" : "ambush.m4a",
    "Daddy Landlord" : "daddy_landlord.m4a",
    "Lemonless Lemonade" : "no_lemon.m4a",
    "Standard" : "meow (8).m4a",
    "Monkey (Very straight)" : "straight_monkey.m4a",
    "Angry" : "meow (3).m4a",
    "Gay Bars™" : "gay_bars.m4a",
    "Fustrated" : "meow (1).m4a",
    "The Big Announcement" : "the_big_announcement",
    "Leftovers" : "leftovers.m4a",
    "Disappointment" : "meow (2).m4a",
    "Chickfla Sauce" : "chickfla_sauce.m4a",
    "Defensive" : "meow (7).m4a",
    "Glutenburg" : "glutenburg.m4a",
    "cuck screaming" : "cuck_scream.m4a"
}


const playEffect = (sound_file) => {
    const effect = new Audio(sound_file);
    effect.play();
}



const main = () => {
    const soundboard_node = document.getElementById("soundboard_primary");
    const soundboard_keys = Object.keys(SOUNDBOARD);
    const soundboard_size = soundboard_keys.length;
    for (i=0; i<soundboard_size; i++){
        const new_soundboard_btn = document.createElement("BUTTON");
        new_soundboard_btn.className = 'soundboard-button';
        const key = soundboard_keys[i];
        new_soundboard_btn.innerHTML = key;
        new_soundboard_btn.addEventListener('click', () => {
            playEffect(`sounds/${SOUNDBOARD[key]}`);
        });
        soundboard_node.appendChild(new_soundboard_btn);

    }
}

main();