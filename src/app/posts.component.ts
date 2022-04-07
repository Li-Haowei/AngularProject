import { Component, OnInit } from '@angular/core'
import { PostService } from './services/post.service';


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
        class = "btn btn-primary btn-sm">Update</button>
        {{post.title}}
        <button 
        (click)= "deletePost(post)"
        class = "btn btn-primary btn-sm">Delete</button>
    </li>
    </ul>`
})
export class PostsComponent implements OnInit{
    posts: any[];

    constructor(private service:PostService){
        this.posts = [];
    }

    ngOnInit(): void {
        //http get: Get data
        this.service.getPosts()
        .subscribe(response =>{
            this.posts = response as any[];
        });
    }
    createPost(input: HTMLInputElement){
        let post = {title: input.value}
        input.value = '';
        this.service.createPost(post).subscribe(response =>{
            post['id'] = response['id'];
            this.posts.splice(0,0,post);
            
        })
    }
    //http put: update data
    updatePost(post){
        //patch only to one property
        this.service.updatePost(post).subscribe(response => {
            console.log(response);
        });
    }
    //http delete: delete data
    deletePost(post){
        //no body needed
        this.service.deletePost(post)
        .subscribe(response =>{
            let index = this.posts.indexOf(post);
            this.posts.splice(index,1);
        });
    }
}