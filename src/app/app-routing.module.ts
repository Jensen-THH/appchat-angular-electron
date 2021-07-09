import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat/chat.component';
// import { MessagesComponent } from './messages/messages.component';
import { MessagesComponent } from './messages/messages.component';
import { SignupComponent } from './signup/signup.component';
const routes: Routes = [
// {
//   path: 'login',
//   component: LoginComponent
// },
{
  path: 'chat',
  component: ChatComponent
},
{
  path: 'chat/:group/messages',
  component: MessagesComponent
},
{
  path: 'signup',
  component: SignupComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
