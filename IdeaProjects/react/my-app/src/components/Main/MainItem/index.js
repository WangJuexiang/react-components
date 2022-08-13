import React, { Component } from 'react';
import Popup from './Popup';
import BrowserIcon from './BrowserIcon';
import { DesktopOutlined, ExclamationCircleOutlined, FolderOutlined, PlusOutlined, StopOutlined } from '@ant-design/icons';
import { Image } from 'antd';
import { Button } from 'antd';
import "./index.css"


// state = { popupVisibility: false }



export default class MainItem extends Component {


	handleClickDeny = (id) => {
		if (window.confirm("Confirm to delete?")) {
			this.props.deleteItems(id);

		}
	}

	render() {

		const { id, browserIcons } = this.props;


		return (
			<div>

				<div className='main-item'>
					<Image
						className='main-item-img'
						width={80}
						height={80}
						src={this.props.img}
					/>

					<div className='main-item-content'>

						<div className='main-item-info'>

							<div className='main-item-info-url'>
								<DesktopOutlined style={{ fontSize: '150%' }} />
								<span className='main-item-info-urltext'>{this.props.url}</span>
							</div>

							<span
								className='main-item-info-status'
								id={this.props.status === 'idle' ? 'main-item-info-status-greencolor' : 'main-item-info-status-orangecolor'}>
								{this.props.status}</span>

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

							<Button className='main-item-addbutton' type="primary" shape="default" size='small' icon={<PlusOutlined />} />


							<BrowserIcon browserName={'Firefox'} />
							<BrowserIcon browserName={'Safari'} />
							<BrowserIcon browserName={'Ubuntu'} />
							<BrowserIcon browserName={'Chrome'} />

							<Button className='main-item-deletebutton' onClick={() => this.handleClickDeny(id)} type="primary" size='middle' icon={<StopOutlined />} >
								Deny
							</Button>

							<Popup />
						</div>

					</div>
				</div >
			</div>
		)
	}
}
