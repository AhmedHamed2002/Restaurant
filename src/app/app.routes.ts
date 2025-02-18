import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MenuComponent } from './menu/menu.component';
import { DetailsComponent } from './details/details.component';
import { FavoriteComponent } from './favorite/favorite.component';

export const routes: Routes = [
  {path:'' ,redirectTo:'/home' ,pathMatch:'full'},
  {path:"home", component:HomeComponent} ,
  {path:"about", component:AboutComponent},
  {path:"favorite", component:FavoriteComponent},
  {path:"list", component:MenuComponent},
  {path:"list/:id", component:DetailsComponent},
  {path:"**", component:NotfoundComponent}
];
