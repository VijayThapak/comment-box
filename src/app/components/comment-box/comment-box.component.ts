import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comments } from 'src/app/models/comments.model';
import { CommentService } from 'src/app/services/comment.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styles: []
})
export class CommentBoxComponent implements OnInit {
  commentForm: FormGroup;
  @Output() newcomment = new EventEmitter();
  constructor(private fb: FormBuilder, private commentService: CommentService, private utils: UtilsService) {}

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.commentForm = this.fb.group({
      comment: ['', [Validators.required]]
    });
  }

  submitForm() {
    const formData = this.commentForm.getRawValue();
    const comment: Comments = {
      id: this.utils.guid(),
      icon: 'dummy01.jpg',
      username: this.commentService.user.username,
      profession: this.commentService.user.profession,
      comment: formData['comment'],
      like: false,
      reply: false,
      timestamp: this.utils.getTimeStamp(new Date()),
      replies: []
    };
    this.newcomment.emit(comment);
    this.commentForm.reset();
  }
}
