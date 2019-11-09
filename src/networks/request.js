import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'


  const service = axios.create({
    // baseURL: '',
    timeout:5000,
    headers: {
      'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [
      function(data) {
        // 在请求之前对data传参进行格式转换
        return qs.stringify(data)
      }
    ]
  })
  service.interceptors.request.use(
    config => {
      return config
    },
    err => {
      console.log(err);
      return Promise.reject(err)
    }

  )
  service.interceptors.response.use(
    res =>{
      if(res.code === -1) {
        return Promise.reject(res)
      }
      else {
        return res.data
      }
    },
    err =>{
      console.log(err);
      return Promise.reject(err)
    }
  )
export default service
