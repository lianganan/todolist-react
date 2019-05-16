import {CHANGE_INPUT_VALUE, COMMIT_INPUT_VALUE} from './actionTypes'
export const getChangeInputAction = (value) => ({
  type:CHANGE_INPUT_VALUE,
  value
});
export const getCommitInputAction = () => ({
  type:COMMIT_INPUT_VALUE
});