import React,{Component} from "react";
import store from './store'
import {getChangeInputAction, getCommitInputAction, getDeleteListItemAction, getInitList}from './store/actionCreator'
import TodoListUi from './TodoListUi'


class TodoList extends Component {
  constructor(props){
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCommit = this.handleCommit.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = store.getState();//获取store里面的内容
    store.subscribe(this.handleStoreChange)//订阅store的改变
    console.log(store.getState());
    
  }
  render(){
    return (
      <TodoListUi inputValue={this.state.inputValue} handleInputChange={this.handleInputChange} handleCommit={this.handleCommit} list={this.state.list} handleDelete={this.handleDelete} />
    );
  }
  componentDidMount (){
      const action = getInitList();
      store.dispatch(action);
  }

  handleStoreChange(){
    this.setState(store.getState());
  }
  handleInputChange(e){    
    const action = getChangeInputAction(e.target.value);
    store.dispatch(action);
  }
  handleCommit(){
    const action = getCommitInputAction();
    store.dispatch(action);
  }
  handleDelete(index){
    const action = getDeleteListItemAction(index);
    store.dispatch(action);
  }
}

export default TodoList;
