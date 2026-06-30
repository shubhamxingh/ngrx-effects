import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "./user.model";


@Injectable({
    providedIn: 'root'
})
export class userService{

    constructor(private http: HttpClient){}

    getUsers(){
        return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
    }
}