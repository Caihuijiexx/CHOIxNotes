# Hoisting（变量提升）

> 一个经常被遗忘的一个小知识点，「声明提升，赋值不变」

变量提升（Hoisting）被认为是， Javascript中执行上下文 （特别是创建和执行阶段）工作方式的一种认识。

从概念的字面意义上说，“变量提升”意味着 「**变量和函数的声明会在物理层面移动到代码的最前面**」，

但这么说并不准确。实际上变量和函数声明在代码里的位置是不会动的，而是在编译阶段被放入内存中。

```javascript
// 函数 function

catName("Chloe"); // "我的猫名叫 Chloe"

function catName(name) {
    console.log("我的猫名叫 " + name);
}
```

```javascript
// 变量 var

console.log(num); // Returns undefined
var num;
num = 6;

num = 6;
console.log(num); // returns 6
var num;
```

```JavaScript
// 变量var提升的一个小坑，if

var name = 'Tom';
(function() {
    if (typeof name == 'undefined') {
        var name = 'Jack';
        console.log('Goodbye ' + name);
    } else {
        console.log('Hello ' + name);
    }
})();

// 这两段相同，name变量提升，声明提升到if之上，赋值不变

var name = 'Tom';
(function() {
    var name;
    if (typeof name == 'undefined') {
        name = 'Jack';
        console.log('Goodbye ' + name);
    } else {
        console.log('Hello ' + name);
    }
})();

```

