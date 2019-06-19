import {CHANGE_INPUT_VALUE, COMMIT_INPUT_VALUE, DELETE_LIST_ITEM, INIT_LIST} from './actionTypes';
import axios from 'axios';
export const getChangeInputAction = (value) => ({
  type:CHANGE_INPUT_VALUE,
  value
});
export const getCommitInputAction = () => ({
  type:COMMIT_INPUT_VALUE
});
export const getDeleteListItemAction = (index) => ({
  type:DELETE_LIST_ITEM,
  value:index
});
export const getInitListAction = (data) => ({
  type:INIT_LIST,
  data
});
export const getInitList = () => {
  return (dispatch)=>{
    axios.get('http://yapi.demo.qunar.com/mock/72182/list').then((res)=>{
      console.log(res);
      const action = getInitListAction(res.data.list);
      dispatch(action);
    })
  }
};