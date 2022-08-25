import React, { Component } from 'react';
import AsideNav from './AsideNav';
import ArticleList from './ArticleList';
import { Button } from 'antd';
import { UserOutlined, CameraOutlined, CloudDownloadOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import './index.css'
const { TextArea } = Input;

export default class HomePage extends Component {
	render() {
		return (
			<div>
				<div className='homepage'>
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

					<section className='homepage-body'>

						<header>

						</header>
						<main className='homepage-main'>
							<section className='list'>
								<div className='article-list'>
									<ArticleList />
								</div>



							</section>
							<section className='content'>
								<div className='title-input'>
									<Input placeholder="Please input the title" />
								</div>
								<div className='content-input'>
									<TextArea placeholder='What do you want to write...' rows={21} />
								</div>

								<div className='content-button'>
									<div className='cancel-button'>
										<Button>Cancel</Button>
									</div>
									<div>

										<Button className='confirm-button' type="primary">Confirm</Button>
									</div>


								</div>

							</section>

						</main>

					</section>

				</div>

				{/* <footer>footer</footer> */}

			</div>
		)
	}
}
