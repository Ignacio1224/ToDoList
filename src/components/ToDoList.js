import React from 'react';
import Tasks from './Tasks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import * as taskActions from '../redux/actions/taskActions';

class ToDoList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			tasks: [{ description: 'Task 1' }, { description: 'Task 2' }],
			description: ''
		};
	}

	changeDescription = ({ target: { value } }) =>
		this.setState({ description: value });

	addTask = event => {
		event.preventDefault();

		let { description } = this.state;

		if (description) {
			// this.setState(({ tasks }) => ({ tasks: tasks.concat([{ description }]), description: '' }));
			this.props.dispatch(taskActions.createTask({ description }));
			this.setState({ description: '' });
		}
	};

	remove = description => {
		this.props.dispatch(taskActions.deleteTask({ description }));
	};

	render() {
		const { description } = this.state;
		const { tasks } = this.props;

		return (
			<div className='container mt-3'>
				<h1>ToDo List!</h1>
				<form onSubmit={this.addTask}>
					<div className='row'>
						<div className='col'>
							<input
								type='text'
								placeholder='Ingrese una tarea...'
								className='form-control'
								value={description}
								onChange={this.changeDescription}
							/>
						</div>
						<div className='col-sm-2'>
							<button className='btn btn-block btn-success'>
								<FontAwesomeIcon icon={faPlus} /> Add
							</button>
						</div>
					</div>
				</form>
				<Tasks tasks={tasks} remove={this.remove} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { tasks: state.tasks };
}

export default connect(mapStateToProps)(ToDoList);
