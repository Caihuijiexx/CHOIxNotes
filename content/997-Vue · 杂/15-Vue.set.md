# Vue.set

由于Javascript的限制，Vue不能自动检测以下变动的数组。

- 当你利用索引直接设置一个项时，vue不会为我们自动更新。
- 当你修改数组的长度时，vue不会为我们自动更新。



**Vue.set(  "要改变的对象或者数组" , "索引/字段" , "value"  )**

```javascript
function add(){
   	console.log("我已经执行了");
   	app.arr[1]='ddd';	// 这样操作并不会动态加载
  	Vue.set(app.arr,1,'ddd');	// 正确操作
}
var outData={
  	arr:['aaa','bbb','ccc']
};
var app=new Vue({
  	el:'#app',
  	data:outData
})
```

```javascript
//在构造器外部声明数据
 var outData={
    count:1,
    goodName:'car'
};
var app=new Vue({
    el:'#app',
    //引用外部数据
    data:outData
})
function add(){
  	Vue.set(outData,'count',4);
}
```

