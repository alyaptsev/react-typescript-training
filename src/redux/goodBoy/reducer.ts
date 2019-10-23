import { GoodBoyState, GoodBoyAction } from './types'

const initState: GoodBoyState = {
  isFetching: false,
  hasError: false,
  bones: 0
}

function bowlReducer (state: GoodBoyState = initState, action: GoodBoyAction): GoodBoyState {
  switch (action.type) {
    // TS не даст ошибиться в написании типа
    case 'BE_GOOD_BOY_FETCHING':
      return {
        ...state,
        isFetching: true
      }
    case 'FAIL':
      return {
        ...state,
        isFetching: false,
        hasError: true
      }
    // Здесь TS не даст записать упячку в bones
    case 'BE_GOOD_BOY_SUCCESS':
      return {
        ...state,
        hasError: false,
        isFetching: false,
        bones: action.payload
      }
    // И тут TS поможет
    case 'EAT_BONE': {
      const futureBones = state.bones - action.payload
      const bones = futureBones < 0 ? 0 : futureBones
      
      return {
        ...state,
        bones
      }
    }
    default:
      return state
  }
}

export default bowlReducer