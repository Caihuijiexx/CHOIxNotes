# ES6 小笔记

#### **let：**声明的变量只在let命令代码块内有效（局部），**不能重复声明**

```javascript
/* ************************ */
/* for 循环计数器很适合用 let */
/* ************************ */


for (var i = 0; i < 10; i++) {
  setTimeout(function(){
    console.log(i);
  })
}
// 输出十个 10
for (let j = 0; j < 10; j++) {
  setTimeout(function(){
    console.log(j);
  })
}
// 输出 0123456789
```



```javascript
/* ****************************** */
/* let 不存在变量提升，var 会变量提升 */
/* ****************************** */


console.log(a);  //ReferenceError: a is not defined
let a = "apple";
 
console.log(b);  //undefined
var b = "banana";
```



#### **const：**声明一个只读的常量，声明后无法改变。

**（一旦声明必须初始化，否则会报错。）**

```javascript
const PI = "3.1415926";
PI  // 3.1415926

const MY_AGE;  // SyntaxError: Missing initializer in const declaration    
```



#### **暂时性死区：**

ES6 明确规定，代码块内如果**存在 let 或者 const**，

代码块会对这些命令声明的变量**从块的开始就形成一个封闭作用域**。

代码块内，**在声明变量 PI 之前使用它会报错**。

```javascript
var PI = "a";
if(true){
  console.log(PI);  // ReferenceError: PI is not defined
  const PI = "3.1415926";
}
```



