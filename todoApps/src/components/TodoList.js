import React, {Component} from 'react'
import PropTypes from 'prop-types'

const TodoList = ({ onDoubleClick, todoList, editTarget, onChangeText, onUpdating }) => {
  return (
    <ul className='TodoList'>
      {todoList.map((item, key) => {
        if(key === editTarget) {
          return(
            <li key={key}>
              <input
                type='text'
                data-row={key}
                value={item}
                onChange={onChangeText}
                onKeyDown={onUpdating}
              />
            </li>
          )
        
        }
        return(
          <li
            key={key}
            onDoubleClick={onDoubleClick}
            data-row={key}
            >
            {item}
          </li>
        )
      }, this)}
    </ul>
  );
};


export default TodoList;
