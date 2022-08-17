import React, { Component } from 'react';
import { DownOutlined, IdcardOutlined, ImportOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import "./index.css";
import Curise from "../../../src/img/curise.svg";
import Avatar from "../../../src/img/avatar.jpg"


const menu = (
	<Menu
		items={[
			{
				key: '1',
				label: (
					<a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
						Profile
					</a>
				),
				icon: <IdcardOutlined />,
			},
			{
				key: '2',
				label: (
					<a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
						Sign out
					</a>
				),
				icon: <ImportOutlined />,
			},


		]}
	/>
);

export default class Header extends Component {



	render() {
		return (
			<div>
				<img className='cruise-logo' src={Curise} alt='CRUISE' />

				<Dropdown overlay={menu} trigger={['click']}>
					{/* <a onClick={(e) => e.preventDefault()}> */}
					<Space>
						<img className='user' src={Avatar} alt='User' overlay={menu} />
						<DownOutlined />
					</Space>
					{/* </a> */}
				</Dropdown>
			</div >

		)
	}
}
