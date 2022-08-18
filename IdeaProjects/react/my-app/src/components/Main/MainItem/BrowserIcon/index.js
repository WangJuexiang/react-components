import React, { Component } from 'react';
import store from '../../../../redux/store'
import { deleteBrowserIconAction } from '../../../../redux/browserlist_action';
import { DeleteOutlined } from '@ant-design/icons';
import "./index.css"

export default class BrowserIcon extends Component {



	deleteBrowserIcon = (id, iconId, browserIcons) => {


		const { browserItems } = store.getState()


		//先找到点击事件发生的browserItem
		//for/map来操作数组，不使用filter
		const changeBrowserItem = browserItems.filter((browserItemObj) => {
			return browserItemObj.id === id;
		}
		)

		//更新此browseritem的browserIcons属性
		const updateBrowserItem = changeBrowserItem.browserIcons.filter((browserIconObj) => {
			return browserIconObj.iconId !== iconId
		}
		)

		//更新browserItems数组：updatebrowserItem替换changebrowseritem

		let changeBrowserItemIndex = browserItems.indexOf(changeBrowserItem)

		const updateBrowserItems = browserItems.splice(changeBrowserItemIndex, 1, updateBrowserItem)

		store.dispatch(deleteBrowserIconAction(updateBrowserItems))
	}


	render() {

		const { id, browserIcons, iconId, name } = this.props

		return (
			<div className='main-item-browser-icon'>
				{name}
				<DeleteOutlined style={{ fontSize: 'large' }} onClick={() => this.deleteBrowserIcon(id, browserIcons, iconId)} />

			</div >
		)
	}
}
