import React, { Component } from 'react';
import store from '../../../../redux/store'
import { deleteBrowserIconAction } from '../../../../redux/browserlist_action';
import { DeleteOutlined } from '@ant-design/icons';
import "./index.css"

export default class BrowserIcon extends Component {


	deleteBrowserIcon = (id, iconId, browserIcons) => {

		const { browserItems } = store.getState()

		console.log('iconId:', iconId)

		browserItems.map((browserItemObj) => {
			if (browserItemObj.id === id) {
				browserItemObj.browserIcons.pop()
			}
		}
		)
		store.dispatch(deleteBrowserIconAction(browserItems))
	}

	render() {

		const { id, browserIcons, iconId, name } = this.props

		return (
			<div className='main-item-browser-icon'>
				{name}
				<DeleteOutlined style={{ fontSize: 'large' }} onClick={() => this.deleteBrowserIcon(id, iconId, browserIcons,)} />

			</div >
		)
	}
}
