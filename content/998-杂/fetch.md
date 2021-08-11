# fetch

#### fetch 和 xhr 的区别

##### 1、xhr

​	xhr 就是是XMLHttpRequest，是浏览器内置的api，可以和服务端进行交互，获取数据无需要页面刷新，XMLHttpRequest 可以用于获	取任何类型的数据，ajax就是基于xhr的封装。

​	**xhr的缺点：**

​		**(1) 不符合关注分离（Separation of Concerns）的原则**

​		**(2) 配置和调用方式非常混乱**

​		**(3) 基于事件的异步模型写起来也没有现代的 Promise，generator/yield，async/await 友好。**

##### 2、fetch

​	fetch 浏览器内置的api，一个获取资源的接口，它的API是基于Promise设计的，更加语义化、比较好理解，请求的异步性质进一步提	升，旧版本的浏览器不支持Promise，需要使用polyfill es6-promise，后可以完美支持 IE8+ 。

​	**fetch缺点：**

​		**(1) fetch只对网络请求报错，对400，500都当做成功的请求，需要封装去处理**

​		**(2) fetch默认不会带cookie，需要添加配置项**

​		**(3) 无法覆盖响应的内容类型标头**

​		**(4) fetch没有办法设置超时**

​		**(5) fetch没有办法原生监测请求的进度，而XHR可以**

​		**(6) fetch原生支持性不高**

------

`

#### 写法

**Xhr**

```js
var xhr = new XMLHttpRequest();
xhr.open('GET',url);
xhr.responseType = 'json';
xhr.onload = function(){
  console.log(xhr.response);
}
xhr.onerror = function(){  
  console.log('xhr error');
}
xhr.send();
```

**fetch**

```js
// 结合 async/await
async function demo () {
  try {
    const response= await fetch(url)
    const data = await response.json()
    console.log(data);
  } catch (error) {
    console.log('请求出错',error);
  }
}
```

```js
// 使用fetch做请求后，从response调用其原型上json()方法，获得Promise对象
fetch(url).then(function(response){
  return response.json();
}).then(function(data){
  console.log(data);
}).catch(function(e){
  console.log('error' + e);
});

// es6写法
fetch(url).then(response=>response.json())
  .then(data=>console.log(data))
  .catch(e=>console.log('error' + e));

// 处理text/html响应
fetch(url).then(response=>response.text())
  .then(data=>console.log(data))
  .catch(e=>console.log('error' + e));

// 获取头信息
fetch(url).then((response)=>{
  console.log(response.status);
  console.log(response.statusText);
  console.log(response.headers.get('Content-Type'));
  console.log(response.headers.get('Date'));
  return response.json();
}).then(data=>console.log(data))
  .catch(e=>console.log('error' + e);

// 设置头信息
fetch(url,{
  headers:{
   	'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
}).then(response=>response.json())
  .then(data=>console.log(data))
  .catch(e=>console.log('error' + e);

// 提交表单
fetch(url,{
  method: 'post',
  body: new FormData(document.getElementById('form'))
}).then(response=>response.json())
  .then(data=>console.log(data))
  .catch(e=>console.log('error' + e);

// 提交json数据
fetch(url,{
	method: 'post',
  body: JSON.stringify({  
    username: document.getElementById('username').value,
    password: document.getElementById('password').value
	})
}).then(response=>response.json())
  .then(data=>console.log(data))
  .catch(e=>console.log('error' + e);

// fetch跨域的处理，fetch中可以设置mode为"no-cors"（不跨域）
fetch('/users.json', {
  method: 'post',
  mode: 'no-cors',
  data: {}
}).then(function() { /* handle response */ });
```

