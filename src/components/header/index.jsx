import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Button, Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'

import { memoryStorage } from '../../utils/memoryUtils'
import { removeStorage } from '../../utils/storageUtils'
import './index.less'

const { confirm } = Modal
class Header extends Component {
	logout = () => {
		confirm({
			title: '确定退出吗?',
      icon: <ExclamationCircleOutlined />,
      okText: '确认',
      cancelText: '取消',
			onOk: () => {
				removeStorage()
				memoryStorage.user = {}
				this.props.history.replace('/login')
			}
		})
	}
	render() {
		return (
			<div className='header'>
				<div className='header-top'>
					<span className='vendor-name'>
						hello, {memoryStorage.user.username}
					</span>
					<Button size='small' onClick={this.logout}>
						退出
					</Button>
				</div>
				<div className='header-bottom'>
					<div className='tab'>首页</div>
					<div className='weather'>天气</div>
				</div>
			</div>
		)
	}
}

export default withRouter(Header)
