import { createAction, props } from "@ngrx/store";
import { User } from "./user.model";

export const users = createAction(
    '[User] Load Users'
)

export const loadUserSuccess = createAction(
    '[User] Load Users success',
    props<{users: User[]}>()
)

export const loadUserFailure = createAction(
    '[User] Load User Failure',
    props<{error: string}>()
)