const symbols = new Set([',', '(', ')']);

export function parse(data: string): Array<Node> {
  if (data == null) return null;
  let ds = data.split(';');
  return ds
    .filter(d => d.length > 0)
    .map(d => {
      let ts = lex(d);
      return parseCore(ts);
    });
}

function parseCore(tokens: Array<string>): Node {
  let stack: Array<string | Node> = [];
  for (let i = 0; i < tokens.length; i++) {

    let token = tokens[i];
    if (symbols.has(token)) {
      stack.push(token);
    } else {
      let top = stack.length === 0 ? null : stack[stack.length - 1];
      if (top === ')') {
        stack.pop();
        stack.push({...parseWord(token), children: buildChildren()})
      } else {
        stack.push({...parseWord(token), children: null});
      }
    }
  }

  if (stack.length !== 1) {
    throw Error('parse error. 2')
  }
  return stack[0] as Node;

  function parseWord(word: string): { name: string; distance: number } {
    let ss = word.split(':');
    if (ss.length === 0) console.log(name)
    return {
      name: ss[0],
      distance: ss.length < 2 ? 0 : parseFloat(ss[1]),
    };
  }

  function buildChildren(): Array<Node> {
    let children: Array<Node> = [];
    while (true) {
      let current = stack.pop();
      if (current === undefined) {
        throw Error('parse error 1.');
      }
      if (current === '(') {
        break;
      }
      //todo check format
      if (current !== ',') {
        children.push(current as Node);
      }
    }
    return children;
  }

}

function lex(data: string): Array<string> {
  let tokens: Array<string> = [];
  let word: Array<string> = null;
  for (let i = 0; i < data.length; i++) {
    let char = data[i];
    if (symbols.has(char)) {
      tryCompleteWord();
      tokens.push(char);
    } else {
      if (word === null) {
        word = [];
      }
      word.push(char);
    }
  }
  tryCompleteWord();
  return tokens;

  function tryCompleteWord() {
    if (word !== null) {
      tokens.push(word.join(''));
      word = null;
    }
  }
}


export interface Node {
  name: string;
  distance: number;
  children: Array<Node>;
}
