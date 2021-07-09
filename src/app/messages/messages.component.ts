  
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import  { AppComponent } from '../app.component'

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  messages!: Observable<any>;
  group = '';
  newMessage = '';
  groups! : Observable<any>;
  constructor(
    private name:AppComponent,
    private route: ActivatedRoute,
    private firebase: AngularFireDatabase
  ) { }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.group = params.group;
      this.groups = this.firebase.list('groups').valueChanges();
      if (this.group) {
        this.messages = this.firebase
          .list('messages', ref => ref.orderByChild('group')
          .equalTo(this.group))
          .valueChanges();
      }
    });
  }
  send() {
    if (this.newMessage) {
      const messages = this.firebase.list('messages');
      messages.push ({
        group: this.group,
        text: this.name.currentUsers.displayName + ' : '+ this.newMessage
      });
      this.newMessage = '';
    }
  }
}