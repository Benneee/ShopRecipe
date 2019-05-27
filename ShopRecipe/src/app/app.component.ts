import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase";
import { Router, NavigationEnd } from "@angular/router";
import { filter } from 'rxjs/operators';

declare var gtag;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor (router: Router) {
    const navEndEvents = router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    )
    navEndEvents.subscribe((event: NavigationEnd) => {
      gtag('config', 'UA-140899957-2', {
        'page_path': event.urlAfterRedirects
      });
    })
  }
  loadedFeature = "recipe";

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCAf8fkpSE2L-RVYJyJlI2cH04LS7JZBB0",
      authDomain: "shoprecipe-9df12.firebaseapp.com"
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
