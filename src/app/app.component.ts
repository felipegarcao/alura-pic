import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {



  photos = [
    {
      url:  "https://github.com/LFelpsDev.png",
      description: "eu1"
    },
    {
      url: "https://github.com/LFelpsDev.png",
      description: "eu2"
    }
  ]



}
