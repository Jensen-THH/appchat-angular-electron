import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatToolbarModule } from '@angular/material/toolbar';
// import { LoginComponent } from './login/login.component';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ChatComponent } from './chat/chat.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { AngularFireDatabaseModule } from '@angular/fire/database';

import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

import { HttpClientModule } from '@angular/common/http';
import { MessagesComponent } from './messages/messages.component';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { SignupComponent } from './signup/signup.component';
import { FirebaseService } from './services/firebase.service';

import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTreeModule} from '@angular/material/tree';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent,
    ChatComponent,
    MessagesComponent,
    SignupComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,

    MatButtonModule,
    MatInputModule,

    AngularFireModule.initializeApp(
      environment.firebaseConfig
    ),
    AngularFireAuthModule,

    AngularFireDatabaseModule,

    MatIconModule,
    MatListModule,
    FormsModule,
    MatCardModule,
    ScrollingModule,

    MatProgressBarModule,
    MatSnackBarModule,
    MatTreeModule,
    MatTooltipModule,
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
