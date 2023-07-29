let testLayoutArray =  ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "wall", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
"empty", "empty", "wall", "empty", "empty", "empty", "empty", "wall", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
"empty", "empty", "wall", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
"empty", "empty", "wall", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
"empty", "empty", "wall", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
"empty", "empty", "wall", "empty", "empty", "empty", "empty", "wall", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
"empty", "empty", "empty", "empty", "empty", "empty", "empty", "wall", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
];

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
        enemyPosition: (16*4) + 4,
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

    currentPosition: 0,
    exitPosition: (16*6)-2,  
    screenwidth: 16,
    mapSize: 16*7,
    mapRows: 7,
    blankRows: 0,
    mapArray: testLayoutArray
}




let testLayout3Array =  
["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "wall", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
"empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "wall", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
"empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "wall", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
"empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "wall", "empty", "wall", "wall", "wall", "wall", "wall", "empty",
"empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "wall", "empty", "empty", "empty", "empty",
"empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "wall", "empty", "empty", "empty", "empty",
"empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
];

let testLayout3 = {
    enemies: [
        {
            enemyPosition: 16 + 12,
            direction: "left",
            leftmostSquare: 16,
            rightMostSquare: (16*2)-2,
            interval: 2,
            visionCone: 3,
            stunned: 0,
            enemyType: "patrol",
        },
        {
            enemyPosition: (16*3) - 2,
            direction: "right",
            leftmostSquare: (16*2),
            rightMostSquare: (16*3)-1,
            interval: 1,
            visionCone: 2,
            stunned: 0,
            enemyType: "patrol",
        },
        
        {
            enemyPosition: (16*4) + 4,
            direction: "right",
            leftmostSquare: (16*4) + 2,
            rightMostSquare: (16*5)-2,
            interval: 1,
            visionCone: 4,
            stunned: 0,
            enemyType: "patrol",
        },
        {
            enemyPosition: (16*6)-4,
            direction: "right",
            leftmostSquare: (16*6),
            rightMostSquare: (16*6)-1,
            interval: 1,
            visionCone: 1,
            stunned: 0,
            enemyType: "patrol",
        },
    ],

    computers: [
        {
            computerPosition: (16*2)-2,
            currentFunds: 25
        },
        {
            computerPosition: (16*5) - 6,
            currentFunds: 10
        }
    ],

    currentPosition: 0,
    exitPosition: 16-1,  
    screenwidth: 16,
    mapSize: 16*7,
    mapRows: 7,
    blankRows: 0,
    mapArray: testLayout3Array
}


