import axios,  {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios'
import {message} from 'ant-design-vue'

interface ResponseData<T> {
  code: number
  data: T
  message: string
}

const service: AxiosInstance = axios.create({
  baseURL: "/apis",
  timeout: 60000,
})

service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
      const userStore = useUserStore()
      const {token} = userStore.state
      if (token) {
          config.headers['Token'] = token
          config.headers['x-app'] = `0xbot studio`
      }
      return config
  },
  (error: any) => {
      message.error(error.message)
      return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response: AxiosResponse) => {
      const userStore = useUserStore()
      const res = response.data
      if (res.code !== 0) {
          message.error(res.message)
      }
      if( res.code==401){
          userStore.logout()
      }
      return res
  },
  (error: any) => {
      message.error(error.message)
      return Promise.reject(error)
  }
)

export function get<T = any>(
  url: string,
  params?: any,
  config?: AxiosRequestConfig
): Promise<ResponseData<T>> {
  return service.get(url, {params, ...config})
}

export function post<T = any>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<ResponseData<T>> {
  return service.post(url, data, {...config})
}

export default service