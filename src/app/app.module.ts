import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CommentBoxComponent } from './components/comment-box/comment-box.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentsComponent } from './components/comments/comments.component';
import { ImageComponent } from './components/image/image.component';
import { ReplyBoxComponent } from './components/reply-box/reply-box.component';

const routes: Route[] = [
  {
    path: 'comment',
    component: CommentsComponent
  },
  { path: '', redirectTo: '/comment', pathMatch: 'full' }
];
@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    CommentBoxComponent,
    CommentComponent,
    ImageComponent,
    ReplyBoxComponent
  ],
  imports: [BrowserModule, ReactiveFormsModule, RouterModule.forRoot(routes), HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
