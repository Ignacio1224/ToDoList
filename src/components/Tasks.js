import React from 'react';
import Task from './Task';

class Tasks extends React.Component {
	render() {
		const { tasks, remove } = this.props;

		return tasks.map((task, index) => (
			<React.Fragment key={index}>
				<hr />
				<Task description={task.description} remove={remove} />
			</React.Fragment>
		));
	}
}

export default Tasks;
