import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Comments } from '../models/comments.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private $reply = new Subject();
  user = {
    username: 'Current User',
    profession: 'JNU'
  };
  comments: any;
  constructor(private http: HttpClient) {}

  getReply() {
    return this.$reply;
  }
  setReply(reply) {
    this.$reply.next(reply);
  }

  setComments(comments: Comments[]) {
    this.comments = comments;
  }

  getComments(): Comments[] {
    return this.comments;
  }
  fetchComments(): Observable<any> {
    return this.http.get('assets/comments.json').pipe(catchError(e => throwError(new Error(e))));
  }
}
