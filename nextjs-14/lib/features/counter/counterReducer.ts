import { createActions, handleActions} from 'redux-actions';

const INCREASE = 'counter/INCREASE'
const DECREASE = 'counter/DECREASE'

export const increase : any =createActions(INCREASE)
export const decrease : any =createActions(DECREASE)

const initalstate = {count:0}

const counterReducer = handleActions(
    {
        [INCREASE]:(state, action)=>({count: state.count+1}),
        [DECREASE]:(state, action)=>({count: state.count-1}),
    },
    initalstate
)
// redux state에 저장


export default counterReducer;