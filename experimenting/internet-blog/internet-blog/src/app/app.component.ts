import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'internet-blog';
  posts: any[] = [
    { title: 'asdfghjkl', content: '123456890' },
    { title: 'asdqeqw', content: '1234562323890' },
    { title: 'ashdhkl', content: '1234562323890' },
  ]
  rrr: any[]
  ngOnInit() {
    setTimeout(() => {
      this.rrr = this.posts
      this.posts = this.posts.map(post => {
        post = {
          ...post, 
          title: 'changed'
        }
        return post
      })
    }, 1000)
  }
}
