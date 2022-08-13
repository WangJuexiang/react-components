import React, { Component } from 'react';
// import { DashboardOutlined, ClusterOutlined, IdcardOutlined, QuestionCircleOutlined } from '@ant-design/icons';

import "./index.css"

export default class AsideNav extends Component {
	render() {

		return (

			<div className='aside-nav'>
				{/* <this.props.iconName style={{ color: "#FFFFFF", fontSize: "150%" }} /> */}
				<p className='aside-nav-content'>{this.props.content}</p>

			</div>
		)
	}
}
