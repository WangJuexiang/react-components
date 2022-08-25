import React, { Component } from 'react'

export default class AsideNav extends Component {
	render() {
		return (
			<div className='aside-nav'>
				<p className='aside-nav-content'>{this.props.content}</p>
			</div>
		)
	}
}
