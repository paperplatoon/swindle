let row1 = ["player", "empty", "empty", "empty", "empty", "empty",
            "empty", "empty", "empty", "empty", "empty", "empty"]
let emptyRow = Array(12).fill("empty")
let middlerow = ["empty", "empty", "empty", "empty", "empty", "computer", 
                "empty", "empty", "empty", "empty", "empty", "empty"]
let initialMap = [...row1, ...middlerow, ...emptyRow]
let screenwidth = 12;


let gameStartState = {
    gameMap: initialMap,

    currentPosition: 0,
    enemyPosition: 21,
    computerPosition: 17,
    direction: "left",
    currentCash: 0,

    inTransition: false
}

state = {...gameStartState}

async function changeState(newStateObj) {
    state = {...newStateObj};
    await renderScreen(state);
}



async function renderTopBarStats(stateObj) {
    let topBarDiv = document.createElement("Div")
    topBarDiv.classList.add("top-stats-bar")
    let cashDiv = document.createElement("Div")
    cashDiv.textContent = "Cash: " + stateObj.currentCash;

    topBarDiv.append(cashDiv)
    return topBarDiv
}

async function renderScreen(stateObj) {
    document.getElementById("app").innerHTML = ""
    //create a mapDiv to append all your new squares to
    topBar = await renderTopBarStats(stateObj);
    document.getElementById("app").append(topBar)

    let mapDiv = document.createElement("Div");
    mapDiv.classList.add("map-div");

    stateObj.gameMap.forEach(async function (mapSquare, squareIndex) {
        let mapSquareDiv = document.createElement("Div");
        mapSquareDiv.classList.add("map-square");
        if (stateObj.enemyPosition === squareIndex) {
            mapSquareDiv.classList.add("enemy")
        } else {
            if (mapSquare === "player") {
                mapSquareDiv.classList.add("player-here")
            } else if (mapSquare === "empty") {
                mapSquareDiv.classList.add("empty")
            }  else if (mapSquare === "computer") {
                mapSquareDiv.classList.add("computer")
            } else if (mapSquare === "player-computer") {
                mapSquareDiv.classList.add("player-computer")
            }
        }
        
        
        
        mapDiv.append(mapSquareDiv)
    })
        document.getElementById("app").append(mapDiv)
}



document.addEventListener('keydown', async function(event) {
    let stateObj = {...state}
    // if (stateObj.inTransition === false) {
        if (event.key === 'ArrowLeft' || event.key ==="a") {
            // Execute your function for the left arrow key
            stateObj = await LeftArrow(stateObj);
            await changeState(stateObj)
            //await checkForDeath(stateObj)
          } else if (event.key === 'ArrowRight' || event.key ==="d") {
            // Execute your function for the right arrow key
            stateObj = await RightArrow(stateObj);
            await changeState(stateObj)
            //await checkForDeath(stateObj)
          } else if (event.key === 'ArrowDown' || event.key ==="s") {
            // Execute your function for the right arrow key
            stateObj = await DownArrow(stateObj);
            await changeState(stateObj)
            //await checkForDeath(stateObj)
          } else if (event.key === 'ArrowUp' || event.key ==="w") {
            // Execute your function for the right arrow key
            stateObj = await UpArrow(stateObj);
            await changeState(stateObj)
            //await checkForDeath(stateObj)
          }
    //}
  });

async function LeftArrow(stateObj) {   
    if (stateObj.currentPosition !== 0) {
        stateObj = await calculateMoveChange(stateObj, -1)
    }
    return stateObj
}

async function DownArrow(stateObj) {   
    if (stateObj.currentPosition < initialMap.length-screenwidth) {
        stateObj = await calculateMoveChange(stateObj, screenwidth)
    }
    return stateObj
}

async function UpArrow(stateObj) {   
    if (stateObj.currentPosition > screenwidth-1) {
        stateObj = await calculateMoveChange(stateObj, -screenwidth)
    }
    return stateObj
}

//7, 15, 23
async function RightArrow(stateObj) {
    if (stateObj.currentPosition !== stateObj.gameMap.length) {
        stateObj = await calculateMoveChange(stateObj, 1)
    }
    return stateObj
}

async function calculateMoveChange(stateObj, squaresToMove) {
    let oldPosition = stateObj.currentPosition
    let newPosition = stateObj.currentPosition + squaresToMove
    targetSquare = stateObj.gameMap[newPosition];
    
    if (targetSquare === "enemy") {
        await loseTheGame("You need to avoid enemies!")    
    }

    stateObj = await immer.produce(stateObj, async (newState) => {
        if (newState.gameMap[oldPosition] === "player-computer") {
            newState.gameMap[oldPosition] = "computer"
        } else {
            newState.gameMap[oldPosition] = "empty"
        }
        
        if (newState.gameMap[newPosition] === "computer") {
            newState.gameMap[newPosition] = "player-computer"
        } else {
            newState.gameMap[newPosition] = "player"
        }
        newState.currentPosition = newPosition;
        })
    return stateObj
}

async function loseTheGame(textString) {
    let confirmText = textString + ` Click OK to try again`
    var confirmation = confirm(confirmText);

  if (confirmation) {
    location.reload();
  }
}

async function enemyMovementRow() {
        let stateObj = {...state}
        
        
        stateObj = await immer.produce(stateObj, (newState) => {
            if (newState.direction === "left") {
                //change direction and pause if on end
                if (newState.enemyPosition === 13) {
                    newState.direction = "right";  
                } else {
                    //if moving to computer
                    if (newState.gameMap[newState.enemyPosition -1] === "computer") {
                        newState.gameMap[newState.enemyPosition -1] === "enemy-computer"
                        newState.gameMap[newState.enemyPosition] === "empty"
                    } else {
                        newState.gameMap[newState.enemyPosition -1] === "enemy"
                        //if moving away from computer, keep, otherwise make empty
                        if (newState.gameMap[newState.enemyPosition] === "enemy-computer") {
                            newState.gameMap[newState.enemyPosition] === "computer"
                        } else {
                            newState.gameMap[newState.enemyPosition] === "empty"
                        }
                    }

                    newState.enemyPosition -= 1
                }
            } else {
                if (state.enemyPosition === 22) {
                    newState.direction = "left";  
                } else {
                    //if moving to computer
                    if (newState.gameMap[newState.enemyPosition +1] === "computer") {
                        newState.gameMap[newState.enemyPosition +1] === "enemy-computer"
                        newState.gameMap[newState.enemyPosition] === "empty"
                    } else {
                        newState.gameMap[newState.enemyPosition +1] === "enemy"
                        //if moving away from computer, keep, otherwise make empty
                        if (newState.gameMap[newState.enemyPosition] === "enemy-computer") {
                            newState.gameMap[newState.enemyPosition] === "computer"
                        } else {
                            newState.gameMap[newState.enemyPosition] === "empty"
                        }
                    }
                    newState.enemyPosition += 1
                }
            }
        if (stateObj.currentPosition === stateObj.computerPosition) {
            newState.currentCash +=1;
        }
        })
        
        await changeState(stateObj)
        await renderScreen(stateObj)
        if (stateObj.enemyPosition === stateObj.currentPosition) {
            loseTheGame("You got caught!")
        }
    
}

function timeStuff() {
    setInterval(enemyMovementRow, 400); // 500 milliseconds (half a second)
  }
  
timeStuff()