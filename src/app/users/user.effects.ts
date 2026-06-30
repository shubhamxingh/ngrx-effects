import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { userService } from "./user.service";
import { loadUserFailure, loadUserSuccess, users } from "./user.actions";
import { catchError, map, of, switchMap } from "rxjs";

@Injectable()
export class userEffects{
    //Action Stram
    private actions$ = inject(Actions)

    //Api Service
    private user$ = inject(userService)

    //Effect to load Users
    loadUsers$ = createEffect(() => {
            return this.actions$.pipe(
            ofType(users),
            switchMap(() => {
                return this.user$.getUsers().pipe(
                    map((users) => loadUserSuccess({ users })),
                    catchError((error) => of(loadUserFailure({ error: error.message })))
                );
            })
        );
        }
    )
}