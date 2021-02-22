# Vue computed和watch的区别



> ###### computed: 计算属性，watch：侦听属性

·

- #### computed: 数多个变量中的某一个值发生了变化，监控的这个值也会变化。


> “*购物列表，数量单价总金额，当前二者变化时，总金额会变化。*“
>

```javascript
data:{
	amount: '',	// 数量
	unit_price: '',	// 单价
},
computed:{
	//	总价
total_price: {
	// getter
  get: function(){
			return this.amount * this.unit_price
  },
  // setter
  set: function(newValue){
			// 这里可以处理该监控的值
    	newValue = newValue.replace(/[^\d.]/g,'')
     	if(this.amount != 0 & this.unit_price != 0 & newValue != 0 ) {
      	this.amount = newValue / this.unit_price;
          this.unit_price = newValue / this.amount;
      } else if(newValue == '' | newValue == 0) {
          this.amount = 0;
          this.unit_price = 0;
      }
  }
}
}
```

·

- #### watch: 监控vue实例的变化，一般监控路由，input输入值的特殊处理，适合一个数据影响多个数据。


> “*当输入框输入时，可以使输入值按对应的正则特殊处理。*“
>

```javascript
watch: {
amount: function(val){
	this.amount = val.toString().replace(/[^\d.]/g,'')
},
unit_price: function(val){
	this.unit_price = val.toString().replace(/[^\d.]/g,'')
}
},
```



“*当前路由变化时，执行对应的方法。*“

```javascript
watch: {
'$route' (to, from) {
// 监控路由变化
	// to 目标路由
// from 起点路由
}
}
```

·

- #### handler方法和immediate属性


（总结就是，handler是默认方法，immediate控制是否一开始执行）



这里 watch 的一个特点是，最初绑定的时候是不会执行的，要等到 `firstName` 改变时才执行监听计算。那我们想要一开始就让他最初绑定的时候就执行改怎么办呢？我们需要修改一下我们的 watch 写法，修改过后的 watch 代码如下：

```
watch: {
  firstName: {
    handler(newName, oldName) {
      this.fullName = newName + ' ' + this.lastName;
    },
    // 代表在wacth里声明了firstName这个方法之后立即先去执行handler方法
    immediate: true
  }
}
```

注意到`handler`了吗，我们给 firstName 绑定了一个`handler`方法，之前我们写的 watch 方法其实默认写的就是这个`handler`，Vue.js会去处理这个逻辑，最终编译出来其实就是这个`handler`。

而`immediate:true`代表如果在 wacth 里声明了 firstName 之后，就会立即先去执行里面的handler方法，如果为 `false`就跟我们以前的效果一样，不会在绑定的时候就执行。

·

- #### deep属性


（总结就是，针对对象，需要对象改变时使用）



watch 里面还有一个属性 `deep`，默认值是 `false`，代表是否深度监听，比如我们 data 里有一个`obj`属性：

```
<div>
      <p>obj.a: {{obj.a}}</p>
      <p>obj.a: <input type="text" v-model="obj.a"></p>
</div>
 
new Vue({
  el: '#root',
  data: {
    obj: {
      a: 123
    }
  },
  watch: {
    obj: {
      handler(newName, oldName) {
         console.log('obj.a changed');
      },
      immediate: true
    }
  } 
})
```

当我们在在输入框中输入数据视图改变`obj.a`的值时，我们发现是无效的。受现代 JavaScript 的限制 (以及废弃 `Object.observe`)，Vue 不能检测到对象属性的添加或删除。由于 Vue 会在初始化实例时对属性执行 `getter/setter` 转化过程，所以属性必须在 `data` 对象上存在才能让 Vue 转换它，这样才能让它是响应的。

默认情况下 handler 只监听`obj`这个属性它的引用的变化，我们只有给`obj`赋值的时候它才会监听到，比如我们在 mounted事件钩子函数中对`obj`进行重新赋值：

```
mounted: {
  this.obj = {
    a: '456'
  }
}
```

这样我们的 handler 才会执行，打印`obj.a changed`。

相反，如果我们需要监听`obj`里的属性`a`的值呢？这时候`deep`属性就派上用场了！

```
watch: {
  obj: {
    handler(newName, oldName) {
      console.log('obj.a changed');
    },
    immediate: true,
    deep: true
  }
} 
```

开销就会非常大了，任何修改`obj`里面任何一个属性都会触发这个监听器里的 handler。

优化，我们可以是使用字符串形式监听。

```
watch: {
  'obj.a': {
    handler(newName, oldName) {
      console.log('obj.a changed');
    },
    immediate: true,
    // deep: true
  }
} 
```

这样Vue.js才会一层一层解析下去，直到遇到属性`a`，然后才给`a`设置监听函数。





computed: 监控自己定义的变量，**无需在data中声明**

watch: 监控data中定义的指定变量，**需要在data中声明**