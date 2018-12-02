import { Component, OnInit } from '@angular/core';
import { Comment, Comments } from '../../models/comments.model';
import { CommentService } from '../../services/comment.service';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  user: any;
  comments: Comments[] = [];
  constructor(private commentService: CommentService, private utils: UtilsService) {}

  ngOnInit() {
    this.user = this.commentService.user;

    this.commentService.fetchComments().subscribe(response => {
      this.commentService.setComments(response['comments']);
      this.comments = this.commentService.getComments();
    });

    this.commentService.getReply().subscribe(data => {
      const comment: Comment = {
        id: this.utils.guid(),
        icon: 'dummy01.jpg',
        username: this.commentService.user.username,
        profession: this.commentService.user.profession,
        comment: data['replyComment'],
        like: false,
        reply: false,
        timestamp: this.utils.getTimeStamp(new Date())
      };

      const tempArray = [...this.comments];
      tempArray.find((c, index) => {
        if (c.id === data['id']) {
          tempArray[index]['replies'].push(comment);
          return true;
        }
      });

      if (data['childId']) {
        this.comments = tempArray.filter((c, index) => {
          if (c.id === data['id']) {
            tempArray[index]['replies'].find(r => {
              if (r.id === data['childId']) {
                r.reply = !r.reply;
                return true;
              }
            });
          }
          return true;
        });
      } else {
        tempArray.find(c => {
          if (c.id !== data['id']) {
            c.reply = !c.reply;
            return true;
          }
        });
      }
      this.commentService.setComments(this.comments);
    });
  }

  updateComment(comment: Comments) {
    this.comments.push(comment);
    this.commentService.setComments(this.comments);
  }

  deleteComment({ id, childId }) {
    if (childId) {
      const tempArray = [...this.comments];
      this.comments = tempArray.filter((c, index) => {
        if (c.id === id) {
          tempArray[index]['replies'] = tempArray[index]['replies'].filter(r => r.id !== childId);
        }
        return true;
      });
    } else {
      this.comments = this.comments.filter(c => c.id !== id);
    }
    this.commentService.setComments(this.comments);
  }
}
