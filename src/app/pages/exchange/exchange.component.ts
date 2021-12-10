import { Component, OnInit } from '@angular/core';

interface ActualListingData {
  amount: number,
  pricePerOne: number,
  totalPrice: number,
  endDate?: string
};

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {
  buyList: ActualListingData[] = [];
  buyAllList: ActualListingData[] = [];
  sellList: ActualListingData[] = [];
  sellAllList: ActualListingData[] = [];

  constructor() {
    this.buyList = [
      {
        amount: 100,
        pricePerOne: 0.16,
        totalPrice: 16,
        endDate: "12.12.2022"
      },
      {
        amount: 100,
        pricePerOne: 0.16,
        totalPrice: 16,
        endDate: "12.12.2022"
      }
    ];
    this.buyAllList = [
      {
        amount: 100,
        pricePerOne: 0.16,
        totalPrice: 16
      },
      {
        amount: 50,
        pricePerOne: 0.17,
        totalPrice: 8.22
      },
      {
        amount: 32,
        pricePerOne: 0.17,
        totalPrice:7.43
      },
      {
        amount: 44,
        pricePerOne: 0.17,
        totalPrice: 8.12
      },
      {
        amount: 150,
        pricePerOne: 0.18,
        totalPrice: 32
      },
      {
        amount: 1000,
        pricePerOne: 0.18,
        totalPrice: 18
      },
      {
        amount: 20,
        pricePerOne: 0.18,
        totalPrice: 4.5
      },
      {
        amount: 10,
        pricePerOne: 0.19,
        totalPrice: 3.93
      },
      {
        amount: 250,
        pricePerOne: 0.19,
        totalPrice: 16
      }
    ];
    this.sellAllList = [
      {
        amount: 44,
        pricePerOne: 0.17,
        totalPrice: 8.12
      },
      {
        amount: 150,
        pricePerOne: 0.18,
        totalPrice: 32
      },
      {
        amount: 1000,
        pricePerOne: 0.18,
        totalPrice: 18
      },
      {
        amount: 20,
        pricePerOne: 0.18,
        totalPrice: 4.5
      },
      {
        amount: 10,
        pricePerOne: 0.19,
        totalPrice: 3.93
      },
      {
        amount: 250,
        pricePerOne: 0.19,
        totalPrice: 16
      }
    ];
  }

  ngOnInit(): void {
  }

}
