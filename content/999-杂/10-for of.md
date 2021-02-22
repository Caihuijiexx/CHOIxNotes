# for of

for…of是ES6新增的遍历方式，它提供了统一的遍历机制。所有实现了[Symbol.iterator]接口的对象都可以被遍历。for...of循环可以使用的范围包括数组、Set 和 Map 结构、某些类似数组的对象（比如arguments对象、DOM NodeList 对象）、Generator 对象，以及字符串

优点：

**有着同for...in一样的简洁语法，但是没有for...in那些缺点**
不同用于forEach方法，它可以与break、continue和return配合使用
提供了遍历所有数据结构的统一操作接口
下面是一个使用break语句，跳出for...of循环的例子

 

```javascript
for (var n of fibonacci) {

 if (n > 1000)

  break;

 console.log(n);

}
```

上面的例子，会输出斐波纳契数列小于等于1000的项。如果当前项大于1000，就会使用break语句跳出for...of循环。

 for...of获取索引

entries() 返回一个遍历器对象，用来遍历[键名, 键值]组成的数组。对于数组，键名就是索引值；对于 Set，键名与键值相同。Map 结构的 Iterator 接口，默认就是调用entries方法。
keys() 返回一个遍历器对象，用来遍历所有的键名。
values() 返回一个遍历器对象，用来遍历所有的键值。

```javascript
// demo

let arr = ['a', 'b', 'c'];

for (let pair of arr.entries()) {

 console.log(pair);

}

// [0, 'a']

// [1, 'b']

// [2, 'c']
```

类似数组的对象

类似数组的对象包括好几类。下面是for...of循环用于字符串、DOM NodeList 对象、arguments对象的例子。

 

```javascript
// 字符串

let str = "hello";

 

for (let s of str) {

 console.log(s); // h e l l o

}

 

// DOM NodeList对象

let paras = document.querySelectorAll("p");

 

for (let p of paras) {

 p.classList.add("test");

}

 

// arguments对象

function printArgs() {

 for (let x of arguments) {

  console.log(x);

 }

}

printArgs('a', 'b');

// 'a'

// 'b'
```

并不是所有类似数组的对象都具有 Iterator 接口，一个简便的解决方法，就是使用Array.from方法将其转为数组。 

 

```javascript
let arrayLike = { length: 2, 0: 'a', 1: 'b' };

 

// 报错

for (let x of arrayLike) {

 console.log(x);

}

 

// 正确

for (let x of Array.from(arrayLike)) {

 console.log(x); // 'a' // 'b'

}
```

普通的对象

对于普通的对象，for...of结构不能直接使用，会报错，必须部署了 Iterator 接口后才能使用。

 

```javascript
let es6 = {

 edition: 6,

 committee: "TC39",

 standard: "ECMA-262"

};

 

for (let e in es6) {

 console.log(e);

}

// edition

// committee

// standard

 

for (let e of es6) {

 console.log(e);

}

// TypeError: es6 is not iterable
```

解决方法是，使用Object.keys方法将对象的键名生成一个数组，然后遍历这个数组。

```javascript
for (var key of Object.keys(someObject)) {
 console.log(key + ': ' + someObject[key]);
}
```

