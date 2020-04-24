import React, { Component } from 'react'
import { Button } from 'antd'
import './index.less'
import { memoryStorage } from '../../utils/memoryUtils'
class Header extends Component {
	state = {}
	render() {
		return (
			<div className="header">
				<div className="header-top">
					<span className="vendor-name">
						hello, {memoryStorage.user.username}
					</span>
					<Button size="small">退出</Button>
				</div>
				<div className="header-bottom">
					<div className="tab">首页</div>
					<div className="weather">天气</div>
				</div>
			</div>
		)
	}
}

export default Header
