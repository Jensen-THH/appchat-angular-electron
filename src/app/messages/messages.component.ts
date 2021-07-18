  
import {  AfterViewChecked, ElementRef, ViewChild,Component, OnInit } from '@angular/core';
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
  currentuid = this.name.currentUsers.uid;
  constructor(
    public name:AppComponent,
    public route: ActivatedRoute,
    public firebase: AngularFireDatabase
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

   var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = time+' '+date;
    if (this.newMessage) {
      const messages = this.firebase.list('messages');
      messages.push ({
        group: this.group,
        text: this.name.currentUsers.displayName + ' : '+ this.newMessage,
        uid:this.name.currentUsers.uid,
        time:dateTime,
        email:this.name.currentUsers.email,
      });
      this.newMessage = '';
    }
    
  }
}