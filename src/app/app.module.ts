import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';


import { RouterModule, Routes } from '@angular/router';
import { InputnoteComponent } from './inputnote/inputnote.component';
import { DetailnoteComponent } from './detailnote/detailnote.component';
import { FavoritenoteComponent } from './favoritenote/favoritenote.component';
import { GlobalvarService } from './globalvar.service';

const ROUTES : Routes = [
  {path : 'inputnote', component : InputnoteComponent},
  {path : 'detailnote', component : DetailnoteComponent},
  {path : 'favoritenote', component : FavoritenoteComponent}
]

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    RouterModule.forRoot(ROUTES)

    ],

  declarations: [ 
    AppComponent, 
    HelloComponent, 
    InputnoteComponent, 
    DetailnoteComponent, 
    FavoritenoteComponent 
    
    ],

  bootstrap:    [ 
    AppComponent 
    
    ],

  providers: [GlobalvarService]

})
export class AppModule { }
