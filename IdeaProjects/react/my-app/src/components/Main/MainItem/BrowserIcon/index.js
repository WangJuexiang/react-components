import React, { Component } from 'react';
import { DeleteOutlined } from '@ant-design/icons';
import "./index.css"


export default class BrowserIcon extends Component {
	render() {
		return (
			<div className='main-item-browser-icon'>
				{this.props.browserName}
				<DeleteOutlined style={{ fontSize: 'large' }} />

			</div >
		)
	}
}
