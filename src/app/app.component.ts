import { Component } from '@angular/core';
import { ForexPipe } from './forex.pipe';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  convertedValue = 0;

  onSubmit(formValue: any) {
    const amount = formValue.amount;
    const fromCurrency = formValue.fromCurrency;
    const toCurrency = formValue.toCurrency;

    const forexPipe = new ForexPipe();
    this.convertedValue = forexPipe.transform(amount, fromCurrency, toCurrency);
  }
}
