import { Component, OnInit } from '@angular/core';
import {Product} from '../Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
    product : Product={
      name: "Item 1",
    price: 24.999,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.",
    status: true,
    img:"http://placehold.it/700x400"
    }
    changeStatus(){
      // console.log('1');
      this.product.status=false;
    }
    changeTitle(e){
      // console.log(e.target.value);
      this.product.name=e.target.value;
    }

}