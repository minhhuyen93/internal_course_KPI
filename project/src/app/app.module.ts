import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ShareModule } from './share/share.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    ShareModule,
    CoreModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
