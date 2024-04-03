import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../store/actions/actions'
import TodoForm from '../pure/forms/TodoForm'


const mapStateToProps = (state) => {
    
    return {}
}

const mapDispatchToProps = (dispatch) => {
    
    return {
        submit: (text) => {
            dispatch(addTodo(text))
        }
    }
}


export const TodoFormContainer = connect(mapStateToProps, mapDispatchToProps)(TodoForm)

export default TodoFormContainer