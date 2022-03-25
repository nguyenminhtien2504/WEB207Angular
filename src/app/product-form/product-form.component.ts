import { ProductService } from './../services/product.service';
import { ActivatedRoute, Navigation, Router, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  productDetail:any;
  id:any;
  constructor(
    private activRoute: ActivatedRoute, // sử dựng để lấy id trên url
    private router: Router, // sử dụng điều hướng về trang product
    private ps: ProductService
  ) { }

  ngOnInit(): void {
    this.id = this.activRoute.snapshot.params['id'];
    // nếu có id đang chỉnh sửa thì mới call api lấy chi tiết
    // không thì thôi
    if (this.id !== undefined) {
      this.ps.getProduct(this.id).subscribe(data => {
        this.productDetail = data;
      })
    } else {
      this.productDetail = {
        name: '',
        desc: '',
        price: 0
      };
    }
  }

  onUpdate (obj :any) {
    // Nhan du lieu tu form, tien hanh call API
    if (obj.id !== undefined) {
      this.ps.updateProduct(this.id, obj).subscribe();
    } else {
      this.ps.createProduct(obj).subscribe();
    }
    // Tien hanh dieu huong ve trang danh sach
    this.router.navigate(['/product']);
  }
}
