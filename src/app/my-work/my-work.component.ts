import { Component, OnInit } from '@angular/core';

import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';

import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Work {
  description: string;
  heading: string;
  image_ref: string;
  projectLink: string;
}

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.css']
})
export class MyWorkComponent implements OnInit {
  workCol: AngularFirestoreCollection<Work>;
  posts: Observable<Work[]>;

  constructor(
    private afs: AngularFirestore,
    private afStorage: AngularFireStorage
  ) {}

  ngOnInit() {
    this.workCol = this.afs.collection('Work');
    this.posts = this.workCol.valueChanges();
  }
}
