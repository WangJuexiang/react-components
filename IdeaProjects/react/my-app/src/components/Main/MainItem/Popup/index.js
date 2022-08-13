import React, { Component } from 'react'
import { Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import "./popup.css"


export default class Popup extends Component {

	// handleClickClosePopup = () => {

	// }

	// handleClickAddResource = () => {

	// }

	// handleClickCancelInput = () => {

	// }

	render() {
		return (
			<div className='popup'>
				<div className='popup-triangle'></div>
				<div className='popup-header'>
					<p>Separate multiple resource name with commas</p>
					<Button className='popup-close' type="link" icon={<CloseOutlined />} size={'large'} ></Button>
				</div>
				<input className='popup-input'></input>
				<div className='popup-button'>
					<Button className='popup-add' type="primary">Add Resources</Button>
					<Button className='popup-cancel' type='primary'>Cancel</Button>
				</div>
			</div>
		)
	}
}
