import { Component } from '@angular/core';
import { PhotoService } from './photos/photo/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos: Array<Object>;

  constructor(photoService : PhotoService) {

    photoService.
      listFromUser('flavio')
      .subscribe(photosResult => this.photos = photosResult);
  }
}
