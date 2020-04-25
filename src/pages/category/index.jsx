import React, { Component } from 'react'
import { Alert } from 'antd'
class Category extends Component {
	state = {}
	render() {
		return (
			<div>
				<Alert message='Success Tips' type='warning' showIcon style={{width: "400px"}}/>
				<Alert
					message='Success Tips'
					description='Detailed description and advice about successful copywriting.'
					type='info'
					showIcon
				/>
			</div>
		)
	}
}

export default Category
