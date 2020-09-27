import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import sampleData from '../data.json';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from "@angular/common/http";
import { Pipe, PipeTransform } from '@angular/core';
import { Filter1Pipe } from '../filter1.pipe';

@Component({
  selector: 'app-sweet',
  templateUrl: './sweet.component.html',
  styleUrls: ['./sweet.component.css']
})

export class SweetComponent implements OnInit {
	

	 selectedRow;
	Users: any = sampleData;

 id:number;
  UsersFilter: any;
  
  constructor() {
this.UsersFilter = {id: 3};
   }

  ngOnInit(): void {
 
  }
onRowClicked(row){
 this.selectedRow=row;
 }
 
}





 