import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SFFBModule } from './sffb/sffb.module';

import { AppComponent } from './app.component';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        SFFBModule,
        AngularFireModule.initializeApp({
            apiKey: 'AIzaSyAJawulOMYRp0eXjMHLqiffzuS9tToCfAI',
            authDomain: 'fluindotio-website-93127.firebaseapp.com',
            databaseURL: 'https://fluindotio-website-93127.firebaseio.com',
            projectId: 'fluindotio-website-93127',
            storageBucket: 'fluindotio-website-93127.appspot.com',
            messagingSenderId: '1051668521425'
          }),
        AngularFireDatabaseModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
