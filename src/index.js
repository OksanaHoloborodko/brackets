module.exports = function check(str, bracketsConfig) {
  let pair = {};
  let stack = [];

  for (let i = 0; i < bracketsConfig.length; i++) {
    pair[bracketsConfig[i][0]] = bracketsConfig[i][1];
  }

  for (let i = 0; i < str.length; i++) {
    let currentBracket = str[i];
    let lastElement = stack[stack.length - 1];
    
    if (currentBracket != pair[lastElement]) {
      stack.push(currentBracket);
    } else {
      stack.pop();
    }
  }
  return stack.length === 0;
};
