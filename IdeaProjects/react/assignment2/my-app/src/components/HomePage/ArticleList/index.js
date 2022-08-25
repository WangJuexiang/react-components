import React, { Component } from 'react';
import { Button } from 'antd';
import './index.css'


export default class ArticleList extends Component {
	render() {
		return (
			<div className='article-list'>
				<div className='article-info'>
					<div className='article-title'>
						article title (25/8/2022)
					</div>
					<div className='article-content'>
						this is a published article
					</div>
				</div>
				<div className='comment-figure'>
					评论数:2
				</div>
				<div className='article-list-button'>
					<div className='edit-button'>
						<Button type="text">Edit</Button>

					</div>
					<div className='delete-button'>
						<Button type="text">Delete</Button>

					</div>

				</div>
			</div>
		)
	}
}
