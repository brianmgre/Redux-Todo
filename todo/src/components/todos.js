import React from 'react';
import TodoForm from './todoForm';
import TodoList from './todoList';

const Todos = () => {
    return (
        <React.Fragment>
            <TodoForm />
            <TodoList />
        </React.Fragment>
    )
}

export default Todos;