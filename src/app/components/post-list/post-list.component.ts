import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { Posts } from 'src/app/interfaces/posts';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  constructor(private api: ApiService) {}
  posts: Posts[] = [];
  ngOnInit(): void {
    this.api.getAllPosts().subscribe((res: any) => {
      this.posts = res;
    });
  }
  editPost(posts: Posts) {
    console.log(posts);
  }
  deletePost(posts: Posts) {
    console.log(posts);
  }
}
