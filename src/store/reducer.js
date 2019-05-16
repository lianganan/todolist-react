import {CHANGE_INPUT_VALUE,COMMIT_INPUT_VALUE} from './actionTypes'
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
  return state;
}