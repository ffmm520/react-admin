// 新增localStorage
const USER_KEY = 'user_key'
export const addStorage = (user) => {
  localStorage.setItem(USER_KEY, JSON.stringify(user))
}

// 读取localStorage
export const getStorage = () => {
  return JSON.parse(localStorage.getItem(USER_KEY) || '{}')
}

// 删除localStorage
export const removeStorage = () => {
  localStorage.removeItem(USER_KEY)
}