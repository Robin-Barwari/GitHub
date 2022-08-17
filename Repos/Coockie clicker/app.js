let timesClicked = 0;

const timesClickedLabel = document.querySelector(".meters-clicked-label");
const clickActionButton = document.querySelector(".click-action-button");

let press = () =>{
    console.log("Button pressed");
    timesClicked++;
    update();
}

let update = () => {
    console.log("Updating...");
    timesClickedLabel.innerHTML = timesClicked + " click";
}

timesClickedLabel.innerHTML = timesClicked;

console.log(typeof (press));