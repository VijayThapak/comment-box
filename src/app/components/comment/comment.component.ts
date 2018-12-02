import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Comments } from 'src/app/models/comments.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styles: []
})
export class CommentComponent implements OnInit {
  @Input() comments: Comments[];
  @Output() delete = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  deleteComment(id: string, childId?: string) {
    this.delete.emit({ id: id, childId: childId });
  }
}
