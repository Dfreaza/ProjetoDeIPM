function HoverMusic(){
    var goal = document.querySelector(".goal-0");
    goal.addEventListener("mouseover", eventPlayMusic);
    goal.addEventListener("mouseout", eventStopMusic);
    sessionStorage.setItem("oldElement", goal.id);
}

const eventPlayMusic = () => {
    playMusic("audioHover");
}

const eventStopMusic = () => {
    stopMusic("audioHover");
}

function playMusic(audio_id){
    var music = document.getElementById(audio_id);
    music.currentTime = 0;
    music.play();
}

function stopMusic(audio_id){
    var music = document.getElementById(audio_id);
    music.pause();
}


/**
 * Code that executes when a click happens inside the grid.
 *
 * @param interaction An object that describes the user interaction that just
 * occurred. It contains the following fields:
 * - x: The X coordinate of the click
 * - y: The Y coordinate of the click
 * - target: The DOM node that received the click.
 * - class: This string is either 'goal-0' if the user clicked the current
 *          target, 'goal-1' if they clicked the next target, 'goal-2' if they
 *          clicked the one following that, or else the empty string
 * - distance: The distance between the click and the center of the current
 *   target
 * - elapsed: The time elapsed since the previous click
 * - type: The type of click, either 'success', 'failure' or 'mistake'
 *
 * Notice that the X and Y coordinates are with regard to the grid. Thus, (0, 0)
 * is the top left corner of the grid.
 */
function processClick(interaction) {
    HoverMusic();
}

/**
 * Code that executes when the sequence ends (the user has clicked he last
 * target)
 *
 * @param performance An object that describes the performance of the user. It
 * contains the following fields:
 * - age: The age of the user, which was given by them at the start of the
 *   exercise
 * - elapsed: The total time since the user was shown the first target
 * - successes: The number of successful clicks
 * - failures: The number of failed clicks (on wrong targets)
 * - mistakes: The number of clicks inside the grid but outside any target
 * - interactions: An array with the interactions made by the user.
 *
 * For a description of an interaction, see the documentation of the
 * `processClick` function
 */
function processEnd(performance) {
}

document.addEventListener('DOMContentLoaded', () => {
    var start = document.querySelector('button[type="submit"]');
    var again = document.getElementById("results").querySelector('button');

    var hover = document.createElement("p");
    hover.id = "hovermusic";
    document.body.appendChild(hover);
    document.getElementById("hovermusic").innerHTML = '<audio id="audioHover" src="https://www.ee.columbia.edu/~dpwe/sounds/instruments/piano-C4.wav">';
    
    start.addEventListener("click", delay);
    again.addEventListener("click", delay);
    
    function delay(){
        setTimeout(blinkAfterStart, 50);
        setTimeout(HoverMusic, 50);
    }
    
    function blinkAfterStart(){
        var goal2 = document.querySelector(".goal-0");
        goal2.addEventListener('click', removeBlink);

        var pos = document.querySelector(".goal-0");
        pos.classList.add("blinking");

        function removeBlink(){
            pos.classList.remove("bliking");
        }
    }
});