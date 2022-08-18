import React, { Component } from 'react';
import store from '../../redux/store';
// import { deleteItemAction, addBrowserIconAction } from '../../redux/browserlist_action';

import MainHeaderStatus from './MainHeader/MainHeaderStatus';
import MainNav from './MainNav';
import MainItem from './MainItem';
import MainHeaderStatistics from './MainHeader/MainHeaderStatistics';

// import Windows from '../../img/windows.png';
// import Ubuntu from '../../img/ubuntu.png';
// import Debin from '../../img/debin.png';
// import Suse from '../../img/suse.png';
// import CentOS from '../../img/cent_os.png';

import "./index.css"

export default class Main extends Component {

	componentDidMount() {
		store.subscribe(() => {
			this.setState({});
		});
	}

	constructor(props) {
		super(props);
		this.state = {
			getCurrentNav: 'all',
			getCurrentKeyword: 'b'
		}
	}

	// addBrowserIcon = (browserIcon) => {

	// 	const { browsericons } = store.getState();
	// 	const newBrowserIcons = [browserIcon, ...browsericons];
	// 	store.dispatch(addBrowserIconAction(newBrowserIcons));

	// }

	getNavData = (msgNav) => {
		this.setState({
			getCurrentNav: msgNav
		})
	}

	getSearchData = (msgKeyword) => {
		this.setState({
			getCurrentKeyword: msgKeyword
		}
		)
	}

	//打印测试
	clickTest = () => {

		const { browserItems } = store.getState()

		console.log('父组件状态:', this.state.getCurrentNav, this.state.getCurrentKeyword, browserItems)
	}

	render() {
		//nav条件渲染
		const { browserItems } = store.getState();

		//属性值为idle的数组
		const idleBrowserItems = browserItems.filter((browserItemObj) => {
			return browserItemObj.status === true
		}
		)

		//属性值为buidling的数组
		const buildingBrowserItems = browserItems.filter((browserItemObj) => {
			return browserItemObj.status === false
		}
		)

		//属性值为virtual的数组
		const virtualBrowserItems = browserItems.filter((browserItemObj) => {
			return browserItemObj.form === false
		})

		//属性值为physical的数组
		const physicalBrowserItems = browserItems.filter((browserItemObj) => {

			return browserItemObj.form === true
		})

		//key 条件渲染

		//将输入内容赋值给keyWord变量

		const keyWord = this.state.getCurrentKeyword

		//筛选出含输入内容的数组
		const allSearchBrowserItems = browserItems.filter((browserItemObj) => {
			return browserItemObj.name.includes(keyWord);
		})

		const physicalSearchBrowserItems = physicalBrowserItems.filter((browserItemObj) => {
			return browserItemObj.name.includes(keyWord);
		})

		const virtualSearchBrowserItems = virtualBrowserItems.filter((browserItemObj) => {
			return browserItemObj.name.includes(keyWord);
		})

		// const searchBrowserItems = browserItems.filter((browserItemObj) => {
		// 	return browserItems.includes(searchBrowserItems)
		// });

		console.log(keyWord, allSearchBrowserItems)


		return (

			<div className='main'>
				<div className='main-header'>
					<div className='building'>
						<MainHeaderStatus number={buildingBrowserItems.length} text={"Building"} />

					</div>
					{/* 点击打印测试区块  */}
					<div className='idle' onClick={this.clickTest}>
						<MainHeaderStatus number={idleBrowserItems.length} text={"Idle"} />

					</div>
					<div className='form-figure'>
						<MainHeaderStatistics

							all={"ALL"}
							allFigure={browserItems.length}
							physical={"PHYSICAL"}
							physicalFigure={physicalBrowserItems.length}
							virtual={"VIRTUAL"}
							virtualFigure={virtualBrowserItems.length} />
					</div>
				</div>
				<MainNav getNavData={this.getNavData.bind(this)} getSearchData={this.getSearchData.bind(this)} />

				<div>

					{
						this.state.getCurrentNav === 'all' &&

						allSearchBrowserItems.map((browserItem) => {
							return <MainItem key={browserItem.id} {...browserItem} />


						})
						// browserItems.map(browserItem => {
						// 	return <MainItem key={browserItem.id} {...browserItem} />
						// })
					}
				</div>

				<div>
					{
						this.state.getCurrentNav === 'physical' &&

						physicalSearchBrowserItems.map(browserItem => {
							return <MainItem key={browserItem.id} {...browserItem} />
						})
					}
				</div>

				<div>
					{
						this.state.getCurrentNav === 'virtual' &&
						virtualSearchBrowserItems.map(browserItem => {
							return <MainItem key={browserItem.id} {...browserItem} />
						})
					}

				</div>
			</div >
		)
	}
}
