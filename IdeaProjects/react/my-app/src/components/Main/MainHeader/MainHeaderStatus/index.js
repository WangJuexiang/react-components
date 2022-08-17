import React, { Component } from 'react'
import "./index.css"

export default class MainHeaderStatus extends Component {
	render() {
		return (
			<div>
				<div className='main-header'>
					<div className='main-header-text'>
						{this.props.text}
					</div>

					<div className='main-header-number'>
						{this.props.number}
					</div>

				</div>
			</div>
		)
	}
}
