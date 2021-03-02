import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inputnote',
  templateUrl: './inputnote.component.html',
  styleUrls: ['./inputnote.component.css']
})
export class InputnoteComponent implements OnInit {

  textdetail = "";
  textjudul = "";
  tanggal = "";
  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }

  detailpage() {
    this.router.navigate(["/detailnote"]);
  }

}