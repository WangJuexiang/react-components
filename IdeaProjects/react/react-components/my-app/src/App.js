import React from "react";
import MainButton from "./component/index";

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      status: "waiting",
      description: "待确认"
    }
  }

  handleClick = () => {
    this.setState({
      status: "finished"
    })
  }

  changeDescription = (e) => {
    this.setState({
      description: "已确认"
    })
  }

  render() {
    return (
      <div>
        <h1>控制台</h1>

        <MainButton
          status={this.state.status}
          changeDescription={(e) => this.changeDescription} >
        </MainButton>
        <button onClick={this.handleClick}>按钮</button>
        <h2>是否确认:{this.state.description}</h2>
      </div>

    )
  }
}

export default App
