export default function taskReducer(state = [], action) {
	switch (action.type) {
		case 'CREATE_TASK':
			return [
				...state,
				{
					...action.task
				}
			];

		case 'DELETE_TASK':
			return state.filter(
				({ description }) => description !== action.task.description
			);

		default:
			return state;
	}
}
