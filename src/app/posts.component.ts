import {HttpClient} from '@angular/common/http'
import { Component } from '@angular/core'


@Component({
    selector: 'app-posts',
    template: `
    <input 
    (keyup.enter) = "createPost(input)" #input
    type="text" class = "form-control">

    <ul class="list-group">
        <li *ngFor="let post of posts"
        class="list">
        <button 
        (click)= "updatePost(post)"
        class = "btn btn-default btn-sm">Update</button>
        {{post.title}}
        <button 
        (click)= "deletePost(post)"
        class = "btn btn-default btn-sm">Delete</button>
    </li>
    </ul>`
})
export class PostsComponent {
    posts: any[];
    private url = 'https://jsonplaceholder.typicode.com/posts';
    constructor(private http: HttpClient){
        this.posts = [];
        //http get: Get data
        http.get(this.url)
        .subscribe(response =>{
            this.posts = response as any[];
        });
    }
    createPost(input: HTMLInputElement){
        let post = {title: input.value}
        input.value = '';
        //http post: Create data
        //first input server, second input json file
        this.http.post(this.url, JSON.stringify(post))
        .subscribe(response =>{
            post['id'] = response['id'];
            this.posts.splice(0,0,post);
            
        })
    }
    //http put: update data
    updatePost(post){
        //patch only to one property
        this.http.patch(this.url + '/' + post['id'], JSON.stringify({isRead : true}))
        .subscribe(response => {
            console.log(response);
        });
        //put
        //this.http.patch(this.url, JSON.stringify(post));
    }
    //http delete: delete data
    deletePost(post){
        //no body needed
        this.http.delete(this.url + '/' + post['id'])
        .subscribe(response =>{
            let index = this.posts.indexOf(post);
            this.posts.splice(index,1);
        });
    }
}