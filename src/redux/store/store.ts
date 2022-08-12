import { combineReducers, createStore} from 'redux'
import { addStickynoteReducer, addTextReducer } from '../buttons/reducers';

const RootReducer = combineReducers({
  notes: addStickynoteReducer,
  texts: addTextReducer
})

export type RootState = ReturnType<typeof RootReducer>

export const store = createStore(RootReducer)