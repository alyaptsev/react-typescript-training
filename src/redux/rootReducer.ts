import { combineReducers } from 'redux'
import goodBoyReducer from './goodBoy/reducer'


const appReducer = combineReducers({
  goodBoy: goodBoyReducer
})

export default appReducer

// Хоба, а вот и состояние всего нашего стора!
export type AppState = ReturnType<typeof appReducer>