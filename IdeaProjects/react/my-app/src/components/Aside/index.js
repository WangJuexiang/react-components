import React, { Component } from 'react';
import AsideNav from './Aside_Nav';
import AsideHistory from './Aside_History';
import { DashboardOutlined, ClusterOutlined, IdcardOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import "./index.css"


export default class Aside extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = [
	// 		'DASHBOARD',
	// 		'AGENT',
	// 		'MY CRUISE',
	// 		'HELP'
	// 	]
	// }

	state = { mouse: false };

	handleMouse = (flag) => {
		return () => {
			this.setState({ mouse: flag })
		};
	};

	// handleMouseOver = () => {
	// 	document.getElementById('dashboard').className = 'dashboard-onmouseover';
	// }

	// handleMouseLeave = () => {
	// 	document.getElementById('dashboard').className = 'dashboard-default';
	// }


	render() {
		const { mouse } = this.state;
		return (
			<div className='aside'>
				<div>

					<a href="http://www.w3school.com.cn" target={'_blank'} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}	>

						<div className={mouse ? "dashboard-onmouseover" : "dashboard-default"}>
							<DashboardOutlined style={{ color: "#FFFFFF", fontSize: "150%" }} />
							<AsideNav content={'DASHBOARD'} />
						</div>
					</a>

					<a href="http://www.w3school.com.cn" target={'_blank'}	>

						<div className="agent-default">

							<ClusterOutlined style={{ color: "#FFFFFF", fontSize: "150%" }} />
							<AsideNav content={'AGENT'} iconName={'ClusterOutlined'} />
						</div>
					</a>

					<a href="http://www.w3school.com.cn" target={'_blank'}	>
						<div className='my-cruise'>
							<IdcardOutlined style={{ color: "#FFFFFF", fontSize: "150%" }} />
							<AsideNav content={'MY CRUISE'} />
						</div>
					</a>

					<a href="http://www.w3school.com.cn" target={'_blank'}	>
						<div className='help'>
							<QuestionCircleOutlined style={{ color: "#FFFFFF", fontSize: "150%" }} />
							<AsideNav content={'HELP'} />
						</div>
					</a>

				</div>
				<div>
					<AsideHistory />
				</div>
			</div >
		)
	}
}
