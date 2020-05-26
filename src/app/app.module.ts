import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MenuComponent } from "./menu/menu.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { FormsModule } from "@angular/forms";
import { LoginService } from "./login/login.service";
import { AuthService } from "./shared/auth.service";
import { PouchDBService } from './pouchdb.service';
import { AddProductComponent } from './add-product/add-product.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    LoginComponent,
    AddProductComponent,
    
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule,HttpClientModule],
  providers: [
    LoginService,
    AuthService,
    PouchDBService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
