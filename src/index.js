module.exports = function check(str, bracketsConfig) {
  // your solution
  if (str.length % 2) return false;

  let chars = str.split(''),
    stack = [],
    open = [],
    close = [],
    closeIndex,
    openIndex;

  for (let i = 0; i < bracketsConfig.length; i++) {
    open.push(bracketsConfig[i][0]);
    close.push(bracketsConfig[i][1]);
  }

  // Проходимся по строке, проверяя каждый ее символ (п.4).
  for (var i = 0, len = chars.length; i < len; i++) {
    openIndex = open.indexOf(chars[i]);

    if (openIndex !== -1) {

      if (open[openIndex] == close[openIndex]) {

        if (stack.length != 0) {

          let element = stack.pop();
          if (close.indexOf(element) !== openIndex) {
            stack.push(element);
            stack.push(open[openIndex]);
            continue;
          }  
          continue;
        }
      }
      // Нашли открывающую скобку. Помещаем ее в стек (п.2).
      stack.push(open[openIndex]);
      continue;
    }

    closeIndex = close.indexOf(chars[i]);
    if (closeIndex !== -1) {
      // Нашли закрывающую скобку. Проверяем ее соответствие открывающей (п.3).
      let element = stack.pop();
      if (closeIndex !== open.indexOf(element)) {
        return false;
      }
    }
  }

  // Проверяем дисбаланс открытых/закрытых скобок (п.5).
  if (stack.length !== 0) {
    return false;
  }

  return true;
}
/*let bracketsStack = [];
	str.split('').forEach((symbol, index) => {
		if(index == 0) {
			bracketsStack.push(symbol);
			return;
		}
		let lastOpenedBracket = bracketsConfig.find(bracketType =>
			bracketsStack[bracketsStack.length - 1] == bracketType[0]);
		lastOpenedBracket = lastOpenedBracket && lastOpenedBracket[1];
		if(symbol != lastOpenedBracket){
			bracketsStack.push(symbol);
		}
		else{
			bracketsStack.pop();
		}
	});

	if(bracketsStack.length == 0) return true;
	return false;*/