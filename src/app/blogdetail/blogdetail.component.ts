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
    let programmes = [];
    let ids = blogs.map(blog => blog.id);
    for (const projet of projets) {
      for (const list of projet.list) {
        if (!ids.includes(list.id)) programmes.push(list);
      }
    }
    programmes.sort(function(a, b) {
      let a_date = new Date(a.date_range[a.date_range.length-1]).getTime();
      let b_date = new Date(b.date_range[b.date_range.length-1]).getTime();
      return b_date - a_date;
    });
    return [...programmes, ...blogs];
  }
  
  blogs = this.getBlogs();

  constructor() { }

  ngOnInit(): void {
  }

}
