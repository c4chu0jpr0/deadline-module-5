import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})


export class CustomerComponent implements OnInit {
customer: any =[];
  constructor(private router: Router,private service: CustomerService) { }

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.service.getData()
      .then(res => {
        this.customer = res;
      }).catch(e => {
        window.alert('Connection Error !');
      })
  }
  goToAdd=()=>{
    this.router.navigateByUrl("/customers/create");
  }


  updateCustomer=(id)=>{
     debugger
    this.router.navigateByUrl("/customers/update/"+id);
  }
  deleteCustomer(id){
    debugger
    this.router.navigateByUrl("/customers/delete/"+id);
  }
}
