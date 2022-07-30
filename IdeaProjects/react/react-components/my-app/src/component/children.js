import React from "react";

class Children extends React.Component {

	render() {
		return (
			<div>
				<h1>子组件接收父组件传值</h1>
				<h2>{this.props.name}</h2>
			</div>
		)
	}
}

export default Children
