import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class PhotoService {

    constructor(private http: HttpClient) {}
            
    listFromUser(userName : string) : Observable<Object[]>{

        return this.http
        .get<Array<Object>>('http://localhost:3000/flavio/photos');
    }
    
}