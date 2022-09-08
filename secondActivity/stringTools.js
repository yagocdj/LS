// String tools

const stringTools = (yourString, functionName) => {
    let result = '';
    let s = '';
    functionName = functionName.toLowerCase();
    switch (functionName) {
        case "uppercase":
            result =  yourString.toUpperCase();
            break;
        case "lowercase":
            result =  yourString.toLowerCase();
            break;
        case "countchar":
            result = yourString.length;
            break;
        case "reverse":
            result = yourString.split('').reverse().join('');
            break;
        case "camelcase":
            result = yourString.split(' ');
            s = '';
            for (let i = 0; i < result.length; i++) {
                s += result[i].charAt(0).toUpperCase() + result[i].slice(1) + ' ';
            }
            result = s;
            break;
        case "snakecase":
            result = yourString.replaceAll(' ', '_');
            break;
        case "countline":
            result = 1;
            for (const value of yourString) {
                if (value == '\n') {
                   result++ 
                }
            }
            break;
        case "countword":
            if (yourString.length === 0) {
                result = 0;
            } else {
                result = yourString.replaceAll('\n', ' ').split(' ').length;
            }
            break;
        default:
            result = 'Operação não suportada';
    }
    return result;
};

// console.log(stringTools('zap', 'uppercase'));
// console.log(stringTools('lorem\n ipsum\n  dolor', 'countline'));
// console.log(stringTools('lorem ipsum dolor', 'snakecase'));
 console.log(stringTools('lorem\nipsum\ndolor', 'countword'));
