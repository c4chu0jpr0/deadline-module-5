import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
var $: any;
@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css'],
})
export class CreateCustomerComponent implements OnInit {
  customer: any = {
    name: '',
    gender: '',
    hobbies: '',
    birthday: '',
  };
  
  constructor(private router: Router, private service: CustomerService) {}

  ngOnInit(): void {}

  dangki = () => { 
    
    this.service
      .addCustomer(this.customer)
      .then((res) => {
        this.router.navigateByUrl('/');
      })
      .catch((e) => {
        window.alert('Connection Error !');
      });
  };
 
  Back = () => {
    this.router.navigateByUrl('/');
  };
}
