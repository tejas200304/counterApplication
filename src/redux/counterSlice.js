import { createSlice } from "@reduxjs/toolkit";




export const counterSlice = createSlice({ //returns automatically reducer as well as action.
    name:'counterSlice', 
    initialState:{ //initial state or the initial value to be started is given in INITIALSTATE.
        value:0
    },
    reducers:{ //actions/logic to update the state are given in the key REDUCERS.
        increment :(state)=>{
            state.value+=1
        },
        decrement :(state)=>{
            state.value-=1
        },
        reset :(state)=>{
            state.value=0
        },
        changeRange:(state, action)=>{
            state.value += action.payload
        }
    }
})
/* actions are needed for components */
export const {increment , decrement , reset , changeRange} = counterSlice.actions
/* reducers are needed to store to update state */
export default counterSlice.reducer