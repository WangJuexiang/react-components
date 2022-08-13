import React, { Component } from 'react';
import { Menu } from 'antd';
// import { useState } from 'react';
// import { Button } from 'antd';
import "antd/dist/antd.css";
import { TableOutlined, InsertRowLeftOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import "./index.css"

const { Search } = Input;

const items = [
	{
		label: 'All',
		key: 'all',
	},
	{
		label: 'Physical',
		key: 'physical',
	},
	{
		label: 'Vertual',
		key: 'vertual',
	},

]


const onSearch = (value) => console.log(value);

export default class MainNav extends Component {
	render() {
		return (
			<div className='main-nav'>
				<div className='main-nav-button'>
					<Menu mode="horizontal" items={items} />
					{/* <div className='main-nav-button-all'> */}

					{/* <Menu mode="horizontal" defaultSelectedKeys={['mail']}>
							<Menu.Item key="mail" >
								All
							</Menu.Item>
						</Menu> */}

					{/* <Menu mode="horizontal" items={itemsAll} /> */}
					{/* <Button size='large' block={true}>All</Button> */}
					{/* </div> */}
					{/* <div className='main-nav-button-physical'> */}
					{/* <Menu mode="horizontal" items={itemsPhysical} /> */}

					{/* <Button size='large' block={true}> Physical</Button> */}
					{/* </div> */}
					{/* <div className='main-nav-button-virtual'> */}
					{/* <Menu mode="horizontal" items={itemsVertual} /> */}

					{/* <Button size='large' block={true}>Virtual</Button> */}
					{/* </div> */}

					<div className='main-nav-input'>
						<Space direction="vertical">
							<Search
								onSearch={onSearch}
								size="large"
								style={{
									width: 200,
								}}
							/>
						</Space>

					</div>
					<div className='main-nav-version'>
						<TableOutlined className='suqare-version' style={{ fontSize: 'large' }} />
						<InsertRowLeftOutlined className='left-right-version' style={{ fontSize: 'large' }} />
					</div>
				</div>

			</div >
		)
	}
}
