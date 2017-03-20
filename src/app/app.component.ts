import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Grundlagen - Volle Kanne!';

  onTitleClicked($event) {
    console.log($event);
  }
}
