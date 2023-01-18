import { COUNTER_CHANGE } from "../constants";

export const changesCount=(count)=>{
    return{
        type:COUNTER_CHANGE,
        payload:count,
    }
}