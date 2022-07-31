import React from "react";

class MainButton extends React.Component {

	changeState = (e) => {
		this.props.changeState(e.target.value)

	}

	render() {
		return (
			<div>
				<h1>当前状态:{this.props.status}</h1>
				<input type="text" onChange={this.changeState}></input>
			</div>
		)
	}
}

export default MainButton
