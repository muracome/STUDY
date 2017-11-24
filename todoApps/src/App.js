import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: '',
      editTarget: null,
      todo: this._readData(),
    };
  }
  componentDidMount() {
    this._readData();
  }
  _readData() {
    console.log((localStorage.getItem('localTodo')));
    return JSON.parse(localStorage.getItem('localTodo'));
  }       
  _onChangeText(e) {
    this.setState({newTodo: e.target.value});
  }
  _onKeyPress(e) {
    if(e.keyCode === 13 && e.target.value.trim().length > 0) {
      this.state.todo.push(e.target.value.trim());
      localStorage.setItem('localTodo', JSON.stringify(this.state.todo));
      this.setState({newTodo: ''});
    }
  }
  _onDoubleClickItem(e) {
    this.setState({editTarget: parseInt(e.target.dataset.row, 10)});
  }
  _onUpdateText(e) {
    this.state.todo[e.target.dataset.row] = e.target.value;
    this.setState({todo: this.state.todo});
  }
  _onUpdating(e) {
    if(e.keyCode === 13 && e.target.value.trim().length > 0) {
      localStorage.setItem('localTodo', JSON.stringify(this.state.todo));
      this.setState({editTarget: null});
    }
  }

  render() {
    return (
      <div className="App">
        <TodoForm
          onChangeText={this._onChangeText.bind(this)}
          onKeyPress={this._onKeyPress.bind(this)}
          value={this.state.newTodo}
        />
        <TodoList
          onDoubleClick={this._onDoubleClickItem.bind(this)}
          todoList={this.state.todo}
          editTarget={this.state.editTarget}
          onChangeText={this._onUpdateText.bind(this)}
          onUpdating={this._onUpdating.bind(this)}
        />
      </div>
    );
  }
}

App.propTypes = {
};

export default App
