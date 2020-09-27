import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import sampleData from '../data.json';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from "@angular/common/http";
import { Pipe, PipeTransform } from '@angular/core';
import { Filter1Pipe } from '../filter1.pipe';


@Component({
  selector: 'app-non-veg',
  templateUrl: './non-veg.component.html',
  styleUrls: ['./non-veg.component.css']
})
export class NonVegComponent implements OnInit {

	
	 selectedRow;
	Users: any = sampleData;

 id:number;
  UsersFilter: any;
  constructor() {
this.UsersFilter = {id: 2};
   }

  ngOnInit(): void {
  }
onRowClicked(row){
 this.selectedRow=row;
 }
 
}



	

  