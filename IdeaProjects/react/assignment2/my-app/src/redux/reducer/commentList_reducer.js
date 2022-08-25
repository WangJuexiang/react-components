import { nanoid } from 'nanoid';


const initState = {

	commentItems: [
		{
			commentId: nanoid(),
			commentUser: 'liyu',
			commentContent: '1111',

		}
	]

};

export default function commenListReducer(preState = initState, action) {

	const { type, data } = action;

	switch (type) {

		case '':

			return {

			}

		default:
			return;
	}

}

