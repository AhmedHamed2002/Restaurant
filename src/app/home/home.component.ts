import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule} from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FooterComponent  , RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  menu:any[] = [] ;

  constructor(private _DataService:DataService){}
  ngOnInit(): void {
    this._DataService.getAllRecipes().subscribe((data) => {
    this.menu = data.recipes ;
    // console.log(this.menu);
  })
}
}
