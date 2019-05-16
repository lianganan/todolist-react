import React,{Component} from "react";
import { Input, List } from "antd";
import store from './store'

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = store.getState();
    console.log(store.getState());
    
  }
  render(){
    return (
      <div className="App">
        <div>
          <Input />
          
        </div>
        <List
          bordered
          dataSource={this.state.list}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
      </div>
    );
  }
}

export default TodoList;
