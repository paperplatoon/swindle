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