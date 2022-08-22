import React, { Component } from 'react';
import "./index.css"


export default class MainHeaderStatistics extends Component {
	render() {

		return (
			<div>
				<div className='main-header-statistics'>

					<div className='main-header-statistics-all'>
						<div>
							{this.props.all}
						</div>
						<div className='main-header-statistics-all-figure'>
							{this.props.allFigure}
						</div>

					</div>
					<div className='main-header-statistics-physical'>
						<div>
							{this.props.physical}
						</div>
						<div className='main-header-statistics-physical-figure'>
							{this.props.physicalFigure}
						</div>
					</div>

					<div className='main-header-statistics-virtual'>
						<div>
							{this.props.virtual}
						</div>
						<div className='main-header-statistics-virtual-figure'>
							{this.props.virtualFigure}
						</div>
					</div>

				</div>
			</div>
		)
	}
}
