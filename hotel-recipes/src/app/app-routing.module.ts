import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecepiesListComponent } from './recepies-list/recepies-list.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NonVegComponent } from './non-veg/non-veg.component';
import { SweetComponent } from './sweet/sweet.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';


const routes: Routes = [
{ path: '' , component: HomeComponent },
{  path : 'recepies-list' , component: RecepiesListComponent },
{ path : 'recipe-detail',component:RecipeDetailComponent },
{ path: 'home' , component: HomeComponent },
{ path: 'header', component :HeaderComponent },
{ path: 'non-veg', component :NonVegComponent },
{ path: 'sweet', component :SweetComponent },
//{ path:'**', component :PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

