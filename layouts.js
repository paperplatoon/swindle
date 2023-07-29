let testLayout = {
    enemies: [
    {
        enemyPosition: 16 - 10,
        direction: "right",
        leftmostSquare: 0,
        rightMostSquare: 16-1,
        interval: 1,
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
    16: 16,
    mapSize: 16*3,
    mapRows: 3,
    blankRows: 4,
};

let testLayoutArray =  ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "wall", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
"empty", "empty", "wall", "empty", "empty", "empty", "empty", "wall", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
"empty", "empty", "wall", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
"empty", "empty", "wall", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
"empty", "empty", "wall", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
"empty", "empty", "wall", "empty", "empty", "empty", "empty", "wall", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
"empty", "empty", "empty", "empty", "empty", "empty", "empty", "wall", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
]

let testLayout2 = {
    enemies: [
    {
        enemyPosition: 16 - 10,
        direction: "right",
        leftmostSquare: 0,
        rightMostSquare: 16-1,
        interval: 2,
        visionCone: 2,
        stunned: 0,
        enemyType: "patrol",
    },
    {
        enemyPosition: 16 + 10,
        direction: "left",
        leftmostSquare: 16 + 2,
        rightMostSquare: (16*2)-3,
        interval: 1,
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
            computerPosition: 16+3,
            currentFunds: 5
        },
        {
            computerPosition: 30,
            currentFunds: 20
        }
    ],

    walls: [2, 16+2, (16*2)+2, (16*3)+2,
            16*3 + 4, 16*3 + 5, 16*3 + 6, 16*3 + 7, 16*3 + 8, 16*3 + 9, 16*3 + 10,],

    currentPosition: (16*6)-2,
    exitPosition: (16*3)-1,  
    screenwidth: 16,
    mapSize: 16*7,
    mapRows: 7,
    blankRows: 0,
    mapArray: testLayoutArray
}


