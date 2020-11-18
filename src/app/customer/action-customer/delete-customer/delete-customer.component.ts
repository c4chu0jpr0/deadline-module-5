import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {
  value: Number;
  
  constructor(public router: Router, private actRoute: ActivatedRoute,private service: CustomerService) {
    this.value = parseInt(this.actRoute.snapshot.params.id);
   }

  ngOnInit(): void {
  }
  deleteCus(){
    debugger
    this.service.deleteCustomer(this.value)
    .then((res) => {
      this.router.navigateByUrl('/');
    })
    .catch((e) => {
      window.alert('Connection Error !');
    });
  }
  back(){
    this.router.navigateByUrl("/");
  }
}
