import { Component } from '@angular/core';

@Component({
  selector: 'sign-in',
  templateUrl: `src/app/sign-in/sign-in.html`,
})
export class SignInComponent  { 
    private userName: string;
    private password: string;
    private email:string;
 }