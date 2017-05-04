import { combineReducers } from 'redux'
import { ADD_TODO } from '../actions/actions.js'

function todo(state, action) {
   switch (action.type) {
	
      case ADD_TODO:
      if(action.text.length > 0){  
         return {
            id: action.id,
            text: action.text,
         }
      }	
      default:
      return state
   }
}

function todos(state = [], action) {
   switch (action.type) {
	
      case ADD_TODO:
         return [
            ...state,
            todo(undefined, action)
         ]
			
      default:
      return state
   }
}

const todoApp = combineReducers({
   todos
})

export default todoApp