import { Component, Inject, OnInit } from 'ng-metadata/core';

import { AppService } from './app.service';

@Component({
  selector: 'np-app',
  styles: [ require( './app.scss' ) ],
  template: `
    <h1>Hello from {{ $ctrl.planet }} ({{ $ctrl.appService.getAnswer() }}) !</h1>
  `
})
export class AppComponent implements OnInit {

  planet = 'Pluto';

  constructor(
    @Inject( '$log' ) private _$log: ng.ILogService,
    public appService: AppService
  ) {}

  ngOnInit() {
    this._$log.log( 'hello from pluto during OnInit' );
    this._$log.log( 'appService value - ' + this.appService.getAnswer() )
  }

}
