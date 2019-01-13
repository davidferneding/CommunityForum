import { Component, OnInit } from '@angular/core';
import { HelloWorldService } from '../../services/hello-world.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private helloWorldService: HelloWorldService) { }

  ngOnInit() {

  }

  sendRequest() {
    this.helloWorldService.getHelloWorld().subscribe(response => console.log(response));
  }

  sendAuthRequest() {
    this.helloWorldService.getSecretHelloWorld().subscribe(response => console.log(response));
  }
}
