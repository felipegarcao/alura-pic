import { PhotoComponent } from './photo/photo.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [PhotoComponent],
  // exportando para permitir o acesso aos tags html criadas
  exports: [PhotoComponent],
})
export class PhotosModule {}
