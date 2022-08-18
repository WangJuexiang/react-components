import React, { Component } from 'react';
import { Menu } from 'antd';
import store from '../../../redux/store';
// import { selectPhysicalAction, selectVirtualAction, selectAllAction } from '../../../redux/browserlist_action';
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
		label: 'Virtual',
		key: 'virtual',
	},

]

export default class MainNav extends Component {

	constructor(props) {
		super(props);
		this.state = {
			listData: [
				'windows',
				'ubuntu',
				'debin',
				'suse',
				'centos'
			],
			showlist: [],
			currentNav: 'all'
		};
	}

	//下拉框文字匹配题提示
	// search(e) {
	// 	let keyword = e.target.value;

	// 	if (keyword) {
	// 		let listData = this.state.listData;
	// 		let showlist = [];
	// 		for (let i = 0; i < listData.length; i++) {
	// 			if (listData[i].match(keyword)) {
	// 				showlist = [...showlist, listData[i]]
	// 			}
	// 		}

	// 		this.setState({
	// 			showlist: showlist
	// 		})
	// 	}
	// 	else {
	// 		this.setState({
	// 			showlist: this.state.listData
	// 		})
	// 	}
	// }

	handleSearch = (value) => {
		console.log(value)
		this.props.getSearchData(value)
	}

	handleClickNav = (e) => {
		this.setState({ currentNav: e.key })
		this.props.getNavData(e.key)
	}

	render() {

		// // 搜索框条件渲染
		// const Item = this.state.showlist.map((item, index) => {
		// 	return <p key={index}>{item}</p>
		// }
		// )

		return (
			<div className='main-nav'>
				<div className='main-nav-button'>
					<Menu className='main-nav-menu' onClick={this.handleClickNav} selectedKeys={[this.state.currentNav]} mode="horizontal" items={items} />

					<div className='main-nav-input'>
						<Space direction="vertical">
							<Search
								placeholder={'Please enter name'}
								onSearch={this.handleSearch}
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
