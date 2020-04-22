import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined} from '@ant-design/icons'
import './login.less'
class Login extends Component {
	handelSubmit = (value) => {
		console.log('submit:', value)
	}
	render() {
		return (
			<div className="login">
				<header className="login-header">My React Project</header>
				<section className="login-content">
					<h2>用户登录</h2>
					<Form
						name="normal_login"
						className="login-form"
						initialValues={{ username: "admin", password: "123123" }}
						onFinish={this.handelSubmit}
					>
						<Form.Item
							name="username"
							rules={[
								{ required: true, message: '请输入用户名' },
								{ min: 4, message: '用户名不能小于4位' },
							]}
              validateTrigger="onBlur"
              validateFirst={true}
						>
							<Input
								prefix={<UserOutlined className="site-form-item-icon" />}
								placeholder="用户名"
								className="login-input-username"
							/>
						</Form.Item>
						<Form.Item
							name="password"
              rules={[{ required: true, message: '请输入密码' }]}
              validateTrigger="onBlur"
						>
							<Input
								prefix={<LockOutlined className="site-form-item-icon" />}
								type="password"
								placeholder="密码"
								className="login-input-password"
							/>
						</Form.Item>
						<Form.Item>
							<Button
								type="primary"
								htmlType="submit"
								className="login-form-button"
							>
								登录
							</Button>
						</Form.Item>
					</Form>
				</section>
			</div>
		)
	}
}

export default Login
