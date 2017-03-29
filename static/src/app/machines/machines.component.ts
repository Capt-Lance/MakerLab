import { Component } from '@angular/core';
import { Machine } from './machine';

@Component({
  selector: 'machines',
  templateUrl: `src/app/machine/machines.html`,
})
export class CalendarComponent  { 
    private date: string;
    private machines: Machine[];

 }