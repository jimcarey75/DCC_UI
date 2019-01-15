import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  progressTitle = 'Switch Request Received';
  progressValue = 10;
  showMessage: boolean = false;
  
  array = [ 
    {
      progressTitle: 'status 0',
      progressStatus: 0
    }, 
    {
      progressTitle: 'status 10',
      progressStatus: 10
    }, 
    {
      progressTitle: 'status 20',
      progressStatus: 20
    }, 
    {
      progressTitle: 'status 30',
      progressStatus: 30
    }, 
    {
      progressTitle: 'status 40',
      progressStatus: 40
    }, 
    {
      progressTitle: 'status 50',
      progressStatus: 50
    }, 
    {
      progressTitle: 'status 60',
      progressStatus: 60
    }, 
    {
      progressTitle: 'status 70',
      progressStatus: 70
    }, 
    {
      progressTitle: 'status 80',
      progressStatus: 80
    }, 
    {
      progressTitle: 'status 90',
      progressStatus: 90
    }, 
    {
      progressTitle: 'status 100',
      progressStatus: 100
    }

  ];



  setValue(progressValue: number, progressTitle: string): void {

    this.progressValue = 50;
    this.progressTitle = "Status has changed";
  }

  checkValue(progressValue: number){
    if (this.progressValue == 100) {
      this.showMessage = true;      
    }
    else {
      this.showMessage = false;
    }
  }
}
