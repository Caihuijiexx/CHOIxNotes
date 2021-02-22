# js函数参数默认值设置

```javascript
//  基本用法
function first(x = 1, y = 2) {
    console.log("x："+x ,"y："+ y);
}
first();
first(100);
```

```javascript
//  与解构赋值默认值结合,双重默认值
function third({x = 1 ,y = 2} = {}) {
    console.log("x："+x ,"y："+ y);
}
third();
third({x:100,y:200});
third({x:100});
```

