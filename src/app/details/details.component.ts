import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {

  details:any;
  ID!:number ;

  constructor(private _DataService: DataService , private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.ID = this.route.snapshot.params['id'];
    this._DataService.getRecipe(this.ID).subscribe(recipe => {
      this.details = recipe;
      // console.log(this.details);
    });
  }
}
