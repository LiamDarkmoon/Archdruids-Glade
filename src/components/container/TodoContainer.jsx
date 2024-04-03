import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../../store/actions/actions';
import TodoList from '../pure/TodoList';
 

const filterTodos = (todos, filter) => {

    switch (filter) {

        case 'SHOW_ALL':
            return todos
            
        case 'SHOW_ACTIVE':
            return todos.filter((todos) => !todos.complete);
            
        case 'SHOW_COMPLETED':
            return todos.filter((todos) => todos.complete);
            
        default:
            return todos;
    }
}

const mapStateToProps = (state) => {

    return {
        todos: filterTodos(state.todoR, state.filterR)
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    }
}

const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default TodoContainer;