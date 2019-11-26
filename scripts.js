// Write your JavaScript code here.
// Remember to pay attention to page loading!
function takeButtonClicked(event){
    console.log('take button clicked!');
    let shuttleReady = window.confirm("Confirm that the shuttle is ready for liftoff");
    if (shuttleReady){
        let flightStatus = document.getElementById('flightStatus');
        flightStatus.innerHTML = "Shuttle in Flight";
        let shuttleBackground = document.getElementById('shuttleBackground');
        shuttleBackground.style['background-color'] = "blue";
        let spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
        let height = Number(spaceShuttleHeight.innerHTML);
        height += 10000;
        spaceShuttleHeight.innerHTML = String(height);
    }

}

function landButtonClicked(event){
    console.log('land button clicked!');
    alert("The shuttle is landing. Landing gear engaged.");
    let flightStatus = document.getElementById('flightStatus');
    flightStatus.innerHTML = "The shuttle has landed";
    let shuttleBackground = document.getElementById('shuttleBackground');
    shuttleBackground.style['background-color'] = "green";
    let spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
    spaceShuttleHeight.innerHTML = '0';
}

function abortButtonClicked(event){
    console.log('abort mission clicked');
    missionAborted = window.confirm("Confirm that you want to abort the mission");
    if (missionAborted) {
        let flightStatus = document.getElementById('flightStatus');
        flightStatus.innerHTML = "Mission aborted.";
        let shuttleBackground = document.getElementById('shuttleBackground')
        shuttleBackground.style['background-color'] = "green";
        let spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
        spaceShuttleHeight.innerHTML = '0';
    }
}

function upButtonClicked(event) {
    alert('clicked');

}

function downButtonClicked(event) {
    alert('clicked');

}

function rightButtonClicked(event) {
    alert('clicked');

}

function leftButtonClicked(event) {
    alert('clicked');
}

function addEventHandlers() {
    upButton = document.getElementById("up-button");
    upButton.addEventListener("click", upButtonClicked);
    downButton = document.getElementById("down-button");
    downButton.addEventListener("click", downButtonClicked);
    rightButton = document.getElementById("right-button");
    rightButton.addEventListener("click", rightButtonClicked);
    leftButton = document.getElementById("left-button");
    leftButton.addEventListener("click", leftButtonClicked);
    takeOff = document.getElementById("takeoff");
    takeOff.addEventListener("click", takeButtonClicked);
    landing = document.getElementById("landing");
    landing.addEventListener("click", landButtonClicked);
    missionAbort = document.getElementById("missionAbort");
    missionAbort.addEventListener("click", abortButtonClicked);
}

window.addEventListener("load", function(event) {
    addEventHandlers();
});
