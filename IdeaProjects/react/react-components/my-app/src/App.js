import React from "react";
import Children from "./component/children";

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      name: "father",
      txt: "父组件的默认值"
    }
  }

  //方法：修改父组件的状态
  handleClick = () => {
    this.setState({
      name: "thougthworks"
    })
  }

  //方法：接收子组件传的值,修改state

  cFunc = (e) => {
    console.log(e)
    this.setState({
      txt: "修改后"
    })
  }

  render() {
    return (
      <div>
        <h1>React传值</h1>
        <h2>父组件向子组件传值</h2>
        <h3>子组件向父组件传值</h3>
        <div>-----分割线-----</div>

        <Children
          name={this.state.name}
          // 通过事件传递的时候，this的指向已经改变——需用bind绑定
          cFunc={this.cFunc.bind(this)} >
        </Children>
        <button onClick={this.handleClick}>按钮</button>
        <h2>父组件，接收子组件回传的值:{this.state.txt}</h2>
      </div>

    )
  }
}

export default App
