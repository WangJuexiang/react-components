import React, { Component } from 'react';
import store from '../../redux/store';
import { deleteItemAction } from '../../redux/browserlist_action';
import PropTypes from "prop-types";

import MainHeaderStatus from './MainHeader/MainHeaderStatus';
import MainNav from './MainNav';
import MainItem from './MainItem';
import MainHeaderStatistics from './MainHeader/MainHeaderStatistics';
import Windows from '../../img/windows.png';
import Ubuntu from '../../img/ubuntu.png';
import Debin from '../../img/debin.png';
import Suse from '../../img/suse.png';
import CentOS from '../../img/cent_os.png';
import "./index.css"


export default class Main extends Component {

	componentDidMount() {
		store.subscribe(() => {
			this.setState({});
		});
	}

	// static propTypes = {
	// 	browserItems: PropTypes.array,
	// 	deleteItem: PropTypes.func,
	// }

	deleteItem = (id) => {

		const { browserItems } = store.getState();

		const newBrowserItems = browserItems.filter((browserItem) => {
			return browserItem.id !== id;
		});

		store.dispatch(deleteItemAction(newBrowserItems))
	}



	render() {
		const { deleteItem } = this.props;
		const { browserItems } = store.getState();
		console.log(browserItems, '234567890');
		return (

			<div className='main'>
				<div className='main-header'>
					<div className='building'>
						<MainHeaderStatus number={"3"} text={"Building-------"} x />
					</div>
					<div className='idle'>
						<MainHeaderStatus number={"5"} text={"Idle"} />
					</div>
					<div className='form-figure'>
						<MainHeaderStatistics
							all={"ALL"}
							allFigure={8}
							physical={"PHYSICAL"}
							physicalFigure={4}
							virtual={"VIRTUAL"}
							virtualFigure={4} />
					</div>
				</div>
				<MainNav />
				<div>
					{
						browserItems.map(browserItem => {
							return <MainItem key={browserItem.id} {...browserItem} deleteItem={deleteItem} />
						})
					}
				</div>

				{/* <MainItem
					img={Windows}
					url={'bjstdmngbgr01.thoughtworks.com'}
					status={'idle'}
					ip={'192.168.1.101'}
					location={'/var/lib/cruise-agent'}
				/>
				<MainItem
					img={Windows}
					url={'bjstdmngbgr02.thoughtworks.com'}
					status={'building'}
					ip={'192.168.1.102'}
					location={'/var/lib/cruise-agent'}
				/>
				<MainItem
					img={Ubuntu}
					url={'bjstdmngbgr03.thoughtworks.com'}
					status={'building'}
					ip={'192.168.1.103'}
					location={'/var/lib/cruise-agent'}
				/>
				<MainItem
					img={Debin}
					url={'bjstdmngbgr04.thoughtworks.com'}
					status={'building'}
					ip={'192.168.1.104'}
					location={'/var/lib/cruise-agent'}
				/>
				<MainItem
					img={Suse}
					url={'bjstdmngbgr05.thoughtworks.com'}
					status={'idle'}
					ip={'192.168.1.105'}
					location={'/var/lib/cruise-agent'} />
				<MainItem
					img={CentOS}
					url={'bjstdmngbgr06.thoughtworks.com'}
					status={'idle'}
					ip={'192.168.1.106'}
					location={'/var/lib/cruise-agent'}
				/> */}
			</div>
		)
	}
}
