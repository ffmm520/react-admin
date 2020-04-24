import React, { Component } from 'react'
import { Layout } from 'antd'
import { Redirect, Switch, Route } from 'react-router-dom'

import { memoryStorage } from '../../utils/memoryUtils'
import Header from '../../components/header'
import LeftNav from '../../components/left-nav'
import Home from '../home'
import Category from '../category'
import Product from '../product'
import User from '../user'
import Role from '../role'
import Bar from '../charts/bar'
import Pie from '../charts/pie'
import Line from '../charts/line'
import Order from '../order'
import NotFound from '../not-found'

const { Footer, Sider, Content } = Layout

class Admin extends Component {
	render() {
		const user = memoryStorage.user
		if (!user || !user._id) {
			return <Redirect to="/login" />
		}
		return (
			<Layout style={{ minHeight: '100%', color: '#f1f1f1' }}>
				<Sider>
					<LeftNav />
				</Sider>
				<Layout>
					<Header />
					<Content
						style={{ margin: '20px', backgroundColor: '#fff', color: 'red' }}
					>
						<Switch>
							<Redirect from="/" exact to="/home"></Redirect>
							<Route path="/home" component={Home}></Route>
							<Route path="/category" component={Category} />
							<Route path="/product" component={Product} />
							<Route path="/user" component={User} />
							<Route path="/role" component={Role} />
							<Route path="/charts/bar" component={Bar} />
							<Route path="/charts/pie" component={Pie} />
							<Route path="/charts/line" component={Line} />
							<Route path="/order" component={Order} />
							<Route component={NotFound} />
						</Switch>
					</Content>
					<Footer>Footer</Footer>
				</Layout>
			</Layout>
		)
	}
}

export default Admin
