// function add(a: string, b: string): string;
// function add(a: number, b: number): number;
// function add(a: any, b: any): any {
//   return a + b;
// }

// add(1, 2); // number
// add('1', '2'); // string

function saySomething(word: string | string[]): string{
  if (typeof word === 'string') {
    return word;
  } else if (Array.isArray(word)) {
    return word.join(', ');
  }

  throw new Error("unable to say somthing");
}

saySomething('hello'); // string
saySomething(['hello', 'world']); // string