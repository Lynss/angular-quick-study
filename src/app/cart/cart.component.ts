import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;
  checkoutForm;

  constructor(private cartService:CartService,private formBuilder:FormBuilder) { 
    this.items = this.cartService.getItems();
    this.checkoutForm = this.formBuilder.group({
      name:'',
      address:'',
    });
  }

  onSubmit(data){
    console.warn(data);
    window.alert(`Hi,${data.name},your products will be sent to ${data.address} soon`);
    this.items = this.cartService.clearItems();
    this.checkoutForm.reset();
    console.warn(this.checkoutForm.value)
  }

  ngOnInit() {
  }

}