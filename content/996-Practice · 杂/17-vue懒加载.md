# vue懒加载

1. vue异步组件
2. es提案的import()
3. webpack的require,ensure()

`

#### 未使用懒加载

```javascript
import HelloWorld from '@/components/HelloWorld'
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component:HelloWorld
    }
  ]
})
```

`

#### vue异步组件

主要是使用了`resolve`的异步机制，用`require`代替了`import`，实现按需加载

resolve => require(route,resovle)

```javascript
export default new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: resolve => { require(['@/components/HelloWorld'],resovle); }
  }]
})
```

`

#### es提案的import()

```javascript
const HelloWorld = () => import("@/components/HelloWorld");
export default new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }]
})

/*或者*/

export default new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: () => import("@/components/HelloWorld")
  }]
})
```

`

#### webpack的require.ensure()

vue-router配置路由，使用webpack的require.ensure技术，也可以实现按需加载。 
这种情况下，多个路由指定相同的chunkName，会合并打包成一个js文件。

```javascript
require.ensure(
  dependencies: String[],
  callback: function(require),
  errorCallback: function(error),
  chunkName: String
)

/* 按照上面指定的顺序，webpack 支持以下参数：
 
	dependencies：字符串构成的数组，声明 callback 回调函数中所需的所有模块。
	callback：只要加载好全部依赖，webpack 就会执行此函数。require 函数的实现，作为参数传入此函数。当程序运行需要依赖时，可以使用require() 来加载依赖。函数体可以使用此参数，来进一步执行 require() 模块。
	errorCallback：当 webpack 加载依赖失败时，会执行此函数。
	chunkName：由 require.ensure() 创建出的 chunk 的名字。通过将同一个 chunkName 传递给不同的 require.ensure() 调用，我们可以将它们的代码合并到一个单独的 chunk 中，从而只产生一个浏览器必须加载的 bundle。
	
  虽然我们将 require 的实现，作为参数传递给回调函数，然而如果使用随意的名字，
  例如 require.ensure([], function(request) { request('someModule'); }) 
  则无法被 webpack 静态解析器处理，所以还是请使用 require，
  例如 require.ensure([], function(require) { require('someModule'); })。

*/
```

```javascript
// 举例

// r就是resolve
const list = r => require.ensure([], () => r(require('../components/list/list')), 'list');
// 路由也是正常的写法  这种是官方推荐的写的 按模块划分懒加载 
const router = new Router({
    routes: [
        {
           path: '/list/blog',
           component: list,
           name: 'blog'
        }
    ]
})
```

