// Creating textual figures

function createTriangle(figureSize) {
    let patternString = '';
    for (let i = 1; i <= figureSize; i++) {
        patternString = '#'.repeat(i);
        console.log(patternString);
    }
}

function createHalfDiamond(figureSize) {
    let patternString = '';
    for (let i = 1; i <= Math.floor(figureSize / 2); i++) {
        patternString = '#'.repeat(i);
        console.log(patternString);
    }
}

// TERMINAR ESTA QUESTÃO

// main

// createTriangle(3);
createHalfDiamond(2);
