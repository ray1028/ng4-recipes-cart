import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ShoppingListComponent } from "./shopping-list.component";
import { CommonModule } from "@angular/common";

const shoppingListRoutes: Routes = [
  { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
  imports:[
    CommonModule,
    RouterModule.forChild(shoppingListRoutes)
  ],
  exports:[RouterModule]
})

export class ShoppingListRoutingModule{

}