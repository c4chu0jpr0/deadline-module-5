import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCustomerComponent } from './customer/action-customer/create-customer/create-customer.component';
import { DeleteCustomerComponent } from './customer/action-customer/delete-customer/delete-customer.component';
import { UpdateCustomerComponent } from './customer/action-customer/update-customer/update-customer.component';
import { CustomerComponent } from './customer/customer.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'customers',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'customers',
        component: CustomerComponent,
        
      },
      {
        path: 'customers/create',
        component: CreateCustomerComponent,
      },{
        path: 'customers/update/:id',
        component: UpdateCustomerComponent,
      },
      {
        path: 'customers/delete/:id',
        component: DeleteCustomerComponent,
      }
  
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
