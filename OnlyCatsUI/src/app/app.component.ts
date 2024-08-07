import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'OnlyCatsUI';

  constructor(
     private _http: HttpClient
  ) { }

  ngOnInit() {
    this.fetchData()
  }

  fetchData() {
    console.log("request started....")
    this._http.get("https://localhost:5001/api/users")
      .subscribe({
        next: (data:any) => { },
        error: (err: any) => console.log(err),
        complete: () => console.log("request completed")
      })
  }
}
