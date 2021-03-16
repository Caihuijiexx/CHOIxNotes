# function* 与 yield

 `function*`这种声明方式(`function`关键字后跟一个星号）会定义一个***生成器函数\* (***generator function***)**，它返回一个  `Generator`对象。

```JavaScript
/*
	name: 函数名
	param: 要传递给函数的一个参数的名称，一个函数最多可以有255个参数。
	statements: 普通JS语句。
*/
function* name([param[, param[, ... param]]]) { statements }
```

#### example

```javascript
/*
	next()方法返回一个对象，这个对象包含两个属性：value 和 done
    value 属性表示本次 yield 表达式的返回值，
    done 属性为布尔类型，表示生成器后续是否还有 yield 语句，即生成器函数是否已经执行完毕并返回。
    
	调用 next()方法时，如果传入了参数，那么这个参数会传给上一条执行的 yield语句左边的变量
	
	如果生成器函数中显示return时，调用 next() 方法返回的对象的 done 为 true，
	如果 return 后面跟了一个值，那么这个值会作为当前调用 next() 方法返回的 value 值。
*/
function *gen(){
    yield 10;
    x=yield 'foo';
    yield x;
  	return x;
	  yield "unreachable";// 不会被执行了
}

var gen_obj=gen();
console.log(gen_obj.next());// 执行 yield 10，返回 10
console.log(gen_obj.next());// 执行 yield 'foo'，返回 'foo'
console.log(gen_obj.next(100));// 将 100 赋给上一条 yield 'foo' 的左值，即执行 x=100，返回 100
console.log(gen_obj.next());// {value: 100, done: true}
console.log(gen_obj.next());// 执行完毕，value 为 undefined，done 为 true
```

#### Yield* 的使用

如果用的是 `yield*`（多了个星号），则表示将执行权**移交给另一个生成器函数**（**当前生成器暂停执行**）

```JavaScript
function* anotherGenerator(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}

function* generator(i){
  yield i;
  yield* anotherGenerator(i);// 移交执行权
  yield i + 10;
}

var gen = generator(10);

console.log(gen.next().value); // 执行generator函数，返回 10
console.log(gen.next().value); // 执行anotherGenerator函数，返回 11
console.log(gen.next().value); // 执行anotherGenerator函数，返回 12
console.log(gen.next().value); // 执行anotherGenerator函数，返回 13
console.log(gen.next().value); // 执行generator函数，返回 20
```

#### 传递参数

传递参数时是传给上一条yield的

```JavaScript
function *createIterator() {
    let first = yield 1;
    let second = yield first + 2; // 4 + 2
                                  // first =4 是next(4)将参数赋给上一条的
    yield second + 3;             // 5 + 3
}

let iterator = createIterator();

console.log(iterator.next());    // "{ value: 1, done: false }"
console.log(iterator.next(4));   // "{ value: 6, done: false }"
console.log(iterator.next(5));   // "{ value: 8, done: false }"
console.log(iterator.next());    // "{ value: undefined, done: true }"
```

#### 生成器函数不能当构造器使用

```JavaScript
function* f() {}
var obj = new f; // throws "TypeError: f is not a constructor"
```

