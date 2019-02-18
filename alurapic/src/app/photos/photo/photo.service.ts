import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { Injectable } from "@angular/core";
import { Photo } from "./photo";

const API = 'http://localhost:3000/';
@Injectable({
    providedIn: 'root'
})

export class PhotoService {

    constructor(private http: HttpClient) {}
            
    listFromUser(userName : string) : Observable<Photo[]>{

        return this.http
        .get<Array<Photo>>( API + `${userName}/photos`);
    }
    
}