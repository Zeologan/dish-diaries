import { Component } from '@angular/core';
import { HandleDataService } from './services/handle-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DishDiaries';

  constructor(public user: HandleDataService) {}

  toggleActive() {
    this.user.login(); // Use the service to toggle the flag
  }
}
