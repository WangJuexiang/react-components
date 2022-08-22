import React, { Component } from 'react';
import store from '../../redux/store';
import MainHeaderStatus from './MainHeader/MainHeaderStatus';
import MainNav from './MainNav';
import MainItem from './MainItem';
import MainHeaderStatistics from './MainHeader/MainHeaderStatistics';
import "./index.css"

export default class Main extends Component {

	//redux实现页面重新渲染更新
	componentDidMount() {
		store.subscribe(() => {
			this.setState({});
		});
	}

	//页面map时的默认状态：导航为all，关键字为b
	constructor(props) {
		super(props);
		this.state = {
			getCurrentNav: 'all',
			getCurrentKeyword: 'b'
		}
	}

	//Main组件传给子组件MainNav的方法，子组件点击切换导航事件后修改父组件State
	getNavData = (msgNav) => {
		this.setState({
			getCurrentNav: msgNav
		})
	}

	//Main组件传给子组件MainNav的方法，子组件点击搜索事件后修改父组件State
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

		const keyWord = this.state.getCurrentKeyword
		//从数组所有元素中筛选出含输入内容的数组
		const allSearchBrowserItems = browserItems.filter((browserItemObj) => {
			return browserItemObj.name.includes(keyWord);
		})

		//从属性为physical的元素中筛选出含输入内容的数组

		const physicalSearchBrowserItems = physicalBrowserItems.filter((browserItemObj) => {
			return browserItemObj.name.includes(keyWord);
		})

		//从属性为virtual的元素中筛选出含输入内容的数组

		const virtualSearchBrowserItems = virtualBrowserItems.filter((browserItemObj) => {
			return browserItemObj.name.includes(keyWord);
		})


		return (

			<div className='main'>
				<div className='main-header'>
					<div className='building'>
						<MainHeaderStatus number={buildingBrowserItems.length} text={"Building"} />

					</div>

					{/* 测试区块，通过点击来打印对应内容  */}
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

				{/* MainItem内容通过条件渲染来实现 */}
				{/* 给子组件传递browserItem的全部属性 */}
				<div>
					{
						this.state.getCurrentNav === 'all' &&
						allSearchBrowserItems.map((browserItem) => {
							return <MainItem key={browserItem.id} {...browserItem} />
						})
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
