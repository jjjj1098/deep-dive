let boolean: boolean
let falseValue: boolean = false

let number: number
let integer: number = 6
let float: number = 1.2345

let string: string
let firstName: string = "Doe";

//한가지 타입만 가지는 배열
let names1: string[] = ["John", "Kim"];
let names2: Array<string> = ["John", "Kim"];

//여러 타입을 가지는 배열(유니언 타입 사용)
let array1: (string|number)[] = ['John', 1, 2];
let array2: Array<string|number> = ['John', 1, 2];

//여러 타입 단언 X
let someArray: any[] = ['John', 1, [],{}, false];

//Interface, Type

//읽기 전용 배열(readonly, ReadonlyArray)
  

let unknown: unknown = false;
//let string1: boolean = unknown
let string2: boolean = unknown as boolean; //타입 단언


const obj1: {id: number, title: string, description: string}= {
    id: 1,
    title: 'title1',
    description: 'description1'
}

  
