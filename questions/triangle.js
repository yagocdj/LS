// Triangle verification

let sideA = 3;
let sideB = 4;
let sideC = 5;
let triangleType = '';

if ((sideA + sideB > sideC) && (sideA + sideC > sideB) && (sideB + sideC > sideA)) {
    if (sideA === sideB && sideA === sideC) {
        triangleType = 'equilateral';
    } else if (sideA === sideB || sideA === sideC || sideB === sideC) {
        triangleType = 'isosceles';
    } else {
        triangleType = 'scalene';
    }
} else {
    triangleType = 'none';
}

console.log(triangleType);
