import { Component, OnInit } from '@angular/core';
import sampleData from '../data.json';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

Users: any = sampleData;
  constructor() { }

  ngOnInit(): void {
  }

}
