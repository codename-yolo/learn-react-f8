import { StateType, TypeAction } from "../types";
import { ADD_JOB, CHANGE_JOB, DELETE_JOB } from "./const";

const todoListReducer = (state: StateType, action: TypeAction) => {
    switch (action.type) {
        case CHANGE_JOB:
            return {
                ...state,
                job: action.payload,
            }
        case ADD_JOB:
            return {
                ...state,
                jobs: [...state.jobs, action.payload],
            }
        case DELETE_JOB:
            return {
                ...state,
                jobs: [...state.jobs].filter((item, idx) => idx !== action.payload),
            }
        default:
            return state
    }
}

export default todoListReducer;