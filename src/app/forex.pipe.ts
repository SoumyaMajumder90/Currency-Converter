import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'forex'
})
export class ForexPipe implements PipeTransform {
  rates: { [key: string]: number } = {
    USD: 1.126735,
    GBP: 0.876893,
    INR: 79.677056
  };

  transform(value: number, fromCurrency: string, toCurrency: string): number {
    const fromRate = this.rates[fromCurrency];
    const toRate = this.rates[toCurrency];

    if (!fromRate || !toRate) {
      throw new Error('Invalid currency code');
    }

    return value / fromRate * toRate;
  }
}

