import React, { Component } from 'react';
import store from '../../../../redux/store'
import { deleteBrowserIconAction } from '../../../../redux/browserlist_action';
import { DeleteOutlined } from '@ant-design/icons';
import "./index.css"

export default class BrowserIcon extends Component {



	deleteBrowserIcon = (id, iconId, browserIcons) => {

		const { browserItems } = store.getState()

		//先取到点击事件发生的changeBrowserItem
		browserItems.map((browserItemObj) => {
			if (browserItemObj.id === id) {
				browserItemObj.browserIcons.pop()
			}
		}

		)
		console.log(browserItems);
		store.dispatch(deleteBrowserIconAction(browserItems))


		// console.log(changeBrowserItem, id, 'changeBrowserItem')


		// 删除browserIcons属性数组中指定iconId的图标
		// 更新此属性给changeBrowserItem

		// const updateBrowseIcons = changeBrowserItem.browserIcons.map((browserIconObj) => {
		// 	if (browserIconObj.iconId === iconId)
		// 		return browserIconObj


		// }
		// )

		//更新browserItems数组：updatebrowserItem替换changebrowseritem

		// let changeBrowserItemIndex = browserItems.indexOf(changeBrowserItem)

		// const updateBrowserItems = browserItems.splice(changeBrowserItemIndex, 1, updateBrowserItem)

		// store.dispatch(deleteBrowserIconAction(updateBrowserItems))
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
