import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { NgModule } from 'ng-metadata/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  providers: [
    AppService
  ]
})
export class AppModule {
}
