
import {Component} from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector:'courses',
    template: `
        <h2>{{ title |uppercase}}</h2>
        <h3>{{ number |number}}</h3>
        <h3>{{ float |number:'1.2-2'}}</h3>
        <h3>{{ number |currency}}</h3>
        <img src="{{imageURL}}">
        <ul>
            <li *ngFor="let course of courses">
                {{course}}
            </li>
        </ul>
        <button class="btn btn-primary" 
        [class.active]="isActive" 
        [style.backgroundColor]="isActive ? 'blue' : 'white'" 
        (click)="onSave($event)">Save</button>
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>
        `
})
export class CoursesComponent{
    title = "List of courses";
    number = 10000;
    float = 4.9777;
    isActive = true;
    courses;
    email = "me@example.com";
    imageURL = "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rengar_0.jpg";
    constructor(service: CoursesService){ 
        this.courses = service.getCourses();
    }
    onSave($event){
        console.log("Button was clicked", $event);
    }
    onKeyUp(){
        console.log(this.email);
    }
}