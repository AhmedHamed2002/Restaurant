import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [CommonModule , RouterLink],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.css'
})
export class FavoriteComponent implements OnInit{

  myFavorite!:any[];

  constructor( private _DataService:DataService){}

  ngOnInit(): void {
    this.myFavorite =  this._DataService.getFavoriteItem() ;
  }
  updateItems() {
    this.myFavorite = this._DataService.getFavoriteItem();
  }

  removeBookToFavorite(book:any){
      this._DataService.removeFromFavorite(book) ;
      this._DataService.delate.next(true) ;
      this.updateItems();
  }
}

