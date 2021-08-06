# 组件三大属性_props

```react
// 创建组件
class Person extends React.Component{
  
  /*
    // 构造器是否接收props，是否传递给super
    // 取决于：是否希望在构造器中通过this访问props
    constructor(props){
      super(props)
      console.log('constructor',this.props);
    }
  */
  
  render(){
    const {name,age,sex} = this.props
    return (
      <ul>
        <li>姓名：{name}</li>
        <li>性别：{sex}</li>
        <li>年龄：{age+1}</li>
      </ul>
    )
  }
}
// 渲染组件到页面
ReactDOM.render(<Person name="jerry" age={19}  sex="男"/>,document.getElementById('test1'))
// 传对象
const p = {name:'老刘',age:18,sex:'女'}
ReactDOM.render(<Person {...p}/>,document.getElementById('test3'))
```

`

#### Props的限制

> 引入prop-types，用于对组件标签属性进行限制

```react
// 创建组件
class Person extends React.Component{
  
  // 对标签属性进行类型、必要性的限制
  Person.propTypes = {
    name: PropTypes.string.isRequired,  // 限制name必传，且为字符串
    sex: PropTypes.string,	// 限制sex为字符串
    age: PropTypes.number,	// 限制age为数值
    speak: PropTypes.func,	// 限制speak为函数
  }

	// 指定默认标签属性值
	Person.defaultProps = {
    name: '小强',
    age: 10
  }

	/*
	
		这里也可以用class的static属性来定义
		
		static propTypes = {
      name: PropTypes.string.isRequired,  // 限制name必传，且为字符串
      sex: PropTypes.string,	// 限制sex为字符串
      age: PropTypes.number,	// 限制age为数值
      speak: PropTypes.func,	// 限制speak为函数
    }
    static defaultProps = {
      name: '小强',
      age: 10
    }
    
	*/
  
  render(){
    const {name,age,sex} = this.props
    
    // props是只读的
    // this.props.name = 'jack' // 此行代码会报错，因为props是只读的
    
    return (
      <ul>
        <li>姓名：{name}</li>
        <li>性别：{sex}</li>
        <li>年龄：{age+1}</li>
      </ul>
    )
  }
}
// 渲染组件到页面
ReactDOM.render(<Person name="jerry" age={19}  sex="男", speak={speak}/>,document.getElementById('test1'))
function speak() { console.log('我说话了') }
```

`

#### 函数式组件使用props

```react
// 创建组件
function Person(props) {
  const {name,age,sex} = this.props
  return (
    <ul>
      <li>姓名：{name}</li>
      <li>性别：{sex}</li>
      <li>年龄：{age+1}</li>
    </ul>
  )
}

// 对标签属性进行类型、必要性的限制
Person.propTypes = {
  name: PropTypes.string.isRequired,  // 限制name必传，且为字符串
  sex: PropTypes.string,	// 限制sex为字符串
  age: PropTypes.number,	// 限制age为数值
  speak: PropTypes.func,	// 限制speak为函数
}

// 指定默认标签属性值
Person.defaultProps = {
  name: '小强',
  age: 10
}

// 渲染组件到页面
ReactDOM.render(<Person name="jerry" age={19}  sex="男", speak={speak}/>,document.getElementById('test1'))
function speak() { console.log('我说话了') }
```

