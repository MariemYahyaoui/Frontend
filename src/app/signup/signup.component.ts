import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test: Date = new Date();
    focus: boolean = false; // Initialize focus variables
    focus1: boolean = false;
    focus2
    constructor() { }

    ngOnInit() {}
}