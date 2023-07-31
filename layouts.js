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
        currentPosition: (22*3) - 2,
        direction: "right",
        leftmostSquare: (22*2),
        rightMostSquare: (22*3)-1,
        interval: 1,
        visionCone: 3,
        stunned: 0,
        enemyType: "patrol",
    },
    {
        currentPosition: (22*3) + 10,
        direction: "left",
        leftmostSquare: (22*3) + 2,
        rightMostSquare: (22*4)-3,
        interval: 2,
        visionCone: 3,
        stunned: 0,
        enemyType: "patrol",
    },
    {
        currentPosition: (22*4) + 4,
        direction: "right",
        leftmostSquare: (22*4) + 2,
        rightMostSquare: (22*5)-2,
        interval: 2,
        visionCone: 2,
        stunned: 0,
        enemyType: "patrol",
    },
    {
        currentPosition: (22*7)-5,
        direction: "right",
        leftmostSquare: (22*2),
        rightMostSquare: (2*3)-1,
        interval: 1,
        visionCone: 0,
        stunned: 0,
        enemyType: "border",
    },

    ],

    computers: [
        {
            computerPosition: (22*3)+4,
            currentFunds: 15
        },
        {
            computerPosition: (22*4) - 1,
            currentFunds: 20
        }
    ],

    currentPosition: 0,
    exitPosition: (22*6)-2,  
    screenwidth: 22,
    mapSize: 22*12,
    mapRows: 12,
    blankRows: 0,
    mapArray: testLayoutArray
}




let testLayout3Array =  
["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
"empty", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "empty",
"empty", "wall", "empty", "empty", "empty", "empty", "empty", "empty", "wall", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "wall", "empty",
"empty", "wall", "empty", "empty", "empty", "empty", "empty", "empty", "wall", "empty", "wall", "wall", "wall", "wall", "wall", "empty", "empty", "empty", "empty", "empty", "wall", "empty",
"empty", "wall", "empty", "empty", "empty", "empty", "empty", "empty", "wall", "empty", "empty", "wall", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "wall", "empty",
"empty", "wall", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "wall", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "wall", "empty",
"empty", "wall", "empty", "empty", "empty", "empty", "empty", "empty", "wall", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "wall", "empty",
"empty", "wall", "empty", "empty", "empty", "empty", "empty", "empty", "wall", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "wall", "empty",
"empty", "wall", "empty", "empty", "empty", "empty", "empty", "empty", "wall", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "wall", "empty",
"empty", "window", "empty", "empty", "empty", "empty", "empty", "empty", "wall", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "wall", "empty",
"empty", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "empty",
"empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
];

let testLayout3 = {
    enemies: [
        {
            currentPosition: (22*7) + 9,
            direction: "down",
            interval: 1,
            visionCone: 2,
            stunned: 0,
            enemyType: "patrol",
            patrolBuffer: 0,
        },
        {
            currentPosition: (22*8) +7,
            direction: "up",
            interval: 1,
            visionCone: 3,
            stunned: 0,
            enemyType: "patrol",
            patrolBuffer: 0,
        },
        {
            currentPosition: (22*8) -6,
            direction: "up",
            interval: 1,
            visionCone: 3,
            stunned: 0,
            enemyType: "patrol",
            patrolBuffer: 0,
        },
        {
            currentPosition: (22*3) - 4,
            direction: "right",
            interval: 2,
            visionCone: 2,
            stunned: 0,
            enemyType: "patrol",
            patrolBuffer: 0,
        },
        
        {
            currentPosition: (22*6) + 4,
            direction: "right",
            interval: 1,
            visionCone: 4,
            stunned: 0,
            enemyType: "patrol",
            patrolBuffer: 0,
        },
        {
            currentPosition: (22*5)-4,
            direction: "right",
            interval: 1,
            visionCone: 2,
            stunned: 0,
            enemyType: "patrol",
            patrolBuffer: 0,
        },
    ],

    computers: [
        {
            computerPosition: (22*3)-6,
            currentFunds: 25
        },
        {
            computerPosition: (22*5) - 6,
            currentFunds: 10
        }
    ],

    currentPosition: 0,
    exitPosition: 22-1,  
    screenwidth: 22,
    mapSize: 22*12,
    mapRows: 12,
    blankRows: 0,
    mapArray: testLayout3Array
}

let testLayout4 = {
    enemies: [
        {
            currentPosition: (22*7) + 9,
            direction: "down",
            interval: 1,
            visionCone: 2,
            stunned: 0,
            enemyType: "patrol",
            patrolBuffer: 0,
        },
        {
            currentPosition: (22*8) +7,
            direction: "up",
            interval: 1,
            visionCone: 3,
            stunned: 0,
            enemyType: "patrol",
            patrolBuffer: 0,
        },
        {
            currentPosition: (22*8) -6,
            direction: "up",
            interval: 1,
            visionCone: 3,
            stunned: 0,
            enemyType: "patrol",
            patrolBuffer: 0,
        },
        {
            currentPosition: (22*3) - 4,
            direction: "right",
            interval: 2,
            visionCone: 2,
            stunned: 0,
            enemyType: "patrol",
            patrolBuffer: 0,
        },
        
        {
            currentPosition: (22*6) + 4,
            direction: "right",
            interval: 1,
            visionCone: 4,
            stunned: 0,
            enemyType: "patrol",
            patrolBuffer: 0,
        },
        {
            currentPosition: (22*5)-4,
            direction: "right",
            interval: 1,
            visionCone: 2,
            stunned: 0,
            enemyType: "patrol",
            patrolBuffer: 0,
        },
        {
            currentPosition: 22+18,
            direction: "down",
            interval: 1,
            visionCone: 4,
            stunned: 0,
            enemyType: "camera",
            patrolBuffer: 0,
        },
    ],

    computers: [
        {
            computerPosition: (22*3)-6,
            currentFunds: 25
        },
        {
            computerPosition: (22*5) - 6,
            currentFunds: 10
        }
    ],

    currentPosition: 0,
    exitPosition: 22-1,  
    screenwidth: 22,
    mapSize: 22*12,
    mapRows: 12,
    blankRows: 0,
    mapArray: testLayout3Array
}


