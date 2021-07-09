import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(private firebase: AngularFireDatabase) {    };
  
  groups! : Observable<any>;
  ngOnInit(): void {
    this.groups = this.firebase.list('groups').valueChanges();
  }


}
