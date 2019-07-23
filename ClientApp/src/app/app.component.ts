import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  loadedFeature = 'home';

  onNavigate(feature: string) {
    console.log('onNavigate hit');
    this.loadedFeature = feature;
    console.log('loadedFeature = ' + this.loadedFeature);
  }
}
