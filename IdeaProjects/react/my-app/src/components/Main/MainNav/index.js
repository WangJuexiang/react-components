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

	search(e) {
		let keyword = e.target.value;

		if (keyword) {
			let listData = this.state.listData;
			let showlist = [];
			for (let i = 0; i < listData.length; i++) {
				if (listData[i].match(keyword)) {
					showlist = [...showlist, listData[i]]
				}
			}

			this.setState({
				showlist: showlist
			})
		}
		else {
			this.setState({
				showlist: this.state.listData
			})
		}
	}

	handleSerach = (value) => {
		console.log(value)
		this.props.getSearchData(value)
	}

	handleClickNav = (e) => {
		// console.log('click ', e);

		const { browserItems } = store.getState();
		console.log(browserItems)
		switch (e.key) {
			case 'physical':

				this.setState({ currentNav: 'physical' })
				this.props.getNavData(this.state.currentNav)

				const physicalBrowserItems = browserItems.filter((browserItemObj) => {

					return browserItemObj.form === true
				}
				)
				this.setState({ currentNav: 'physical' })
				this.props.getNavData(this.state.currentNav)
				console.log(physicalBrowserItems, this.state)

				break;

			case 'virtual':

				this.setState({ currentNav: 'virtual' })
				this.props.getNavData(this.state.currentNav)

				const virtualBrowserItems = browserItems.filter((browserItemObj) => {
					return browserItemObj.form === false
				})
				console.log(virtualBrowserItems, this.state)

				break;

			case 'all':

				this.setState({ currentNav: 'all' });
				this.props.getNavData(this.state.currentNav)
				console.log(browserItems, this.state)
				return browserItems;

			default:
				return browserItems;

		}
	}

	render() {

		// 搜索框条件渲染
		const Item = this.state.showlist.map((item, index) => {
			return <p key={index}>{item}</p>
		}
		)

		return (
			<div className='main-nav'>
				<div className='main-nav-button'>
					<Menu className='main-nav-menu' onClick={this.handleClickNav} selectedKeys={[this.state.currentNav]} mode="horizontal" items={items} />

					<div className='main-nav-input'>
						<Space direction="vertical">
							<Search
								onChange={this.search.bind(this)}
								placeholder={'输入操作系统名称'}
								onSearch={this.handleSerach}
								size="large"
								style={{
									width: 200,
								}}
							/>
							<ul className='input-ul'>{Item}</ul>
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
