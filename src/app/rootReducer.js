import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { randomNameObj } from '../scenes/lab/randomName/reducers/randomNameReducer.js'
export default combineReducers({
	randomNameObj,
  router: routerReducer
})
