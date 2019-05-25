import { Component } from '@angular/core';
import { EmailService } from './email.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'udemy-angular';

  constructor(public emailService:EmailService){}

  testService(){
    this.emailService.getMochData().subscribe(
      result => {
        console.log("result obtained", result);
      }, error => {
        console.log("error obtained", error);
      }
    );
  }
}
