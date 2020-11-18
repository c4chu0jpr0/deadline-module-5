import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CreateCustomerComponent } from './customer/action-customer/create-customer/create-customer.component';
import { UpdateCustomerComponent } from './customer/action-customer/update-customer/update-customer.component';
import { DetailCustomerComponent } from './customer/action-customer/detail-customer/detail-customer.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { DeleteCustomerComponent } from './customer/action-customer/delete-customer/delete-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CreateCustomerComponent,
    UpdateCustomerComponent,
    DetailCustomerComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    DeleteCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
