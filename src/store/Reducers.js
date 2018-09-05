import { ActionTypes } from './ActionTypes';
import axios from 'axios';

export const reducer = (state, action) => {
    switch(action.type){
        case 'INC': return { ...state, counter: state.counter + 1 };
        case 'DEC': return { ...state, counter: state.counter - 1 };
        case 'ADD': return { ...state, counter: state.counter + action.value };
        case 'SUB': return { ...state, counter: state.counter - action.value };
        default: return { ...state };
    }
    // if (action.type === ActionTypes.INC) {
    //   return { ...state, counter: state.counter + 1 };
    // }
    // if (action.type === ActionTypes.DEC) {
    //     return { ...state, counter: state.counter - 1 };
    // }
    // if (action.type === ActionTypes.ADD) {
    //     return { ...state, counter: state.counter + 5 };
    //   }
  };