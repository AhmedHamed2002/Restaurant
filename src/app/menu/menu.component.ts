import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule,RouterLink ,  LoadingComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  list:any[] =[]  ;
  myFavorite: any[] = [];

  constructor(private _DataService:DataService){}
  ngOnInit(): void {
    this._DataService.getAllRecipes().subscribe((data) => {
    this.list = data.recipes;
  });
  this.myFavorite = this._DataService.getFavoriteItem();
  }

  find(meal: any): boolean {
    let f = this.myFavorite.find((i) => i.id == meal.id);
    return !!f;
  }

  addBookToFavorite(book: any) {
    this._DataService.addToFavorite(book);
    this.updateItems() ;
  }

  removeBookToFavorite(book: any) {
    this._DataService.removeFromFavorite(book);
    this.updateItems();
  }

  updateItems() {
    this.myFavorite = this._DataService.getFavoriteItem();
  }
}
