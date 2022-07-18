import { Component, OnInit } from '@angular/core';
import { CartApiService } from 'src/app/services/cart-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  totalitemNo:Number=0;

  constructor(
    private cartApi:CartApiService
  ) { }

  ngOnInit(): void {

    this.cartApi.getProductData().subscribe(res=>{
      this.totalitemNo = res.length;
    })
  }

}
