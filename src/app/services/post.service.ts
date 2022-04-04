import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/observable/throw';
//import { Observable } from 'rxjs/Rx';
//import { _throw } from 'rxjs/observable/throw';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from  '../common/not-found-error';

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
    return this.http.post(this.url, JSON.stringify(post)).pipe(
      catchError((error:Response) => {
        if(error.status===404) return throwError(new BadInput(error.json()));
        return throwError(new AppError(error.json()));
      })
    );
  }
  updatePost(post){
    //patch only to one property
    return this.http.patch(this.url + '/' + post['id'], JSON.stringify({isRead : true}))
    //put
    //this.http.patch(this.url, JSON.stringify(post));
  }
  deletePost(post){
    //no body needed
    return this.http.delete(this.url + '/' + post['id']).pipe(
      catchError((error:Response) => {
        if(error.status===404) return throwError(new NotFoundError());
        return throwError(new AppError(error));
      })
    );
  }
}
