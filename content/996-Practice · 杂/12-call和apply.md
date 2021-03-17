# call和apply

call和apply可以用来重新定义函数的执行环境，也就是this的指向。通过一个操作DOM的例子来理解。

```javascript
function changeStyle(attr, value){
    this.style[attr] = value;
}
var box = document.getElementById('box');
window.changeStyle.call(box, "height", "200px");
```

call中的第一个参数用于指定将要调用此函数的对象，在这里，changeStyle函数将被box对象调用，this指向了box对象，如果不用call的话，程序报错，因为window对象中没有style属性。
apply的用法:

```javascript
window.changeStyle.apply(box, ['height', '200px']);
```

如果call或apply的第一参数是null的话， this指向window

```javascript
function add(a, b){console.dir(this);}
function sub(a, b){console.dir(this);}
add(1,2);
"Window"
sub(1,2);
"Window"
add.call(sub, 1, 2);
"sub(a, b)"
sub.apply(add, [1, 2]);
"add(a, b)" 
```

为了方便记忆：

```
猫吃鱼，狗吃肉，奥特曼打小怪兽。

有天狗想吃鱼了

猫.吃鱼.call(狗，鱼)

狗就吃到鱼了

猫成精了，想打怪兽

奥特曼.打小怪兽.call(猫，小怪兽)

就这样记住了。
```

