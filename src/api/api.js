import request from '@/networks/request'

export const get = (params) => { return request({ url: 'http://10.169.86.242:8000/score/college', method: 'get', params }) }
export const getLocation = (params) => { return request({ url: 'http://13.68.117.147:8000/volunteer/location', method: 'get', params }) }
export const post = (data) => { return request({ url: '地址', method: 'post', data }) }
export const method = {}

export default  {get,post,getLocation}
