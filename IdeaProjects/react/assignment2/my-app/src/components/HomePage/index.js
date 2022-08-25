import React, { Component } from 'react';
import './index.css'
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;





export default class HomePage extends Component {
	render() {
		return (
			<div>
				<Layout>
					<Header>Header</Header>
					<Layout>
						<Sider>Sider</Sider>
						<Content>Content</Content>
					</Layout>
					<Footer>Footer</Footer>
				</Layout>

			</div>
		)
	}
}
