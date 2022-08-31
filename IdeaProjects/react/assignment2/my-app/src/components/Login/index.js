
import React, { Component } from 'react'
import { BrowserRouter, Route, Link, } from 'react-router-dom'
import Home from '../Home/index'
import Weibo from '../UI/img/weibo.png'
import { Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './index.css'


export default class Login extends Component {

	constructor(props) {
		super(props);
		this.state = {
			userAccount: '',
			userPassword: ''
		}
	}

	//获取用户输入账号
	accountChange = (e) => {
		this.setState({ userAccount: e.target.value })
	}

	//获取用户输入密码
	passwordChange = (e) => {
		// console.log(e.target.value)
		this.setState({ userPassword: e.target.value })

	}

	//当二者都不为空时跳转界面
	handleLogin = () => {
		console.log(this.state)
		if (this.state.userAccount && this.state.userPassword !== '') {
			this.props.history.push('/home')
		}
	}


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
							type='text'
							onChange={this.accountChange}
							placeholder="邮箱/手机号"
							prefix={<UserOutlined className="site-form-item-icon" />}
						/>

					</div>
					<div className='password'>

						<Input
							className='password-input'
							type='password'
							onChange={this.passwordChange}
							placeholder="请输入密码"
							prefix={<LockOutlined className="site-form-item-icon" />}

						/>
					</div>
					<div>

						<button className='login-button' onClick={this.handleLogin}>
							登录
						</button>
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
