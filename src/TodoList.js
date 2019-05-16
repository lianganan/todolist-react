import React,{Component} from "react";
import { Input, List, Button } from "antd";
import store from './store'
import {getChangeInputAction, getCommitInputAction}from './store/actionCreator'

class TodoList extends Component {
  constructor(props){
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCommit = this.handleCommit.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.state = store.getState();
    store.subscribe(this.handleStoreChange)
    console.log(store.getState());
    
  }
  render(){
    return (
      <div className="App">
        <div>
          <Input value={this.state.inputValue} onChange={this.handleInputChange} style={{width:'300px',margin:'10px 0'}} />
          <Button onClick={this.handleCommit} style={{marginLeft:'10px'}} type="primary">Primary</Button>
        </div>
        <List
          style={{width:'300px'}}
          bordered
          dataSource={this.state.list}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
      </div>
    );
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
}

export default TodoList;
