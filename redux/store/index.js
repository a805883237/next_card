import { createStore } from 'redux'
import reducer from '../index'

let store = createStore(reducer);

export default store;