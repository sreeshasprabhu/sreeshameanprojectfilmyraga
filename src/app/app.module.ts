import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AuthService } from './auth.service';
import { RagaService  } from './raga.service';
import { UserService } from './user.service';
import { TokenInterceptorService} from './token-interceptor.service';
 import {DataTablesModule} from 'angular-datatables';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RagasListComponent } from './ragas-list/ragas-list.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NewraagaComponent } from './newraaga/newraaga.component';
import { UpdateRaagaComponent } from './update-raaga/update-raaga.component';
import { FooterComponent } from './footer/footer.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AdminComponent } from './admin/admin.component';
import { AdmindasboardComponent } from './admindasboard/admindasboard.component';
import { RagaComponent } from './raga/raga.component';
import { UserComponent } from './user/user.component';
import { UpdateUserComponent } from './update-user/update-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RagasListComponent,
    SignupComponent,
    LoginComponent,
    NewraagaComponent,
    UpdateRaagaComponent,
    FooterComponent,
    AdminComponent,
    AdmindasboardComponent,
    RagaComponent,
    UserComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    DataTablesModule


  ],
  providers: [RagaService,AuthService,UserService,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
