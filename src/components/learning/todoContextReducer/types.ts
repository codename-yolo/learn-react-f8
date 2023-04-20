import { ReactNode } from "react";

interface TypeJob {
    name: string,
    completed: boolean,
}

export interface TypeAction {
    type: string,
    payload: any,
}

export interface StateType {
    job: string,
    jobs: TypeJob[] | never[],
}

export interface TypeContextValue {
    state: StateType,
    dispatch: React.Dispatch<any>
}

export interface TypeContextProviderValue {
    children: ReactNode,
    value: TypeContextValue
}