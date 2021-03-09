# Vue3.0和Vue.2.x的响应式性能区别

Vue.js 3.0用的是`Proxy`，Vue.js 2.x用的是`Object.defineProperty`

就响应式的实现而言，

Vue.js 3.0 比 Vue.js 2.x 在性能上的优势主要体现在初始化阶段，

不需要递归把子对象定义成响应式。

而 `Proxy` 本身并不比 `Object.defineProperty` 快，

好处是在于可以直接对整个对象劫持，包括对象属性的新增和删除，

劣势就是浏览器的兼容性不够好，而且没有合适的 polyfill。