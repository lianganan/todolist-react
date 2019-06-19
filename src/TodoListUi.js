import React, { Component } from "react";
import { Input, List, Button } from "antd";

//无状态组件（只有一个reader函数的时候可以使用无状态组件）
// const TodoListUi = props => {
//   <div className="App">
//     <div>
//       <Input
//         value={props.inputValue}
//         onChange={props.handleInputChange}
//         style={{ width: "300px", margin: "10px 0" }}
//       />
//       <Button
//         onClick={props.handleCommit}
//         style={{ marginLeft: "10px" }}
//         type="primary"
//       >
//         提交
//       </Button>
//     </div>
//     <List
//       style={{ width: "300px" }}
//       bordered
//       dataSource={props.list}
//       renderItem={(item, index) => (
//         <List.Item
//           onClick={() => {
//             props.handleDelete(index);
//           }}
//         >
//           {item}
//         </List.Item>
//       )}
//     />
//   </div>;
// };

class TodoListUi extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Input
            value={this.props.inputValue}
            onChange={this.props.handleInputChange}
            style={{ width: "300px", margin: "10px 0" }}
          />
          <Button
            onClick={this.props.handleCommit}
            style={{ marginLeft: "10px" }}
            type="primary"
          >
            提交
          </Button>
        </div>
        <List
          style={{ width: "300px" }}
          bordered
          dataSource={this.props.list}
          renderItem={(item, index) => (
            <List.Item
              onClick={() => {
                this.props.handleDelete(index);
              }}
            >
              {item}
            </List.Item>
          )}
        />
      </div>
    );
  }
}
export default TodoListUi;
