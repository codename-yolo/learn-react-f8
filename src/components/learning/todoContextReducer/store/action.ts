import { CHANGE_JOB, ADD_JOB, DELETE_JOB } from './const'

export const changeJob = (payload: string) => ({
    type: CHANGE_JOB,
    payload
})

export const addJob = (payload: { name: string, completed: boolean }) => ({
    type: ADD_JOB,
    payload
})

export const deleteJob = (payload: number) => ({
    type: DELETE_JOB,
    payload
})