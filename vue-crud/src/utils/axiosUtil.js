/* 在上一节课程中，我们成功的搭建了新增课程的页面，并成功使用Axios发送POST请求，
但是呢，使用Axios的方式是有些许的问题的。通常在一个企业级或者个人开源的项目中，Axios会被二次封装。

二次封装的好处有哪些呢？

统一 url 配置
统一 api 请求
request (请求)拦截器，例如：带上token等，设置请求头
response (响应)拦截器，例如：统一错误处理，页面重定向等
统一处理http错误码和自定义的code
话不多说，我们直接开始吧！ */


import axios from "axios"
let axiosInstance = axios.create({
    baseURL:process.env.VUE_APP_APIURL,
    headers:{
        "Content-type":"application/json"
    },
     // 设置超时时间
     timeout: 10000,

})

//添加请求拦截器
axiosInstance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    console.log("我是请求拦截器")
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});


axiosInstance.interceptors.response.use(function (response) {
    let data;
    // IE9时response.data是undefined，因此需要使用response.request.responseText(Stringify后的字符串)
    if (response.data == undefined) {
        data = response.request.responseText
    } else {
        data = response.data
    }
  
    // 对响应数据做点什么
    return data;
}, function (err) {
    console.log("接收到结果")

    if (err && err.response) {
        console.log(err.response.status)
        switch (err.response.status) {
            case 400:
            err.message = '请求错误'
            break
    
            case 401:
            err.message = '未授权，请登录'
            break
    
            case 403:
            err.message = '拒绝访问'
            break
    
            case 404:
            err.message = `请求地址出错: ${err.response.config.url}`
            break
    
            case 408:
            err.message = '请求超时'
            break
    
            case 500:
            err.message = '服务器内部错误'
            break
    
            case 501:
            err.message = '服务未实现'
            break
    
            case 502:
            err.message = '网关错误'
            break
    
            case 503:
            err.message = '服务不可用'
            break
    
            case 504:
            err.message = '网关超时'
            break
    
            case 505:
            err.message = 'HTTP版本不受支持'
            break
    
            default:
        }
    }

    // 对响应错误做点什么
    return Promise.reject(err);
});

 

export default axiosInstance;
