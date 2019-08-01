import React from 'react';
import { render } from 'react-dom';
import ToDoList from './components/ToDoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import configureStore from './redux/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

render(
	<Provider store={store}>
		<ToDoList />
	</Provider>,
	document.getElementById('root')
);
