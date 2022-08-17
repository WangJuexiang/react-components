import React, { Component } from 'react';
import store from '../../../../redux/store'
import { deleteBrowserIconAction } from '../../../../redux/browserlist_action';
import { DeleteOutlined } from '@ant-design/icons';
import "./index.css"


export default class BrowserIcon extends Component {

	deleteBrowserIcon = () => {
		const { id, name } = this.props

		const { browserItems } = store.getState()
		const updateBrowserItems = browserItems.filter((browserItemObj) => {
			return true;
		}
		)
		store.dispatch(deleteBrowserIconAction(updateBrowserItems))
	}

	render() {

		const { id, name } = this.props

		return (
			<div className='main-item-browser-icon'>
				{name}
				<DeleteOutlined style={{ fontSize: 'large' }} onClick={this.deleteBrowserIcon} />

			</div >
		)
	}
}
