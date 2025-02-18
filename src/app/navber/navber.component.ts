import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DataService } from '../data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navber',
  standalone: true,
  imports: [CommonModule, FormsModule , RouterLink , RouterLinkActive],
  templateUrl: './navber.component.html',
  styleUrl: './navber.component.css'
})
export class NavberComponent implements OnInit{

  count:number =0 ;
  dataForm: string = "";
  myMeals: any[] = [];

  constructor(private _DataService:DataService){}

  ngOnInit(): void {
    this._DataService.FavoriteCount$.subscribe(data =>{
      this.count = data;
    }) ;
  }

  search(data: string) {
    if (data.length >= 2) {
      this._DataService.search(this.dataForm).subscribe(data => {
        this.myMeals = data.recipes;
      });
    }
  }

}
