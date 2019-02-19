import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';


@Injectable({ providedIn: 'root' })
export class PhotoListResolver implements Resolve<Observable<Array<Photo>>>{

    constructor(private _service: PhotoService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo[]> {

        const userName = route.params.userName;

        return this._service.listFromUserPaginated(userName, 1);
    }

}