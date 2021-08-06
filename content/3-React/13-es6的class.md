# ES6的class类

1. 类中的构造器不是必须要写的，要对实例进行一些初始化的操作，如添加指定属性时才写。

2. 如果A类继承了B类，且A类中写了构造器，那么A类构造器中的super是必须要调用的。

3. 类中所定义的方法，都放在了类的原型对象上，供实例去使用。

4. 类中static定义的属性或者方法，只供原型对象使用，静态方法内部只能使用静态属性

5. class体内部的代码总是在严格模式下执行
6. 类定义的私有字段，只能在类里面中读取或写入

```js
// 1. 构造器不是必须写的，实例需要传值进去的时候才需要
class Person {
  constructor(name, age){
  	this.name = name,
    this.age = age
  }
  body = '身体'

	static hands = '手'
	speak(){
    // 这里this指的是实例对象
    console.log(this.name);
  }
	static say(){
    console.log(this.body);
  }
	static sayHands(){
    console.log(this.hands);
  }
}

// 2. 继承类写了构造器，super是必须的
class Student extends Person {
  constructor(name, age, grade){
    super(name, age)
    this.grade = grade
  }
}

// 3. 类中定义的方法，供实例使用
const man = new Person('小强',18)
man.speak() // 小强

// 4. static只供原型对象使用，静态方法内部只能使用静态属性
man.say() // man.say is not a function
Person.say() // undefined
Person.sayHands() // 手

// 6. 类定义的私有字段，只能在类里面中读取或写入
class Car {
  #name = '奔驰'
  wheel = 4
  drive() {
    console.log(this.#name)
  }
}
const c = new Car()
c.drive() // 奔驰
c.wheel // 4
c.#name // Private field '#name' must be declared in an enclosing class
```

