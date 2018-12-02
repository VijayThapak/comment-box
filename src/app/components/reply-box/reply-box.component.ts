import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-reply-box',
  templateUrl: './reply-box.component.html',
  styles: []
})
export class ReplyBoxComponent implements OnInit, OnChanges {
  @Input() reply: boolean;
  @Input() parentId: string;
  @Input() childId: string;
  replyForm: FormGroup;
  constructor(private fb: FormBuilder, private commentService: CommentService) {}

  ngOnInit() {
    this.initializeForm();
  }
  ngOnChanges() {
    if (this.replyForm) {
      this.replyForm.reset();
    }
  }

  initializeForm() {
    this.replyForm = this.fb.group({
      replyComment: ['', Validators.required]
    });
  }

  submitReplyForm() {
    const data = Object.assign({}, this.replyForm.getRawValue(), { id: this.parentId, childId: this.childId });
    this.commentService.setReply(data);
  }
}
