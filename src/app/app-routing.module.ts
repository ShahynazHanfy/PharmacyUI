import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NavBarComponent} from './component/nav-bar/nav-bar.component'
import { AddDrugComponent } from '././component/Drugs/add-drug/add-drug.component' ;
import { SignupComponent } from './component/signup/signup.component';
import {ShowDrugComponent} from './component/Drugs/show-drug/show-drug.component'
import {EditDrugComponent} from './component/Drugs/edit-drug/edit-drug.component'
import { from } from 'rxjs';
import { ShowCategoriesComponent } from './component/Category/show-categories/show-categories.component';
import { AddSubCategoryComponent } from './component/SubCategory/add-sub-category/add-sub-category.component';
// import { AddCategoryComponent } from './component/Category/add-category/add-category.component';


const routes: Routes = [
  { path: '', component: SignupComponent } ,
  { path: 'showdrug', component: ShowDrugComponent },
  { path: 'edit/:empID', component: EditDrugComponent },
  { path: 'login', component:  SignupComponent},
  { path: 'showCategories', component: ShowCategoriesComponent },
  { path: 'adddrug', component: AddDrugComponent },
  { path: 'ADDSUBCATEGORY', component: AddSubCategoryComponent },
  { path: 'showSubCategories', component: AddSubCategoryComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

