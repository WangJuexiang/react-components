import React, { Component } from 'react'
import { Button } from 'antd';
import './index.css'


export default class CommentList extends Component {
	render() {
		return (
			<div className='comment-detail-body'>
				<div className='user-detail'>
					<div className='user-name'>
						liyu
					</div>
					<div className='user-comment'>
						111

					</div>

				</div>
				<Button className='delete-button' type="text">delete</Button>


			</div>
		)
	}
}
