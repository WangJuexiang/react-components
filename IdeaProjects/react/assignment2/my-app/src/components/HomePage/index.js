import React, { Component } from 'react';
import AsideNav from './AsideNav';
import { UserOutlined, CameraOutlined, CloudDownloadOutlined } from '@ant-design/icons';
import './index.css'





export default class HomePage extends Component {
	render() {
		return (
			<div>
				<aside>
					<div className='homepage'>
						<UserOutlined style={{ color: "#FFFFFF", fontSize: "150%", marginRight: '20px' }} />
						<AsideNav content={'主页'} />
					</div>
					<div className='hotspot'>
						<CameraOutlined style={{ color: "#FFFFFF", fontSize: "150%", marginRight: '20px' }} />
						<AsideNav content={'热点'} />
					</div>
					<div className='usercenter'>
						<CloudDownloadOutlined style={{ color: "#FFFFFF", fontSize: "150%", marginRight: '20px' }} />
						<AsideNav content={'我的'} />

					</div>
				</aside>
				<header>
					header
				</header>
				<main>
					<section>
						list

					</section>
					<section>
						content
					</section>

				</main>

				<footer>footer</footer>

			</div>
		)
	}
}
