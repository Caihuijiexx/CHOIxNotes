# 组件三大属性_refs

> 1. 字符串形式，ref = "input1"
> 2. 回调形式，ref = { c => this.input1 = c }
> 3. 通过createRef创建，myRef = React.createRef()，ref = { this.myRef }

```react
//创建组件
class Demo extends React.Component{
  
  // 【字符串形式】展示左侧输入框的数据
  showData = ()=>{
    const {input1} = this.refs
    alert(input1.value)
  }
  
	// 【回调形式】展示右侧输入框的数据
  showData2 = ()=>{
    const {input2} = this.refs
    alert(input2.value)
  }
  
  // 【通过createRef】
  input3 = React.createRef()
	showData3 = ()=>{
    alert(this.input3.current.value)
  }

  render(){
    return(
      <div>
        <input ref="input1" type="text" placeholder="点击按钮提示数据"/>&nbsp;
        <button onClick={this.showData}>点我提示左侧的数据</button>&nbsp;
        <input ref={c => this.input2 = c} onBlur={this.showData2} type="text" placeholder="失去焦点提示数据"/>
        <input ref={this.input3} onBlur={this.showData3} type="text" placeholder="失去焦点提示数据"/>
      </div>
    )
  }
}
//渲染组件到页面
ReactDOM.render(<Demo />,document.getElementById('test'))
```

