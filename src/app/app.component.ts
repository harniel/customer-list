import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Customer List';
  customers: any[] = [];

  reset() {}

  addCustomer(data: any) {
    const customer = {
      name: data.value.input,
    };

    if (customer.name !== '' && customer.name !== undefined) {
      this.customers.push(customer.name);
      data.value.input = '';
    }
  }
}
