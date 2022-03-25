import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
// import { type } from 'os';

// type PRODUCT_TYPE ={
//   id: number,
//   name: string,
//   desc: string,
//   price: number
// };
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products:any;
  constructor(private ps: ProductService) { }

  ngOnInit(): void {
    this.ps.getProducts().subscribe(data => {
      this.products =data;
    });
  }

  onGetList(){
    this.ps.getProducts().subscribe(data => {
      this.products =data;
    });
  }

  onDelete(id: number | string){
    if(id){
      this.ps.deleteProduct(id).subscribe(data => {
        this.onGetList();
      });
    }
  }

  // newProduct = {
  //   id: 0,
  //   name: '',
  //   price: 0,
  //   desc: ''
  // };

  // onSubmit(product:any){
  //   console.log(product);
  //     this.newProduct = {
  //       ...this.newProduct,
  //       id:this.products.length,
  //       price:Number(this.newProduct.price),
  //     };
  //     this.products.push(this.newProduct);
  //     console.log(this.newProduct);
  // }
  // onEdit(product:any){
  //   this.newProduct = product;
  // }
}
