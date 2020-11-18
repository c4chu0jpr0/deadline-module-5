import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  value: Number;
  customer: any = {
    name: '',
    gender: '',
    hobbies: '',
    birthday: '',
  };
  constructor(public router: Router, private actRoute: ActivatedRoute,private service: CustomerService) {
    this.value = parseInt(this.actRoute.snapshot.params.id);
    debugger
    this.getCustomer(this.value);
   }
   
  ngOnInit(): void {
    
  }
  
  getCustomer(id){
    debugger
    this.service.detailCustomer(id)
    .then(res => {
      this.customer = res;
    }).catch(e => {
      window.alert('Connection Error !');
    })
  }
  update=()=>{
    this.service.updateCustomer(this.value, this.customer)
    .then((res) => {
      this.router.navigateByUrl('/');
    })
    .catch((e) => {
      window.alert('Connection Error !');
    });
  }
}
