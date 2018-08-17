import { Component, OnInit } from '@angular/core';

import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';

import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface About {
  paragraph: string;
}

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  aboutCol: AngularFirestoreCollection<About>;
  paragraphs: Observable<About[]>;
  constructor(
    private afs: AngularFirestore,
    private afStorage: AngularFireStorage
  ) {}

  ngOnInit() {
    this.aboutCol = this.afs.collection('aboutMe');
    this.paragraphs = this.aboutCol.valueChanges();
  }
}
