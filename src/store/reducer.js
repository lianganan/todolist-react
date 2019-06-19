import {CHANGE_INPUT_VALUE,COMMIT_INPUT_VALUE, DELETE_LIST_ITEM, INIT_LIST} from './actionTypes'
const defaultStore = {
  inputValue:'',
  list:[]
}

export default (state = defaultStore,action)=>{
  if (action.type === CHANGE_INPUT_VALUE) {
    const newState = {...state};
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === COMMIT_INPUT_VALUE) {
    const newState = {...state};
    newState.list.unshift(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }
  if (action.type === DELETE_LIST_ITEM) {
    const newState = {...state};
    newState.list.splice(action.value,1);
    return newState;
  }
  if (action.type === INIT_LIST) {
    const newState = {...state};
    newState.list = action.data
    return newState;
  }
  return state;
}