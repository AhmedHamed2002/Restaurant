import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { NavberComponent } from "./navber/navber.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavberComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Restaurant';

  ngOnInit(): void {
    initFlowbite();
  }

}
