import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GameboardComponent} from "./modules/gameboard/component/gameboard.component";

const routes: Routes = [
  { path: '', component: GameboardComponent },];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
