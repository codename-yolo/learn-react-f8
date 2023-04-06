import { UserType } from "../type";

export const initValue: UserType = {
    user: {
        name: '',
        age: 0,
        address: '',
    }
}

type UserAction = {
    type: string;
    payload: Partial<UserType>;
}

export const actionTypeValue = {
    update_user: 'UPDATE_USER',
    reset_user: 'RESET_USER',
}

export const userReducer = (state: UserType, action: UserAction) => {
    switch (action.type) {
        case actionTypeValue.update_user:
            return {
                user: {
                    ...state.user,
                    ...action.payload.user
                }
            }
        case actionTypeValue.reset_user:
            return initValue
        default:
            return state
    }
}



