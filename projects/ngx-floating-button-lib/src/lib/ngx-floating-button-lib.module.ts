import { NgModule } from '@angular/core';
import { NgxFloatingButtonLibComponent } from './ngx-floating-button-lib.component';
import { FloatingButtonComponent } from './floating-button/floating-button.component';



@NgModule({
  declarations: [
    NgxFloatingButtonLibComponent,
    FloatingButtonComponent
  ],
  imports: [
  ],
  exports: [
    NgxFloatingButtonLibComponent,
    FloatingButtonComponent
  ]
})
export class NgxFloatingButtonLibModule { }
