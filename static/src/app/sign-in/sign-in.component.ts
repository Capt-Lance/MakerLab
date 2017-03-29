import { Component } from '@angular/core';

@Component({
  selector: 'sign-in',
  templateUrl: `src/app/sign-in/sign-in.html`,
})
export class SignInComponent  { 
    private fName: string;
    private lName: string;
    private password: string;
    private email:string;
 }