import { Component, signal } from '@angular/core';
import { userEffects } from './users/user.effects';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { users } from './users/user.actions';
import { Observable, take } from 'rxjs';
import { UserState } from './users/user.model';
import { userFeature } from './users/user.feature';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {

  users$!: Observable<any>

  constructor(private effects: userEffects, private store: Store) {
    this.users$ = this.store.select(userFeature.selectUserState).pipe()
  }

  load(){
    this.store.dispatch(users())
    this.users$.subscribe((data)=>{
      console.log(data)
    })
  }

  ngOnChanges(){
  }
}
