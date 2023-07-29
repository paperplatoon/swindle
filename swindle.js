let screenwidth = 16;
let mapSize = screenwidth*7

let gameStartState = {
    gameMap: Array(mapSize).fill("empty"),

    currentPosition: 0,
    computers: [],
    currentCash: 0,

    enemies: [],

    intervalNumber: 0,
    firingTaser: false,
    turnsTilTaserActive: 0,
    stateIsSetUp: false,
    exitPosition: 100,

    screenwidth: screenwidth,
    mapSize: mapSize,
}



async function setUpState(stateObj, layoutObj) {
    stateObj = immer.produce(stateObj, (newState) => {
      newState.enemies = layoutObj.enemies
      newState.computers = layoutObj.computers
      newState.currentPosition = layoutObj.currentPosition
      newState.stateIsSetUp = true;
      newState.exitPosition = layoutObj.exitPosition
      newState.screenwidth = layoutObj.screenwidth
      newState.mapSize = layoutObj.mapRows * layoutObj.screenwidth
      newState.gameMap = layoutObj.mapArray
    })
    await changeState(stateObj);
    return stateObj
}

async function changeState(newStateObj) {
    state = {...newStateObj};
    await renderScreen(state);
}

state = {...gameStartState}


async function renderTopBarStats(stateObj) {
    let topBarDiv = document.createElement("Div")
    topBarDiv.classList.add("top-stats-bar")
    let cashDiv = document.createElement("Div")
    cashDiv.textContent = "Cash: " + stateObj.currentCash;

    let taserDiv = document.createElement("Div")
    let taserText = ``
    if (stateObj.turnsTilTaserActive === 0) {
        taserText = "Taser Ready"
    } else {
        taserText = `Taser Recharging: ` + Math.round(((16-stateObj.turnsTilTaserActive)/16)*100, 2) + "%"
    }
    taserDiv.textContent = taserText;

    topBarDiv.append(cashDiv, taserDiv)
    return topBarDiv
}

async function renderScreen(stateObj) {
    if (stateObj.stateIsSetUp === false) {
        stateObj = await setUpState(stateObj, testLayout2);
    }
    document.getElementById("app").innerHTML = ""
    //create a mapDiv to append all your new squares to
    topBar = await renderTopBarStats(stateObj);
    document.getElementById("app").append(topBar)

    let mapDiv = document.createElement("Div");
    mapDiv.classList.add("map-div");

    stateObj.gameMap.forEach(async function (mapSquare, squareIndex) {

        let mapSquareDiv = document.createElement("Div");
        mapSquareDiv.classList.add("map-square");
        
        if (mapSquare === "empty") {
            mapSquareDiv.classList.add("empty")
        } else if (mapSquare === "wall") {
            mapSquareDiv.classList.add("wall")
        }
        for (let i=0; i <stateObj.enemies.length; i ++) {
            if (stateObj.enemies[i].enemyPosition === squareIndex) {
                mapSquareDiv.classList.add("enemy")
            }

            if (stateObj.enemies[i].visionCone > 0) {
                
                if (stateObj.enemies[i].direction === "left") {
                    
                    for ( let v = 1; v < stateObj.enemies[i].visionCone+1; v++) { 

                        if (squareIndex === (stateObj.enemies[i].enemyPosition - v) && (stateObj.enemies[i].enemyPosition % screenwidth  === ((squareIndex % screenwidth)+ v)) ){
                            mapSquareDiv.classList.add("vision-cone")

                            if (stateObj.currentPosition === squareIndex) {
                                loseTheGame("hit by left-moving enemy!")
                            }
                        }
                    }  
                } else {
                    for ( let v = 1; v < stateObj.enemies[i].visionCone+1; v++) {
                        if (squareIndex === (stateObj.enemies[i].enemyPosition + v)  && (stateObj.enemies[i].enemyPosition % screenwidth  === ((squareIndex % screenwidth) - v))) {
                            mapSquareDiv.classList.add("vision-cone")

                            if (stateObj.currentPosition === squareIndex) {
                                loseTheGame("hit by right-moving enemy!")
                            }
                        }
                    }
                }
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

        if (stateObj.exitPosition === squareIndex) {
            mapSquareDiv.classList.add("trapdoor")
            mapSquareDiv.textContent = "Exit"
        }

        if (stateObj.currentPosition === squareIndex) {
            if (stateObj.firingTaser === true) {
                mapSquareDiv.classList.add("player-taser")
            } else {
                mapSquareDiv.classList.add("player")
            }
            
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
          } else if (event.key === 't') {
            // Execute your function for the right arrow key
            stateObj = await fireTaser(stateObj);
            await changeState(stateObj)
            //await checkForDeath(stateObj)
          }
    //}
  });

async function LeftArrow(stateObj) {   
    if (stateObj.currentPosition % screenwidth !== 0 && stateObj.gameMap[stateObj.currentPosition-1] !== "wall") {
        stateObj = await calculateMoveChange(stateObj, -1)
    }
    return stateObj
}

async function DownArrow(stateObj) {   
    if (stateObj.currentPosition < stateObj.gameMap.length-screenwidth && stateObj.gameMap[stateObj.currentPosition+screenwidth] !== "wall") {
        stateObj = await calculateMoveChange(stateObj, screenwidth)
    }
    return stateObj
}

async function UpArrow(stateObj) {   
    if (stateObj.currentPosition > screenwidth-1 && stateObj.gameMap[stateObj.currentPosition-screenwidth] !== "wall") {
        stateObj = await calculateMoveChange(stateObj, -screenwidth)
    }
    return stateObj
}

//7, 15, 23
async function RightArrow(stateObj) {
    if ((stateObj.currentPosition+1) % screenwidth !== 0  && stateObj.gameMap[stateObj.currentPosition+1] !== "wall") {
        console.log("current position " + stateObj.currentPosition)
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

async function fireTaser(stateObj) {
    if (stateObj.turnsTilTaserActive === 0) {
        //if not on leftmost square   
        if (stateObj.currentPosition % screenwidth !== 0) {
            for (let e=0; e <stateObj.enemies.length; e++) {
                if (stateObj.enemies[e].enemyPosition === stateObj.currentPosition - 1) {
                    stateObj = immer.produce(stateObj, (newState) => {
                        newState.enemies[e].stunned += 16;
                        newState.firingTaser = true
                        newState.turnsTilTaserActive += 16;
                    })
                    
                }
            }    
        }
        //if not on rightmost
        if ((stateObj.currentPosition +1) % screenwidth !== 0) {
            for (let e=0; e <stateObj.enemies.length; e++) {
                if (stateObj.enemies[e].enemyPosition === stateObj.currentPosition + 1) {
                    stateObj.enemies[e].stunned += 16;
                    stateObj = immer.produce(stateObj, (newState) => {
                        newState.enemies[e].stunned += 16;
                        newState.firingTaser = true
                        newState.turnsTilTaserActive += 16;
                    })
                }
            }
        }
    }
    return stateObj
}

async function enemyMovementRow() {
        let stateObj = {...state}
        

        stateObj = await immer.produce(stateObj, (newState) => {
            for (let i = 0; i < stateObj.enemies.length; i++) {
                if (stateObj.enemies[i].enemyType === "patrol" ) {
                    if (newState.intervalNumber % newState.enemies[i].interval === 0 && newState.enemies[i].stunned === 0) {
                        if (newState.enemies[i].direction === "left") {
                            //change direction and pause if on end
                            if (newState.enemies[i].enemyPosition === newState.enemies[i].leftmostSquare || newState.gameMap[newState.enemies[i].enemyPosition-1] === "wall") {
                                newState.enemies[i].direction = "right";  
                            } else {
                                newState.enemies[i].enemyPosition -= 1
                            }
                        } else {
                            if (newState.enemies[i].enemyPosition === newState.enemies[i].rightMostSquare|| newState.gameMap[newState.enemies[i].enemyPosition+1] === "wall") {
                                newState.enemies[i].direction = "left";  
                            } else {
                                newState.enemies[i].enemyPosition += 1
                            }
                        }
                    }
                } else if (stateObj.enemies[i].enemyType === "border" ) {
                    if (newState.intervalNumber % newState.enemies[i].interval === 0 && newState.enemies[i].stunned === 0) {
                        if (newState.enemies[i].direction === "left") {
                            console.log("border enemy going left")
                            //if left and on leftmost square, go down
                            if (newState.enemies[i].enemyPosition % screenwidth ===0 ) {
                                newState.enemies[i].direction = "down"; 
                            } else if (newState.gameMap[newState.enemies[i].enemyPosition-1] === "wall") {
                                newState.enemies[i].direction = "down"; 
                            } else if (newState.enemies[i].enemyPosition > screenwidth-1 && newState.gameMap[newState.enemies[i].enemyPosition - screenwidth+1] === "wall") {
                                    newState.enemies[i].direction = "up";  
                            } else {
                                newState.enemies[i].enemyPosition -= 1
                            }
                        } else if (newState.enemies[i].direction === "down") {
                            console.log("border enemy going down")
                            //if on bottom, go right
                            if (newState.enemies[i].enemyPosition >= mapSize-screenwidth || newState.gameMap[newState.enemies[i].enemyPosition+screenwidth] === "wall") {
                                newState.enemies[i].direction = "right";  
                            } else if (newState.enemies[i].enemyPosition % screenwidth !==0 && newState.gameMap[newState.enemies[i].enemyPosition - 1] === "empty") {
                                    newState.enemies[i].direction = "left";  
                            } else {
                                newState.enemies[i].enemyPosition += screenwidth
                            }
                        } else if (newState.enemies[i].direction === "right") {
                            if ((newState.enemies[i].enemyPosition+1) % screenwidth === 0) {
                                newState.enemies[i].direction = "up";  
                            } else {
                                newState.enemies[i].enemyPosition += 1
                            }
                        } else if (newState.enemies[i].direction === "up") {
                            if ((newState.enemies[i].enemyPosition) < screenwidth) {
                                newState.enemies[i].direction = "left";  
                            } else {
                                newState.enemies[i].enemyPosition -= screenwidth
                            }
                        }
                    }
                }
            }
        
            //siphon cash if player is at computer
            for (let i = 0; i < newState.computers.length; i++) {
                if (newState.currentPosition === newState.computers[i].computerPosition && newState.computers[i].currentFunds > 0) {
                    newState.currentCash +=1;
                    newState.computers[i].currentFunds -=1
                }
            }
            //decrement enemy statuses like stun
            for (let e = 0; e < newState.enemies.length; e++) { 
                if (newState.enemies[e].stunned > 0) {
                    newState.enemies[e].stunned -=1
                }
            }
            //increment things like taser recharge and increase interval
            newState.firingTaser = false;
            if (newState.turnsTilTaserActive > 0) {
                newState.turnsTilTaserActive -= 1;
            }
            newState.intervalNumber += 1;

       
    })

    for (let i = 0; i < stateObj.enemies.length; i++) {
        if (stateObj.enemies[i].enemyPosition === stateObj.currentPosition) {
            loseTheGame("You got caught!")
        }
    }
    if (stateObj[stateObj.currentPosition] === "vision-cone" ) {
        loseTheGame("You got caught!")
    }

    if (stateObj.currentPosition === stateObj.exitPosition ) {
        let winString = `You escaped with $` + stateObj.currentCash + ` in loot!`
        loseTheGame(winString)
    }
    
    await changeState(stateObj)
    await renderScreen(stateObj)
}

function timeStuff() {
    setInterval(enemyMovementRow, 400); // 500 milliseconds (half a second)
  }
  
timeStuff()