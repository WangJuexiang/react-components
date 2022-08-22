import React, { Component } from 'react';
import { CopyrightOutlined } from '@ant-design/icons';
import "./index.css"

export default class Footer extends Component {
	render() {
		return (
			<div className='footer'>
				<CopyrightOutlined />
				Copyright 2017 Thoughtworks
			</div>



		)
	}
}


