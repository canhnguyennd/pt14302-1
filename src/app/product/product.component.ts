import { Component, OnInit } from '@angular/core';
import {polylills} from '../polyfills'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
    polylills: polylills = {
    name: "Item 1",
    price: 24.99,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.",
    status: false,
  };

}