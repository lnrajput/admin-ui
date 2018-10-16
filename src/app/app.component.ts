import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private http: HttpClient) {}
  startProgram(){
    //console.log('in start program');
    this.http.get("http://localhost:8080/admin/script-launcher/hello").subscribe(
      (data) => console.log(data)      
    );
    //console.log('END in start program');
  }
  stopProgram(){
    //console.log('in start program');
    this.http.get("http://localhost:8080/admin/script-launcher/hello").subscribe(
      (data) => console.log(data)      
    );
    //console.log('END in start program');
  }
}
