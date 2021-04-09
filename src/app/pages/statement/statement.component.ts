import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

export interface balanceStatement {
  type: string,
  activity: {
    name: string,
    class: string
  },
  amountAndCurrency: {
    amount: number,
    icon: string,
    currency: string
  },
  date: Date,
  status: string,
  withdrawDate: Date
}

export interface Group {
  group: string;
}

const BALANCE_DATA: (balanceStatement | Group)[] = []; 

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatementComponent implements OnInit {
  displayedColumns: string[] = ['type', 'activity', 'amountAndCurrency', 'date', 'status', 'withdrawDate' ];
  dataSource = BALANCE_DATA;

  constructor() { }

  ngOnInit(): void {
    this.dataSource = [
      // Group 1
      { group: "February, 2021" },
      {
        type: "paypal",
        activity: {
          name: "Deposit",
          class: "deposit"
        },
        amountAndCurrency: {
          amount: 15,
          icon: "euro",
          currency: "eur"
        },
        date: new Date("12.12.2020 12:45"),
        status: null,
        withdrawDate: null
      },
      {
        type: "ethereum",
        activity: {
          name: "Withdraw",
          class: "withdraw"
        },
        amountAndCurrency: {
          amount: -200,
          icon: "ethereum",
          currency: "eth"
        },
        date: new Date("12.12.2020 12:45"),
        status: "completed",
        withdrawDate: new Date("12.12.2020 12:45")
      },
      {
        type: "bitcoin",
        activity: {
          name: "Deposit",
          class: "deposit"
        },
        amountAndCurrency: {
          amount: 0.001,
          icon: "bitcoin",
          currency: "btc"
        },
        date: new Date("12.12.2020 12:45"),
        status: null,
        withdrawDate: null
      },
      {
        type: "ethereum",
        activity: {
          name: "Deposit",
          class: "deposit"
        },
        amountAndCurrency: {
          amount: 100,
          icon: "ethereum",
          currency: "eth"
        },
        date: new Date("12.12.2020 12:45"),
        status: null,
        withdrawDate: null
      },
      {
        type: "goldenLine",
        activity: {
          name: "Participation fee",
          class: "participation-fee"
        },
        amountAndCurrency: {
          amount: -1,
          icon: "euro",
          currency: "eur"
        },
        date: new Date("12.12.2020 12:45"),
        status: null,
        withdrawDate: null
      },
      {
        type: "ethereum",
        activity: {
          name: "Withdraw",
          class: "withdraw"
        },
        amountAndCurrency: {
          amount: -200,
          icon: "ethereum",
          currency: "eth"
        },
        date: new Date("12.12.2020 12:45"),
        status: "completed",
        withdrawDate: new Date("12.12.2020 12:45")
      },
      {
        type: "bitcoin",
        activity: {
          name: "Deposit",
          class: "deposit"
        },
        amountAndCurrency: {
          amount: +0.001,
          icon: "bitcoin",
          currency: "btc"
        },
        date: new Date("12.12.2020 12:45"),
        status: null,
        withdrawDate: null
      },
      {
        type: "ethereum",
        activity: {
          name: "Deposit",
          class: "deposit"
        },
        amountAndCurrency: {
          amount: +100,
          icon: "ethereum",
          currency: "eth"
        },
        date: new Date("12.12.2020 12:45"),
        status: null,
        withdrawDate: null
      },
      {
        type: "cryptoLine",
        activity: {
          name: "Prize payout",
          class: "prize-payout"
        },
        amountAndCurrency: {
          amount: +18,
          icon: "ethereum",
          currency: "eth"
        },
        date: new Date("12.12.2020 12:45"),
        status: null,
        withdrawDate: null
      },
      {
        type: "paypal",
        activity: {
          name: "Deposit",
          class: "deposit"
        },
        amountAndCurrency: {
          amount: +15,
          icon: "ethereum",
          currency: "eth"
        },
        date: new Date("12.12.2020 12:45"),
        status: null,
        withdrawDate: null
      },
      // Group 2
      { group: "January, 2021" },
      {
        type: "paypal",
        activity: {
          name: "Deposit",
          class: "deposit"
        },
        amountAndCurrency: {
          amount: 15,
          icon: "euro",
          currency: "eur"
        },
        date: new Date("12.12.2020 12:45"),
        status: null,
        withdrawDate: null
      },
      {
        type: "ethereum",
        activity: {
          name: "Withdraw",
          class: "withdraw"
        },
        amountAndCurrency: {
          amount: -200,
          icon: "ethereum",
          currency: "eth"
        },
        date: new Date("12.12.2020 12:45"),
        status: "completed",
        withdrawDate: new Date("12.12.2020 12:45")
      },
      {
        type: "bitcoin",
        activity: {
          name: "Deposit",
          class: "deposit"
        },
        amountAndCurrency: {
          amount: 0.001,
          icon: "bitcoin",
          currency: "btc"
        },
        date: new Date("12.12.2020 12:45"),
        status: null,
        withdrawDate: null
      },
      {
        type: "paypal",
        activity: {
          name: "Deposit",
          class: "deposit"
        },
        amountAndCurrency: {
          amount: 15,
          icon: "euro",
          currency: "eur"
        },
        date: new Date("12.12.2020 12:45"),
        status: null,
        withdrawDate: null
      },
      {
        type: "ethereum",
        activity: {
          name: "Withdraw",
          class: "withdraw"
        },
        amountAndCurrency: {
          amount: -200,
          icon: "ethereum",
          currency: "eth"
        },
        date: new Date("12.12.2020 12:45"),
        status: "completed",
        withdrawDate: new Date("12.12.2020 12:45")
      }
    ];
  }

  isGroup(index, item): boolean{
    return item.group;
  }
}
