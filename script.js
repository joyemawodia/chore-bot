let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');


let botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg";
let beachDoorPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg";
let spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg";

let closedDoorPath ="https://content.codecademy.com/projects/chore-door/images/closed_door.svg";

let numClosedDoors = 3;
let openDoor1;
let openDoor2; 
let openDoor3; 

//start button

let startButton = document.getElementById('start');

//currently playing - to stop game after bot was found
let currentlyPlaying = true;


door1.onclick = () => {
    if(currentlyPlaying && !isClicked(door1)) {
       doorImage1.src = openDoor1; 
    playDoor(door1); 
      }
    
}


door2.onclick = () => {
    if(currentlyPlaying && !isClicked(door2)) {
       doorImage2.src = openDoor2;
    playDoor(door2);
} 
      }
    


door3.onclick = () => {
    if(currentlyPlaying && !isClicked(door3)) {
       doorImage3.src = openDoor3;
    playDoor(door3); 
      }
    
}

startButton.onclick = () => {
    if (currentlyPlaying === false) {
        startRound();
    }
    
}

startRound = () => {
    door1.src = closedDoorPath;
    door2.src = closedDoorPath;
    door3.src = closedDoorPath;
    numClosedDoors = 3;
    startButton.innerHTML = 'Good luck!';
    currentlyPlaying = true;

    randomChoreDoorGenerator();

}



randomChoreDoorGenerator = () => {
    let choreDoor = Math.floor(Math.random()* numClosedDoors);
    if(choreDoor === 0) {
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } 
    else if(choreDoor === 1) {
        openDoor2 = botDoorPath;
        openDoor3 = beachDoorPath;
        openDoor1 = spaceDoorPath;
    } 
    else {
        openDoor3 = botDoorPath;
        openDoor1 = beachDoorPath;
        openDoor2 = spaceDoorPath;
    } 
}



isBot = (door) => {
    if (door.src === botDoorPath) {
        return true;
    } else {
        return false;
    }
}

isClicked = (door) => {
    if (door.src === closedDoorPath) {
        return false;
    } else {
        return true;
    }
}



//logic for winner
playDoor = (door) => {
    numClosedDoors--;
    if (numClosedDoors === 0) {
        gameOver('win');
    } else if (isBot(door)) {
        gameOver('lose');
    }

}

//gameover
gameOver = (status) => {
    if (status === 'win') {
        startButton.innerHTML = 'You win! Play again?'
    } else {
        startButton.innerHTML = 'Game over! Play again?'
    }

    currentlyPlaying = false;
}

startRound();