import { INCRIMENT,DECRIMENT } from "./CounterActionTypes"
export const incrimentCount=()=>{
    return{
        type:INCRIMENT
    }
}

export const decrimentCount=()=>{
    return{
        type:DECRIMENT
    }
}