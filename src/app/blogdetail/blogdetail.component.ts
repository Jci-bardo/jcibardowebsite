import { Component, OnInit } from '@angular/core';
import { blogs } from 'src/constants';

@Component({
  selector: 'app-blogdetail',
  templateUrl: './blogdetail.component.html',
  styleUrls: ['./blogdetail.component.css']
})
export class BlogdetailComponent implements OnInit {

  blogs = blogs

  constructor() { }

  ngOnInit(): void {
  }

}
