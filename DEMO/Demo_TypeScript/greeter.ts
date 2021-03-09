// class Student {
//   fullName: string;
//   constructor(public firstName, public middleInitial, public lastName) {
//       this.fullName = firstName + " " + middleInitial + " " + lastName;
//   }
// }

// interface Person {
//   firstName: string;
//   lastName: string;
// }

// function greeter(person : Person) {
//   return "Hello, " + person.firstName + " " + person.lastName;
// }


// let user = new Student("Jane", "M.", "User");

// document.body.innerHTML = greeter(user);

// // 基础静态类型

// // 对象静态类型
// // 1、对象
// let guy : {
//   name: string,
//   age: number
// } = {
//   name: '张三',
//   age: 35
// }
// // 2、数组
// const guys: string[] = ['张三', '张三丰', '张师傅']
// // 3、类
// class Human {}
// const gguy : Human = new Human()
// // 4、函数
// const watchGuy : () => string = () => { return '张三' } 



// // 函数返回类型注释，由于ts有类型推断，所以不需要在定义处定义类型
// function add( one: number, two: number ) : number {
//   return one + two
// }
// const addResult = add(1, 2)

// // 函数方法类型注释
// function log() : void {
//   console.log('void');
// }

// // 函数永远执行不完never
// function errorFun() : never {
//   throw new Error()
//   console.log('error');
// }
// function forNever() : never {
//   while(true){}
//   console.log('forNever');
// }

// // 函数参数是对象
// function test( { a, b }: { a: number, b: number } ) {
//   return a + b
// }
// const total = test({ a:3, b:4 })


// // 数组类型，多种类型
// const arr: (number | string)[] = [ "123", 123 ]
// const arrs: { name: string, age: number }[] = [
//   { name: '张三', age: 11 },
//   { name: '李四', age: 12 },
// ]

// // 类型别名(type alias)
// type aMan = { name: string, age: number }
// class bMan { name: string; age: number; }
// const arrss: aMan[] = [
//   { name: '张三', age: 11 },
//   { name: '李四', age: 12 },
// ]


// // 元组
// const yuanzuArr: [ string, string, number ] = [ 'aaa', 'c', 123 ]
// // CSV
// const yuanzuArrs: [ string, string, number ][] = [
//   [ '张三', '教师', 123 ],
//   [ '李四', '司机', 333 ],
// ]


// // 接口(interface)
// interface Person {
//   firstName: string;
//   lastName: string;
// }
// // 类型别名可以直接给类型，比如string，而接口必须代表对象。
// type a = string;
// interface b {
//   c: string;
//   d?: number;
// }


// // 接口(interface 2)
// // 属性名是string，属性值是any
// interface propName {
//   [propname: string]: any;
//   say(): string
// }

// const ag: propName = {
//   a: '123',
//   say() { return 'a' }
// }

// // 接口和类的约束
// class woman implements Person {
//   firstName = "sara"
//   lastName = "koko";
// }

// // 接口间的继承
// interface Teacher extends Person {
//   teach(): string
// }

// const teacher: Teacher = {
//   firstName: 'tete',
//   lastName: 'chch',
//   teach() {
//     return 'i am a teacher'
//   }
// }

// // 类的概念和使用

// // 类的访问类型
// class Demo {
//   public title: string;
//   private data: string;
//   protected author: string;
// }
// class A extends Demo {
//   author = this.author;
// }
// const demo = new Demo()
// const a = new A()
// console.log(demo.title)
// console.log(demo.data)  // 报错
// console.log(demo.author)  // 报错
// console.log(a.author)
// // public（默认）: 类的内部外部都能使用
// // private: 只允许在类的内部使用，局部
// // protected: 除了和private一样的限制，允许在继承的子类中使用


// // 构造函数
// class P {
//   constructor(public name: string) {}
// }
// const p = new P('pName')
// console.log(p.name)   // pName

// getter，setter，static
class Lady {
  constructor(private _age: number) {}
  // getter
  get age(){
    return this._age - 10
  }
  // setter
  set age(age: number){
    this._age = age + 3
  }
}

const girlfriend = new Lady(28)
// 走getter流程
console.log(girlfriend.age);
// 先走getter，再走setter流程
girlfriend.age = 10
console.log(girlfriend.age);