let screenwidth = 12;
let mapSize = screenwidth*3

let gameStartState = {
    gameMap: Array(mapSize).fill("empty"),

    currentPosition: 0,
    computerPosition: 16,
    computers: [
        {
            computerPosition: 17,
            currentFunds: 5
        },
        {
            computerPosition: 35,
            currentFunds: 20
        }
    ],
    currentCash: 0,

    enemies: [
    {
        enemyPosition: 11,
        direction: "left",
        leftmostSquare: 0,
        rightMostSquare: 11,
        interval: 4
    },
    {
        enemyPosition: 22,
        direction: "left",
        leftmostSquare: 14,
        rightMostSquare: 21,
        interval: 1
    },
    {
        enemyPosition: 35,
        direction: "left",
        leftmostSquare: 25,
        rightMostSquare: 35,
        interval: 2
    },

    ],

    intervalNumber: 0,
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
        for (let i=0; i <stateObj.enemies.length; i ++) {
            if (stateObj.enemies[i].enemyPosition === squareIndex) {
                mapSquareDiv.classList.add("enemy")
            }
        }

        for (let i=0; i <stateObj.computers.length; i ++) {
            if (stateObj.computers[i].computerPosition === squareIndex) {
                if (stateObj.currentPosition === squareIndex) {
                    mapSquareDiv.classList.add("player-computer")
                } else {
                    mapSquareDiv.classList.add("computer")
               }
               mapSquareDiv.textContent = stateObj.computers[i].currentFunds
            }
        }

        if (stateObj.currentPosition === squareIndex) {
            mapSquareDiv.classList.add("player")
        } else {
            mapSquareDiv.classList.add("empty")
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
    if (stateObj.currentPosition < stateObj.gameMap.length-screenwidth) {
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
    let newPosition = stateObj.currentPosition + squaresToMove

    stateObj = await immer.produce(stateObj, async (newState) => {
        newState.currentPosition = newPosition;
    })

    for (let i = 0; i < stateObj.enemies.length; i++) {
        if (stateObj.enemies[i].enemyPosition === stateObj.currentPosition) {
            loseTheGame("Don't move into enemies!")
        }
    }
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
            newState.intervalNumber += 1;
            for (let i = 0; i < stateObj.enemies.length; i++) {
                if (newState.intervalNumber % newState.enemies[i].interval === 0) {
                    if (newState.enemies[i].direction === "left") {
                        //change direction and pause if on end
                        if (newState.enemies[i].enemyPosition === newState.enemies[i].leftmostSquare) {
                            newState.enemies[i].direction = "right";  
                        } else {
                            newState.enemies[i].enemyPosition -= 1
                        }
                    } else {
                        if (newState.enemies[i].enemyPosition === newState.enemies[i].rightMostSquare) {
                            newState.enemies[i].direction = "left";  
                        } else {
                            newState.enemies[i].enemyPosition += 1
                        }
                    }
                }
            }
        
            for (let i = 0; i < newState.computers.length; i++) {
                if (newState.currentPosition === newState.computers[i].computerPosition && newState.computers[i].currentFunds > 0) {
                    newState.currentCash +=1;
                    newState.computers[i].currentFunds -=1
                }
            }
       
    })
    for (let i = 0; i < stateObj.enemies.length; i++) {
        if (stateObj.enemies[i].enemyPosition === stateObj.currentPosition) {
            loseTheGame("You got caught!")
        }
    }
    
    await changeState(stateObj)
    await renderScreen(stateObj)
}

function timeStuff() {
    setInterval(enemyMovementRow, 400); // 500 milliseconds (half a second)
  }
  
timeStuff()