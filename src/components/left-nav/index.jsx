import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Menu } from 'antd'
import menuList from '../../config/menuConfig'
import iconMap from '../../utils/iconMap'
import './index.less'
const { SubMenu } = Menu

class LeftNav extends Component {
	// 根据menuList 生成菜单
	getMenuNodes = (menuList) => {
		// 得到当前请求路径
		const path = this.props.location.pathname
		return menuList.map((item) => {
			// 没有children属性
			if (!item.children) {
				return (
					<Menu.Item key={item.key}>
						<Link to={item.key}>
							{iconMap[item.icon]}
							<span>{item.title}</span>
						</Link>
					</Menu.Item>
				)
				// 有 children属性
			} else {
				// 有children才需要展开，没有展开个毛。查找其children，当前url中的路径和menuConfig中的匹配时，返回chilren项，然后将父item的key作为openKey
				const cItem = item.children.find(cItem => 
					path.indexOf(cItem.key) === 0
				)
				if (cItem) {
					this.openKey = item.key
				}

				return (
					<SubMenu
						key={item.key}
						title={
							<span>
								{iconMap[item.icon]}
								<span>{item.title}</span>
							</span>
						}
					>
						{this.getMenuNodes(item.children)}
					</SubMenu>
				)
			}
		})
	}

	// 第一次加载时渲染一次，避免在render中不必要得渲染
	componentWillMount() {
		this.menuNodes = this.getMenuNodes(menuList)
	}

	render() {
		// debugger
		let path = this.props.location.pathname
		console.log(path)
		if (path.indexOf('/product') === 0) {
			// 当前请求的是商品或其子路由界面
			path = '/product'
		}
		if (path === '/'){
			path = '/home'
		}
		const openKey = this.openKey
		return (
			<div className="left-nav">
				<Link to="/home" className="left-nav-header">
					<h2>react admin</h2>
				</Link>
				<Menu
					defaultSelectedKeys={[path]}
					defaultOpenKeys={[openKey]}
					mode="inline"
					theme="dark"
				>
					{this.menuNodes}
				</Menu>
			</div>
		)
	}
}

export default withRouter(LeftNav)
