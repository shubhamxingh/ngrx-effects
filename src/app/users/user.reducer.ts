import { createReducer, on } from "@ngrx/store";
import { User, UserState } from "./user.model";
import { loadUserFailure, loadUserSuccess, users } from "./user.actions";

export const initialState: UserState = {
    users: [],
    loading: false,
    error: ''
} 

export const reducer = createReducer(
    
    initialState,
    
    on(users, (state) => ({
        ...state,
        loading: true,
        error: 'no error'
    })),

    on(loadUserSuccess, (state, {users}) => ({
        ...state,
        users: users,
        loading:false,
        error:'no error, success'
    })),

    on(loadUserFailure, (state, {error} ) => ({
        ...state,
        loading: false,
        error: error
    }))
)