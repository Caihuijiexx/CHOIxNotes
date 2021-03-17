# Vue.component和component标签

- ## Vue.component

> */ 这里有个template的小细节，template的最外层一定只有一个标签包起来，并没有兄弟节点 /*
> */ 由于-有坑，所以少用-，用其他形式定义属性prop /*

html

```html
<div id="app">
    <Global_choi :country="mycountry"></Global_choi>
    <Part_choi></Part_choi>
    <another_part_choi></another_part_choi>
    <country></country>
</div>
```

js

```javascript
// 全局注册
Vue.component('Global_choi',{
    template: `<div>i am Global_choi from {{ country }}</div>`,
    props: ['country']
})

// 外部定义局部组件，再在局部调用
var another_part_choi = {
  	template: `<div>i am another_part_choi</div>`
}

// 一个子组件
var city = {
  	template: `<div>city: city</div>`,
}

// 一个父组件
var country = {
    template: `<div>country: country<city></city></div>`,
    components: {
      	"city": city
    }
}

/* 这里有个template的小细节，template的最外层一定只有一个标签包起来，并没有兄弟节点 */
/* 由于-有坑，所以少用-，用其他形式定义属性prop */

var vm=new Vue({
    el: '#app',
    components:{ // 局部注册组件
        "Part_choi": {
          	template: `<div>i am Part_choi</div>`
        },
        "another_part_choi": another_part_choi,
        "country": country
    },
    data:{  //数据
      	mycountry: 'China'
    }
})
```







------



- ## component 标签

该标签是Vue框架自定义的标签，它的用途就是可以**动态绑定我们的组件**，根据数据的不同更换不同的组件。 

结构:     **<component :is="组件变量，定义在data里"></component>**



**\### example ###**

html

```html
<button @click="change_component">change_component</button>
<component :is="now_component"></component>
```

js

```javascript
// 定义三个组件
var componentA={
  template:`<div>I'm componentA</div>`
}
var componentB={
  template:`<div>I'm componentB</div>`
}
var componentC={
  template:`<div>I'm componentC</div>`
}

// 实例
var vm=new Vue({
  el: '#app',
  components:{
    "componentA":componentA,
    "componentB":componentB,
    "componentC":componentC,
  },
  data:{  //数据
    now_component: 'componentA'
  },
  methods:{  //方法
    //js方法写在这里
    change_component: function(){
      if(this.now_component == 'componentA'){ this.now_component = 'componentB' }
      else if(this.now_component == 'componentB'){ this.now_component = 'componentC' }
      else if(this.now_component == 'componentC'){ this.now_component = 'componentA' }
    }
  },
})
```

