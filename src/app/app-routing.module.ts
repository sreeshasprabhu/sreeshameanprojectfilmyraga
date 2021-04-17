import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewraagaComponent } from './newraaga/newraaga.component';
import { RagasListComponent } from './ragas-list/ragas-list.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './auth.guard'
import { UpdateRaagaComponent } from './update-raaga/update-raaga.component';
import { AdminComponent } from './admin/admin.component';
import { RagaComponent } from './raga/raga.component';
import { UserComponent } from './user/user.component';
import { AdmindasboardComponent } from './admindasboard/admindasboard.component';
import { UpdateUserComponent } from './update-user/update-user.component';

const routes: Routes = [{'path':'',component:HomeComponent},
{path:'ragas',component:RagasListComponent},
{path:'signup',component:SignupComponent},
{path:'login',component:LoginComponent},
{path:'add',canActivate:[AuthGuard],component:NewraagaComponent},
{path:'update',component:UpdateRaagaComponent},
{path:'admin',component:AdminComponent},
{path :'admindashboard',component:AdmindasboardComponent},
// children:[
//   {path:'raga',component:RagaComponent},
//   {path:'user',component:UserComponent}
// ]},
{path:'raga',component:RagaComponent},
{path:'user',component:UserComponent},
{path:'updateuser',component:UpdateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
