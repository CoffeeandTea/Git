import React from 'react'
import PropTypes from 'prop-types'

const Link = ({active,children,onClick}) => {
    // 这里是一个条件渲染
    if(active) {
        return <span>{children}</span>
    }
    return (
        <a href="" onClick={e => {e.preventDefault(); onClick()}}>{children}</a>
    )
}
Link.propTyps = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,    // node是什么鬼啊
    onClick: PropTypes.func.isRequired
}
export default Link     // 写好Link组件暴露出去