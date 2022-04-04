import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http:HttpClient) { }

  getPosts(){
    return this.http.get(this.url);
  }
  createPost(post){
    //http post: Create data
    //first input server, second input json file
    return this.http.post(this.url, JSON.stringify(post));    
  }
  updatePost(post){
    //patch only to one property
    return this.http.patch(this.url + '/' + post['id'], JSON.stringify({isRead : true}))
    //put
    //this.http.patch(this.url, JSON.stringify(post));
  }
  deletePost(post){
    //no body needed
    return this.http.delete(this.url + '/' + post['id']);
  }
}
