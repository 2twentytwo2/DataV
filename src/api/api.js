import request from '@/networks/request'

export const get = (params) => { return request({ url: 'http://10.169.71.38:8000/blog/barChart', method: 'get', params }) }
export const post = (data) => { return request({ url: '地址', method: 'post', data }) }


export default  {get,post}
