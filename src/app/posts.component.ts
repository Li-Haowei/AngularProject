import {HttpClient} from '@angular/common/http'
import { Component } from '@angular/core'


@Component({
    selector: 'app-posts',
    template: `
    <ul class="list-group">
        <li *ngFor="let post of posts"
        class="list">
        {{post.title}}
    </li>
    </ul>`
})
export class PostsComponent {
    posts: any[];
    constructor(http: HttpClient){
        this.posts = [];
        http.get('https://jsonplaceholder.typicode.com/posts')
        .subscribe(response =>{
            this.posts = response as any[];
        });
    }
}