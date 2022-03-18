import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  products = [
    {
      id: 0,
      name: '',
      price: 0,
      desc: '',
    }
  ];
  newProduct = {
    id: 0,
    name: '',
    price: 0,
    desc: ''
  };

  onSubmit(product:any){
    console.log(product);
    // if(this.newProduct.id){
    //   for(let i=0; i < this.products.length; i++){
    //     if(this.products[i].id === this.newProduct.id ){
    //       this.products[i] = this.newProduct;
    //     }
    //   }
    // }else{
      this.newProduct = {
        ...this.newProduct,
        id:this.products.length,
        price:Number(this.newProduct.price),
      };
      this.products.push(this.newProduct);
      console.log(this.newProduct);
    // }
  }
  onEdit(product:any){
    this.newProduct = product;
  }
}
