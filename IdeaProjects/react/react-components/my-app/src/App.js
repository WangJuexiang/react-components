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

  render() {
    return (
      <div>
        <h1>React传值</h1>
        <h2>父组件向子组件传值</h2>
        <h3>子组件向父组件传值</h3>
        <div>-----分割线-----</div>

        <Children name={this.state.name} ></Children>
      </div>

    )
  }
}

export default App
