import { Component, Input, Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';

@Component({
    selector: 'my-app',
    templateUrl: '../app/app.component.html'
})
@Injectable()
export class AppComponent {
    @Input() loggedInUser: string;
    apibaseUrl: string = "http://localhost:58349";

    constructor(private injector: Injector, private httpClient: HttpClient) {
        this.httpClient.get("http://localhost:58349/Home/getLoggedInUser").subscribe((data) => {
            console.log(JSON.stringify(data));
            this.loggedInUser = JSON.stringify(data);

        }, err => { console.log(JSON.stringify(err)); });
    }



}