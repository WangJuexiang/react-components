import { ADD_PERSON } from '../constant'

//初始化人的列表
const initState = [{ id: '001', name: 'tom', age: 18 }]

export default function personReducer(preState = initState, action) {
	// console.log('personReducerfghjkhjk');
	const { type, data } = action
	switch (type) {
		case ADD_PERSON:
			return [data, ...preState]
		// preState.unshift(data)
		// return preState

		default:
			return preState
	}
}
