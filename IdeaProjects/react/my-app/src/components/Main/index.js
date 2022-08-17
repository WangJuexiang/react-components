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
			getCurrentKeyword: 'every'
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

		console.log('父组件状态:', this.state.getCurrentNav, this.state.getCurrentKeyword, browserItems, browserItems.browserIcons,)
	}

	render() {
		//nav条件渲染
		const { browserItems } = store.getState();


		const idleBrowserItems = browserItems.filter((browserItemObj) => {
			return browserItemObj.status === true
		}
		)

		const buildingBrowserItems = browserItems.filter((browserItemObj) => {
			return browserItemObj.status === false
		}
		)

		const virtualBrowserItems = browserItems.filter((browserItemObj) => {
			return browserItemObj.form === false
		})
		const physicalBrowserItems = browserItems.filter((browserItemObj) => {

			return browserItemObj.form === true
		})

		//keyword条件渲染

		// const windowsBrowserItems = browserItems.filter((browserItemObj) => {
		// 	return browserItemObj.name = 'windows'
		// },

		// )

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
						this.state.getCurrentNav === 'all' ?

							browserItems.map(browserItem => {
								return <MainItem key={browserItem.id} {...browserItem} />
							})

							:

							this.state.getCurrentNav === 'physical' ?

								physicalBrowserItems.map(browserItem => {
									return <MainItem key={browserItem.id} {...browserItem} />
								})

								:

								virtualBrowserItems.map(browserItem => {
									return <MainItem key={browserItem.id} {...browserItem} />
								})
					}

				</div>
			</div>
		)
	}
}
