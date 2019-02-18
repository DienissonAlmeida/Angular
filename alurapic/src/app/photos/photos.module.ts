import { NgModule } from "@angular/core";
import { PhotoComponent } from "./photo/photo.component";
import { HttpClient } from "@angular/common/http";

@NgModule({
    declarations : [ PhotoComponent ],
    exports: [ PhotoComponent ],
    imports: [ HttpClient ]
})

export class PhotosModule {}