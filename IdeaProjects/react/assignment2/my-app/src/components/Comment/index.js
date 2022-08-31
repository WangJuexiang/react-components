import React, { Component } from 'react';
import { Button } from 'antd';
import { Input } from 'antd';
import User from '../UI/img/user.png'
import CommentList from './CommentList';
import './index.css'
const { TextArea } = Input;



export default class Comment extends Component {
	render() {
		return (
			<div className='commentpage-body'>
				<header>
					<Button className='return-button' type="primary">返回</Button>
				</header>
				<main>
					<div>
						<p>This is title</p>
						<section className='article-content'>
							<TextArea rows={13} />

						</section>

					</div>
					<section className='comment-content'>
						<p className='comment-figure'>2 replies</p>
						<CommentList />
						<CommentList />
						<div className='user-operator'>
							<img className='user-img' src={User} alt='weibo' />

							<div className='comment-writing-area'>


								<TextArea rows={4} />
							</div>
						</div>

						<Button className='addcomment-button' type="primary">点击添加评论</Button>
					</section>

				</main>
			</div>
		)
	}
}
