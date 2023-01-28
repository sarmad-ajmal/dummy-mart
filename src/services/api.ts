import { create } from 'apisauce'
import type { ApiResponse, ApisauceInstance } from 'apisauce'
import type { AxiosRequestConfig } from 'axios'

import { isString } from '../common/utils'

export class APIService {
  errorMessage = ''
  api: ApisauceInstance = create({
    baseURL: 'https://dummyjson.com/',
    headers: { 'Content-Type': 'application/json' },
  })
  get(url: string, params?: {}, axiosConfig?: AxiosRequestConfig) {
    this.api.get(url, params, axiosConfig)
  }
  async post(url: string, data?: any, config?: AxiosRequestConfig) {
    const res = await this.api.post(url, data, config)
    const resData = await this.processResponse(res, false)
    return resData
  }
  delete(url: string, data?: any, config?: AxiosRequestConfig) {}
  put(url: string, data?: any, config?: AxiosRequestConfig) {}

  getMessage = (error: string | null) => {
    if (error === 'TIMEOUT_ERROR') {
      return 'No Response From Server.'
    } else if (error === 'CONNECTION_ERROR') {
      return 'Server Is Not Available.'
    } else if (error === 'NETWORK_ERROR') {
      return 'Network not available.'
    } else if (error === 'CANCEL_ERROR') {
      return 'Request Cancelled'
    } else {
      return 'Something went wrong. Please try again'
    }
  }

  processResponse(response: ApiResponse<any>, showError: boolean) {
    const {
      status = 200,
      data: resData = null,
      ok = false,
      problem = 'TIMEOUT_ERROR',
      headers = {},
    } = response || {}
    if (ok && status && status >= 200 && status <= 300) {
      return { error: false, res: resData, statusCode: status }
    } else {
      let message = ''
      if (resData) {
        if ((headers['content-type'] || '').startsWith('text/html')) {
          message = 'Invalid Response From Server'
        } else if (typeof resData.error === 'object' && resData.error.message) {
          message = resData.error.message
        } else if (resData.message) {
          message = resData.message
        } else if (typeof resData.error === 'string') {
          message = resData.error
        } else if (resData.msg) {
          message = resData.msg
        } else if (isString(resData)) {
          message = resData
        } else {
          message = this.getMessage(resData)
        }
      } else {
        message = this.getMessage(problem)
      }
      if (showError) {
        this.errorMessage = message
      }
      const { data = {} } = resData || {}
      throw { error: true, message, statusCode: status, data }
    }
  }
}
