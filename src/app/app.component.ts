import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  progressTitle = 'Switch Request Received';
  progressValue = 50;
  value = 50;

  public setValue(value: number): void {

    this.value = value;

  }
}
