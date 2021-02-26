module.exports = function check(str, bracketsConfig) {
  let stack = []
  let openBr = []
  let closeBr = []

  for (let i = 0; i < bracketsConfig.length; i++) {
    openBr.push(bracketsConfig[i][0])
    closeBr.push(bracketsConfig[i][1])    
  }

  for (let i = 0; i < str.length; i++) {
    if (openBr.includes(str[i]) && closeBr.includes(str[i]) && stack[stack.length - 1] == str[i]) {
      stack.pop()
    } else if (openBr.includes(str[i])) {
      stack.push(str[i])
    } else if (closeBr.indexOf(str[i]) != -1 && stack[stack.length - 1] == openBr[closeBr.indexOf(str[i])]) {
      stack.pop()
    } else {
      return false
    }
  }

  return stack.length == 0 ? true : false;
}