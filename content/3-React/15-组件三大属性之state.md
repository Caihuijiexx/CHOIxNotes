# 组件三大属性_state

```react
class Weather extends React.Component {
 
  //构造器调用几次？ ———— 1次
  //constructor中的this是谁？—— Weather的实例对象 <=> Weather组件实例对象。
  constructor(props){
    super(props)
    
    //初始化状态
    this.state = { isHot: true }
    
    //解决changeWeather中this指向问题
    this.changeWeather = this.changeWeather.bind(this)
  }
  
  //changeWeather调用几次？ ———— 点几次调几次
  changeWeather(){
    const {isHot} = this.state
    
    //严重注意：状态必须通过setState进行更新,且更新是一种合并，不是替换。
    this.setState({isHot: !isHot})
    
    //严重注意：状态(state)不可直接更改，下面这行就是直接更改！！！
    //this.state.isHot = !isHot //这是错误的写法
    
    //changeWeather放在哪里？ ———— Weather的原型对象上，供实例使用
    //由于changeWeather是作为onClick的回调，所以不是通过实例调用的，是直接调用
    //类中的方法默认开启了局部的严格模式，所以changeWeather中的this为undefined
  }
  
  //render调用几次？ ———— 1+n次 1是初始化的那次 n是状态更新的次数
  render(){
    const {isHot} = this.state
    return <h1 onClick={this.changeWeather}>今天的天气很{ isHot ? '炎热' : '凉爽' }</h1>
  }
}

ReactDOM.render(<Weather/>, document.getElementById('root'))
```

#### 简写方式

```react
class Weather extends React.Component {
  
  state = { isHot: true }
  
  changeWeather = () => {
    const {isHot} = this.state
    this.setState({isHot: !isHot})
  }
  
  render(){
    const {isHot} = this.state
    return <h1 onClick={this.changeWeather}>今天的天气很{ isHot ? '炎热' : '凉爽' }</h1>
  }
}

ReactDOM.render(<Weather/>, document.getElementById('root'))
```

