
import {login} from '../services/app'
import {parse} from 'qs'

export default {
	namespace:'app',
	state:{
		login:false,
		loading:false,
		loginButtonLoading:false,
	},
	subscriptions:{

	},
	effects:{
		//后台请求
		*login({payload},{select,call,put}){
			yield put({type:'showLoginButtonLoading'})
			const data = yield call(login,parse(payload))
			if(data.success){
				yield put({
					type:'loginSuccess',
					payload:{data}
				})
			}else {
				yield put({
					type:'loginFail',
					payload:{data}
				})
			}

		},
	},
	reducers:{
		loginSuccess(state,action){
			return {
				...state,
				...action.payload,
				login:true,
				loginButtonLoading:false
			}
		},
		logoutSuccess(state,action){
			return {
				...state,
				login:false
			}
		},
		loginFail(state,action){
			return {
				...state,
				login:false,
				loginButtonLoading:false
			}
		},
		showLoginButtonLoading(state){
			return {
				...state,
				loginButtonLoading:true
			}
		},
		showLoading(state){
			return {
				...state,
				loading:true
			}
		},
		hideLoading(state){
			return {
				...state,
				loading:false
			}

		}


	}

}