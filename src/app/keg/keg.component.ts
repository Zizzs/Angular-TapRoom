import { Component, OnInit } from '@angular/core';
import { Keg } from '../models/keg';

@Component({
  selector: 'app-keg',
  templateUrl: './keg.component.html',
  styleUrls: ['./keg.component.css']
})
export class KegComponent {

  stock = [
    new Keg("Rainier", "Lager", 5, 6, 124),
    new Keg("Blue Moon", "Ale", 6, 6, 124),
    new Keg("Bud", "Lager", 3, 5, 124),
    new Keg("Red Hammer", "IPA", 10, 7, 124)
  ]

  submitForm(name: string, style: string, price: number, alcohol: number) {
    let temp = new Keg(name, style, price, alcohol, 124);
    this.stock.push(temp);
  }

  inventoryColor(keg) {
    if (keg.amount <= 20) {
      return "bg-danger";
    } else if (keg.amount <= 70) {
      return "bg-warning";
    } else {
      return "bg-info";
    }
  }

  priceColor(keg) {
    if (keg.price >= 10) {
      return "bg-danger";
    } else if (keg.price >= 6) {
      return "bg-warning";
    } else {
      return "bg-info"
    }
  }

  pourPint(keg) {
    keg.amount--;
  }

  pourGrowler(keg) {
    keg.amount -= 2;
  }

  pourLgGrowler(keg) {
    keg.amount -= 4;
  }

  refillKeg(keg) {
    keg.amount = 124;
  }

  edit(keg, name: string, style: string, price: number, alcohol: number) {
    keg.name = name;
    keg.style = style;
    keg.price = price;
    keg.alcohol = alcohol;
  }
}
