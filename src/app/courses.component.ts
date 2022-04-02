
import {Component} from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector:'courses',
    template: `
        <h2>{{ title }}</h2>
        <img src="{{imageURL}}">
        <ul>
            <li *ngFor="let course of courses">
                {{course}}
            </li>
        </ul>
        <button class="btn btn-primary" [class.active]="isActive" [style.backgroundColor]="isActive ? 'blue' : 'white'" (click)="onSave($event)">Save</button>
        `
})
export class CoursesComponent{
    title = "List of courses";
    isActive = true;
    courses;
    imageURL = "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rengar_0.jpg";
    constructor(service: CoursesService){ 
        this.courses = service.getCourses();
    }
    onSave($event){
        console.log("Button was clicked", $event);
    }
}