// 规定登录窗口数据格式
export interface loginForm{
    username: string,
    password: string,
}

/*****************************************************************/

// 响应体
interface dataType{
    token: string   // 暂时只写一个 token 用于标识身份
}
// 规定登录窗口响应数据格式
export interface loginResponseData{
    code: number,   // 状态码
    data: dataType, // 响应体
}

/*****************************************************************/

// 规定用户信息数据格式
interface userInfo{
    userId: number,
    avatar: string,
    username: string,
    password: string,
    desc: string,
    roles: string[],
    buttons: string[],
    routes: string[],
    token: string,
}
// 这里暂时不理解为什么要拆出来一个checkUser
interface user{
    checkUser: userInfo
}
// 规定用户窗口响应数据格式
export interface userResponseData{
    code: number,   // 用户id
    data: user,     // 用户信息
}