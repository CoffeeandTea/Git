// 将容器再放进一个组件中，这个组件就是App
import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'     // 容器组件
import VisibleTodoList from '../containers/VisibleTodoList'     // 容器组件

const App = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
)
export default App