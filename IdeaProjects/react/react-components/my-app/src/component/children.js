import React from "react";

class Children extends React.Component {

	childFunction = (e) => {
		// console.log(e)
		// console.log(e.target)
		// console.log(e.target.value)

		//子组件中调用父组件的方法，并把值传入
		this.props.cFunc(e.target.value)


	}

	render() {
		return (
			<div>
				<h1>子组件接收父组件传值</h1>
				<h2>{this.props.name}</h2>
				<h3>子组件向父组件传值</h3>
				<input type="text" onChange={this.childFunction}></input>

			</div>
		)
	}
}

export default Children
