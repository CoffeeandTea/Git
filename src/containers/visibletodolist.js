// 实现容器组件

//现在来创建一些容器组件把这些展示组件和 Redux 关联起来。技术上讲，容器组件就是使用 store.subscribe() 从 Redux state 树中读取部分数据，并通过 props 来把这些数据提供给要渲染的组件。你可以手工来开发容器组件，但建议使用 React Redux 库的 connect() 方法来生成，这个方法做了性能优化来避免很多不必要的重复渲染。（这样你就不必为了性能而手动实现 React 性能优化建议 中的 shouldComponentUpdate 方法。）
// 使用connect()方法之前需要先定义mapStateToProps这个函数来指定如何把当前Redux store state映射到展示组件的
// props中，例如VisibleTodoList需要计算传递到TodoList中的todos，所以定义了根据state.visibilityFilter来过滤
// state.todos的方法，并在mapStateToProps中使用。

import {connect} from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos,filter) => {
    switch (filter) {
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
        case 'SHOW_ALL':
        default:
            return todos
    }
}

const mapStateToProps = state => {
    return {
        todos: getVisibleTodos(state.todos,state.visibilityFilter)
    }
}
// 除了读取state，容器组件还能分发action。类似的方法，可以定义mapDispatchToProps()方法接收dispatch()方法
// 并返回期望注入到展示组件的props中的回调放方法。例如，我们希望 VisibleTodoList 向 TodoList 组件中注入一个叫 onTodoClick 的 props ，还希望 onTodoClick 能分发 TOGGLE_TODO 这个 action：

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            dispatch(toggleTodo(id))
        }
    }
}

// 最后使用connect()创建VisibleTodoList 容器组件并传入这两个函数。

const VisibleTodoList = connect(mapStateToProps,mapDispatchToProps)(TodoList)

export default VisibleTodoList