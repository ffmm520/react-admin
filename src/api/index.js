// 封装请求方法
import ajax from './ajax'

const baseUrl = ''
export const reqLogin = (username, password) => ajax(baseUrl + '/login', {username,password},'POST') 