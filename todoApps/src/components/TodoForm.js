import React, {Component} from 'react'
import PropTypes from 'prop-types'

const TodoForm = ({ onChangeText, onKeyPress, value }) => {
  return (
    <div>
      <span>new task:</span>
      <input
        type="text"
        value={value}
        onKeyDown={onKeyPress}
        onChange={onChangeText}
      />
    </div>
  );
};


export default TodoForm;
