import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  delate = new BehaviorSubject(false) ;

  private FavoriteItem = new BehaviorSubject<any[]>([]) ;
  private favoriteItemCount = new BehaviorSubject<number>(0) ;
  FavoriteCount$ =  this.favoriteItemCount.asObservable() ;

  constructor(private _HttpClient:HttpClient){
    if(this.getFavoriteItemFromStorage() != null){
      let arrayF =  this.getFavoriteItemFromStorage()  ;
      if(arrayF != null){
        this.FavoriteItem.next(arrayF) ;
        let currentCount = this.FavoriteItem.value.length;
        this.favoriteItemCount.next(currentCount)
      }
      }
  }

  getFavoriteItem():any[]{
    return this.FavoriteItem.value ;
  }

  addToFavorite(item:any){
    const findBook  =  this.FavoriteItem.value.find((p) => p.id  === item.id ) ;
    if(!findBook)
    {
      let  newItem=  [...this.FavoriteItem.value, item] ;
      this.FavoriteItem.next(newItem) ;
      let currentCount = this.FavoriteItem.value.length;
      this.favoriteItemCount.next(currentCount) ;
    }
    this.setFavoriteItemToStorage(this.FavoriteItem.value);
  }

  removeFromFavorite(item:any){
    let newItem =[...this.FavoriteItem.value, item] ;
    newItem = newItem.filter((book) => book.id !== item.id) ;
    this.FavoriteItem.next(newItem) ;
    let currentCount = this.FavoriteItem.value.length;
    this.favoriteItemCount.next(currentCount) ;
    this.setFavoriteItemToStorage(this.FavoriteItem.value);
  }

  private setFavoriteItemToStorage(favoriteItem:any[]){
    localStorage.setItem("F_Item",JSON.stringify(favoriteItem));
  }
  private getFavoriteItemFromStorage():any[]{
    let value= localStorage.getItem("F_Item");
    return value?JSON.parse(value):[];
  }

  getAllRecipes():Observable<any>{
    let res =  this._HttpClient.get('https://dummyjson.com/recipes') ;
    return res ;
  }
  getRecipe(data:any):Observable<any>{
    let res =  this._HttpClient.get(`https://dummyjson.com/recipes/${data}`) ;
    return res ;
  }
  search(data:any):Observable<any>{
    let res =  this._HttpClient.get(`https://dummyjson.com/recipes/search?q=${data}`) ;
    return res ;
  }
}
