import { Injectable } from '@angular/core';

@Injectable()
export class GlobalvarService {
private listTitle = [];
private listNotes = [];
private listDate = [];
private listFav = [];
private search;
private countFav = 0;
private count = 0;

  constructor() { }
  public getTitle() {
    return this.listTitle;
  }

  public getFav() {
    return this.listFav;
  }

  public getIndex(title : String) {
    var i : number = 0;
    for(i=0;i<this.count;i++) {
        if (this.listTitle[i] == title) {
          return i;
        }
    }
  }

  public getDetail(title : String) {
    var index = this.getIndex(title);
    return this.listNotes[index];
  }

  public getDate(title : String) {
    var index = this.getIndex(title);
    return this.listDate[index];
  }

  public getCount() {
    return this.count;
  }

  public getSearch() {
    return this.search;
  }

  public getcountFav() {
    return this.countFav;
  }

  public setTitle (title : String) {
    this.listTitle.push(title);
  }

}