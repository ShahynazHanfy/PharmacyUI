import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AccordionModule} from 'primeng/accordion';    
import { AppComponent } from './app.component';
import {MenubarModule} from 'primeng/menubar';
import {NavBarComponent} from './component/nav-bar/nav-bar.component'
// import { Routes } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { AddDrugComponent } from './component/Drugs/add-drug/add-drug.component';
import { AppRoutingModule} from './app-routing.module';
import { ShowDrugComponent } from './component/Drugs/show-drug/show-drug.component'
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {DrugService} from './services/drug.service'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
// import { HttpClientModule, HttpClient } from  '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import {InputTextModule} from 'primeng/inputtext';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import {TabViewModule} from 'primeng/tabview';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import {InputMaskModule} from 'primeng/inputmask';
import {ToastModule} from 'primeng/toast';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {ProgressBarModule} from 'primeng/progressbar';
import {SignupComponent} from './component/signup/signup.component';
import { ToastComponent } from './toast/toast.component';
import { EditDrugComponent } from './component/Drugs/edit-drug/edit-drug.component';
// import { AddCategoryComponent } from './component/Category/add-category/add-category.component';
import { AddSubCategoryComponent } from './component/SubCategory/add-sub-category/add-sub-category.component';
import { EditSubCategoryComponent } from './component/SubCategory/edit-sub-category/edit-sub-category.component';
import {ShowCategoriesComponent} from './component/Category/show-categories/show-categories.component'
import { MessageService } from 'primeng/api';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AddDrugComponent,
    ShowDrugComponent,
    SignupComponent,
    ToastComponent,
    EditDrugComponent,
    // AddCategoryComponent,
    AddSubCategoryComponent,
    EditSubCategoryComponent,
    ShowCategoriesComponent,
  ],
  imports: [
    BrowserModule,
    DropdownModule,
    SliderModule,
    BrowserAnimationsModule,
    FormsModule,
    InputTextModule,
    CalendarModule,
    AccordionModule,
    ToastModule,
    TabViewModule,
    MultiSelectModule,
    ContextMenuModule,
    InputMaskModule,
    MenubarModule,
    RouterModule,
    ProgressBarModule,
    DialogModule,
    AppRoutingModule,
    TableModule,
    ButtonModule,
    CheckboxModule,
    HttpClientModule,
    RadioButtonModule,
    MatIconModule,
    ToastrModule,
    RouterModule.forRoot([])
  ],
  providers: [DrugService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
