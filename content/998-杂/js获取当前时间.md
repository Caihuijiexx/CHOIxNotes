# js获取当前时间

- **获取当前日期YYYY-MM-DD**

```js
const now_time = new Date().getFullYear()
		+'-'+ 
		(new Date().getMonth()>9?new Date().getMonth()+1:'0'+(new Date().getMonth()+1))
		+'-'+
		(new Date().getDate()>9?new Date().getDate():'0'+new Date().getDate());
// 当前日期YYYY-MM-DD
```

