
import React, { Component } from 'react'
import Weibo from '../UI/img/weibo.png'
import { Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './index.css'


export default class LoginPage extends Component {
	render() {
		return (
			<div>
				<div className='login-body'>
					<div>
						<img className='weibo' src={Weibo} alt='weibo' />

					</div>
					<div className='account'>
						<Input
							className='account-input'
							placeholder="邮箱/手机号"
							prefix={<UserOutlined className="site-form-item-icon" />}
						/>

					</div>
					<div className='password'>

						<Input
							className='password-input'
							type='password'
							placeholder="请输入密码"
							prefix={<LockOutlined className="site-form-item-icon" />}

						/>
					</div>
					<div>
						<button className='login-button'>登录</button>
					</div>
					<div>
						<span>
							<a href="https://weibo.com/signup/signup.php" rel="noopener noreferrer" target={'_blank'} >
								注册账号
							</a>

						</span>
						<span>丨</span>
						<span>
							<a href="https://security.weibo.com/iforgot/loginname?entry=weibo" rel="noopener noreferrer" target={'_blank'} >

								忘记密码

							</a>

						</span>
					</div>
				</div>


			</div >



		)
	}
}
