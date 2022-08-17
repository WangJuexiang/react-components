import React, { Component } from 'react';
import Popup from './Popup';
import BrowserIcon from './BrowserIcon';
import store from '../../../redux/store';
import { deleteItemAction, addPopupAction } from '../../../redux/browserlist_action';

import { DesktopOutlined, ExclamationCircleOutlined, FolderOutlined, PlusOutlined, StopOutlined } from '@ant-design/icons';
import { Image } from 'antd';
import { Button } from 'antd';

import "./index.css"


export default class MainItem extends Component {


	handleClickDeny = (id) => {

		if (window.confirm("Confirm to delete?")) {

			const { browserItems } = store.getState();

			const newBrowserItems = browserItems.filter((browserItem) => {
				return browserItem.id !== id;
			});

			store.dispatch(deleteItemAction(newBrowserItems))
			console.log(newBrowserItems, id, 'denyitems')
		}
	}


	handleClickAddPopup = (id, isPopupShowing) => {

		const { browserItems } = store.getState();

		const showPopupBrowserItems = browserItems.map((browserItemObj) => {
			if (browserItemObj.id === id) return { ...browserItemObj, isPopupShowing: !isPopupShowing };
			else return { ...browserItemObj, isPopupShowing: false }

		});
		console.log(showPopupBrowserItems, id, 'addpopup')
		store.dispatch(addPopupAction(showPopupBrowserItems))

	}


	render() {

		const { id, isPopupShowing, browserIcons, img, status } = this.props;

		const { browserItems } = store.getState()


		return (
			<div>
				<div className='main-item'>
					<Image
						className='main-item-img'
						width={80}
						height={80}
						src={img}
					/>

					<div className='main-item-content'>

						<div className='main-item-info'>

							<div className='main-item-info-url'>
								<DesktopOutlined style={{ fontSize: '150%' }} />
								<span className='main-item-info-urltext'>{this.props.url}</span>
							</div>

							<span
								className='main-item-info-status'
								id={status === true ? 'main-item-info-status-greencolor' : 'main-item-info-status-orangecolor'}>
								{status === true ? 'idle' : 'building'}</span>

							<div className='main-item-info-ip'>
								<ExclamationCircleOutlined style={{ fontSize: '150%' }} />
								<span className="main-item-info-iptext">{this.props.ip}</span>
							</div>

							<div className='main-item-info-location'>
								<FolderOutlined style={{ fontSize: '150%' }} />
								<span className='main-item-info-locationtext'>{this.props.location}</span>
							</div>

						</div>
						<div className='main-item-browser'>

							<Button className='main-item-addbutton' onClick={() => this.handleClickAddPopup(id, isPopupShowing)} type="primary" shape="default" size='small' icon={<PlusOutlined />} />

							<span>
								{
									browserIcons.length !== 0 &&

									browserIcons.map(browserIcon => {
										return <BrowserIcon key={browserIcon.id} {...browserIcon} parentId={id} />
									})
								}
							</span>


							<Button className='main-item-deletebutton' onClick={() => this.handleClickDeny(id)} type="primary" size='middle' icon={<StopOutlined />} >
								Deny
							</Button>

							{isPopupShowing &&

								<Popup id={id} isPopupShowing={isPopupShowing} />
							}
						</div>

					</div>
				</div >
			</div>
		)
	}
}
