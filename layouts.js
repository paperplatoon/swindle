let testLayoutArray =  ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "wall", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
"empty", "empty", "wall", "empty", "empty", "empty", "empty", "wall", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
"empty", "empty", "wall", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "wall", "empty", "empty",
"empty", "empty", "wall", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "wall", "empty", "empty",
"empty", "empty", "wall", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "wall", "empty", "empty",
"empty", "empty", "wall", "empty", "empty", "empty", "empty", "wall", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
"empty", "empty", "empty", "empty", "empty", "empty", "empty", "wall", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
]

let testLayout2 = {
    enemies: [
    {
        enemyPosition: (16*3) - 2,
        direction: "right",
        leftmostSquare: (16*2),
        rightMostSquare: (16*3)-1,
        interval: 1,
        visionCone: 3,
        stunned: 0,
        enemyType: "patrol",
    },
    {
        enemyPosition: (16*3) + 10,
        direction: "left",
        leftmostSquare: (16*3) + 2,
        rightMostSquare: (16*4)-3,
        interval: 2,
        visionCone: 3,
        stunned: 0,
        enemyType: "patrol",
    },
    {
        enemyPosition: (16*4) + 2,
        direction: "right",
        leftmostSquare: (16*4) + 2,
        rightMostSquare: (16*5)-2,
        interval: 2,
        visionCone: 2,
        stunned: 0,
        enemyType: "patrol",
    },
    {
        enemyPosition: (16*7)-5,
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
            computerPosition: (16*3)+4,
            currentFunds: 15
        },
        {
            computerPosition: (16*4) - 1,
            currentFunds: 20
        }
    ],

    walls: [2, 16+2, (16*2)+2, (16*3)+2,
            16*3 + 4, 16*3 + 5, 16*3 + 6, 16*3 + 7, 16*3 + 8, 16*3 + 9, 16*3 + 10,],

    currentPosition: 0,
    exitPosition: (16*6)-2,  
    screenwidth: 16,
    mapSize: 16*7,
    mapRows: 7,
    blankRows: 0,
    mapArray: testLayoutArray
}


