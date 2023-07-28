testLayout = {
    enemies: [
    {
        enemyPosition: 16 - 10,
        direction: "right",
        leftmostSquare: 2,
        rightMostSquare: 16-1,
        interval: 3,
        visionCone: 2,
        stunned: 0,
        enemyType: "patrol",
    },
    {
        enemyPosition: 16 + 10,
        direction: "left",
        leftmostSquare: 16 + 2,
        rightMostSquare: (16*2)-2,
        interval: 1,
        visionCone: 1,
        stunned: 0,
        enemyType: "patrol",
    },
    {
        enemyPosition: (16*2) + 4,
        direction: "right",
        leftmostSquare: (16*2),
        rightMostSquare: (16*3)-1,
        interval: 1,
        visionCone: 0,
        stunned: 0,
        enemyType: "border",
    },

    ],

    computers: [
        {
            computerPosition: 16+2,
            currentFunds: 5
        },
        {
            computerPosition: 30,
            currentFunds: 20
        }
    ],

    currentPosition: 0,
    exitPosition: (16*3)-1,  
    screenwidth: 16,
    mapSize: 16*3,
    mapRows: 3
}


testLayout2 = {
    enemies: [
    {
        enemyPosition: 16 - 10,
        direction: "right",
        leftmostSquare: 2,
        rightMostSquare: 16-1,
        interval: 3,
        visionCone: 2,
        stunned: 0,
        enemyType: "patrol",
    },
    {
        enemyPosition: 16 + 10,
        direction: "left",
        leftmostSquare: 16 + 2,
        rightMostSquare: (16*2)-2,
        interval: 1,
        visionCone: 1,
        stunned: 0,
        enemyType: "patrol",
    },
    {
        enemyPosition: (16*2) + 4,
        direction: "right",
        leftmostSquare: (16*2),
        rightMostSquare: (16*3)-1,
        interval: 1,
        visionCone: 0,
        stunned: 0,
        enemyType: "border",
    },

    ],

    computers: [
        {
            computerPosition: 16+2,
            currentFunds: 5
        },
        {
            computerPosition: 30,
            currentFunds: 20
        }
    ],

    walls: [2, screenwidth+2, (screenwidth*2)+2, (screenwidth*3)+2,
            screenwidth*3 + 4, screenwidth*3 + 5, screenwidth*3 + 6, screenwidth*3 + 7, screenwidth*3 + 8, screenwidth*3 + 9, screenwidth*3 + 10,],

    currentPosition: 0,
    exitPosition: (16*3)-1,  
    screenwidth: 16,
    mapSize: 16*7,
    mapRows: 7
}