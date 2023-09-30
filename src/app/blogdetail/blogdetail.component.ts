import { Component, OnInit } from '@angular/core';
import { blogs, projets } from 'src/constants';

@Component({
  selector: 'app-blogdetail',
  templateUrl: './blogdetail.component.html',
  styleUrls: ['./blogdetail.component.css']
})
export class BlogdetailComponent implements OnInit {

  //blogs = blogs
  getBlogs() {
    let t = [];
    let ids = blogs.map(blog => blog.id);
    for (const projet of projets) {
      for (const list of projet.list) {
        if (!ids.includes(list.id)) t.push(list);
      }
    }
    return [...t, ...blogs];
  }
  
  blogs = this.getBlogs();

  constructor() { }

  ngOnInit(): void {
  }

}
