import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import store from '../../../../redux/store';
import { handleClickAddResourceAction, closePopupAction } from '../../../../redux/browserlist_action';
import { Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import "./index.css"


export default class Popup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentAddIconName: ''
		}
	}



	handleClickClosePopup = (id, isPopupShowing) => {

		const { browserItems } = store.getState();


		const hidePopupBrowserItems = browserItems.map((browserItemObj) => {
			if (browserItemObj.id === id) return { ...browserItemObj, isPopupShowing: !isPopupShowing };
			else return browserItemObj;

		});

		store.dispatch(closePopupAction(hidePopupBrowserItems))
	}



	handleClickAddResource = (id, event) => {

		const { target } = event;

		const { browserItems } = store.getState()

		//定义即将添加的browserIconObj

		const browserIconObj = { id: nanoid(), name: this.state.currentAddIconName };

		console.log(browserIconObj, event)


		//将输入的value值push到browserIcons属性数组中

		browserItems.map((browserItemObj) => {
			if (browserItemObj.id === id) {
				browserItemObj.browserIcons.push(browserIconObj)
			}
		}
		)
		store.dispatch(handleClickAddResourceAction(browserItems))

	}

	inputChange = (e) => {
		console.log(e.target.value)
		this.setState({
			currentAddIconName: e.target.value
		})

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
				<input className='popup-input' type="text" placeholder="Please enter the browser" onChange={this.inputChange}></input>
				<div className='popup-button'>
					<Button className='popup-add' type="primary" onClick={(event) => this.handleClickAddResource(id, event)}>Add Resources</Button>
					<Button className='popup-cancel' type='primary' onClick={() => this.handleClickClosePopup(id, isPopupShowing)}>Cancel</Button>
				</div>
			</div>
		)
	}
}
