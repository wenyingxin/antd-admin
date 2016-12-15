import { request } from '../utils'
import qs from 'qs'

export async function login(params) {
	console.log(JSON.stringify(params))
	return request('/api/login',{
		method:'post',
		data:params,
	})
}