import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import sampleData from '../data.json';
import { Pipe, PipeTransform } from '@angular/core';
import { Filter1Pipe } from '../filter1.pipe';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-recepies-list',
  templateUrl: './recepies-list.component.html',
  styleUrls: ['./recepies-list.component.css']
})
export class RecepiesListComponent implements OnInit {

 selectedRow;
Users: any = sampleData;
id:number;
  UsersFilter: any;
  
  
 //selectedIndex = null ;
 //selectedPerson = null ;



constructor() {
this.UsersFilter = {id: 1};
 }

  ngOnInit(): void {
}
 onRowClicked(row){
 this.selectedRow=row;
 }
}




