import { nanoid } from 'nanoid';

const initState = {

	listItems: [
		{
			articleId: nanoid(),
			articleTitle: 'article1',
			date: '2022/8/24',
			content: 'this is a published article',
			commentCount: 2
		}
	]

};

export default function articlListReducer(preState = initState, action) {

	const { type, data } = action;

	switch (type) {

		case '':

			return {

			}

		default:
			return;
	}

}

