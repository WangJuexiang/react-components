import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import store from '../../../../redux/store';
import { closePopupAction } from '../../../../redux/browserlist_action';
import { Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import "./index.css"


export default class Popup extends Component {

	handleClickClosePopup = (id, isPopupShowing) => {

		const { browserItems } = store.getState();


		const hidePopupBrowserItems = browserItems.map((browserItemObj) => {
			if (browserItemObj.id === id) return { ...browserItemObj, isPopupShowing: !isPopupShowing };
			else return browserItemObj;

		});
		console.log(hidePopupBrowserItems, id, 'deletepopup')

		store.dispatch(closePopupAction(hidePopupBrowserItems))
	}

	// addBrowserIcon = (browserIconObj) => {
	// 	const { browserItems } = store.getState();

	// 	const newBrowserItems = browserItems.map((browserItemObj) => {
	// 		if (browserItemObj.id === id) return { ...browserItemObj, browserIcons }
	// 	}
	// 	)
	// 	store.dispatch(addBrowserIconAction(newBrowserItems));

	// }


	handleClickAddResource = (event) => {

		console.log('addresources')

		const { target } = event

		if (target.value.trim() === "") {
			alert("Cannot accept null");
			return;
		}

		const browserIconObj = { id: nanoid(), name: target.value };

		this.props.addBrowserIcon(browserIconObj)

	}


	render() {

		const { id, isPopupShowing } = this.props;

		// const { browserItems } = store.getState()

		return (
			<div className='popup-show'>
				<div className='popup-triangle'></div>
				<div className='popup-header'>
					<p>Separate multiple resource name with commas</p>
					<Button className='popup-close' type="link" icon={<CloseOutlined />} size={'large'} onClick={() => this.handleClickClosePopup(id, isPopupShowing)} ></Button>
				</div>
				<input className='popup-input' ></input>
				<div className='popup-button'>
					<Button className='popup-add' type="primary" onClick={this.handleClickAddResource}>Add Resources</Button>
					<Button className='popup-cancel' type='primary' onClick={() => this.handleClickClosePopup(id, isPopupShowing)}>Cancel</Button>
				</div>
			</div>
		)
	}
}
