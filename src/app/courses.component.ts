
import {Component} from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector:'courses',
    template: `
        <h2>{{ title |uppercase}}</h2>
        <h3>{{ number |number}}</h3>
        <h3>{{ float |number:'1.2-2'}}</h3>
        <h3>{{ number |currency}}</h3>
        <p>{{text|summary : 101}}</p>
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
    text = "Like many of the individuals discussed in this book, Schwitters became a stateless person as a result of the political upheavals of the twentieth century. In Schwitters’s case this meant that he lost the security of his German citizenship when he fled Nazi Germany in 1937";
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