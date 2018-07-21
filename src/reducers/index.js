import {combineReducers} from 'redux'
import chapters from './chapters'
import drawer from './drawer'
import quizs from './quizs'

export default combineReducers({
  chapters,
  drawer,
  quizs,
})
