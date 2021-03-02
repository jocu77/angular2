import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(
    private router : Router,
    //public globalvar : GlobalService
  )
  {}
  name = 'Angular ' + VERSION.major;
  namaglobal;
  inputpage() {
    this.router.navigate(["/inputnote"]);
    //this.namaglobal = this.globalvar.getnama();
  }
  
  favoritepage() {
    this.router.navigate(["/favoritenote"]);
  }

}
