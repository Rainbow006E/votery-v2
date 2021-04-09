import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ResultsModalComponent } from 'app/shared/modals/results-modal/results-modal.component';

export interface VoteType {
  commonNumber: number,
  count: number,
  active: boolean
}

export interface History {
  application: string,
  roomType: string,
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
  votingResults: VoteType[],
  members: number
}

export interface Group {
  group: string;
}

const HISTORY_DATA: (History | Group)[] = []; 

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HistoryComponent implements OnInit {
  displayedColumns: string[] = ['application', 'roomType', 'activity', 'amountAndCurrency', 'date', 'votingResults' ];
  dataSource = HISTORY_DATA;

  constructor(
    private ngbModal: NgbModal
  ) { }

  ngOnInit(): void {
    this.dataSource = [
      // Group 1
      { group: "February, 2021" },
      {
        application: "goldenLine",
        roomType: "1 EUR room",
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
        votingResults: [],
        members: 2
      },
      {
        application: "cryptoLine",
        roomType: "1 ETH room",
        activity: {
          name: "Prize payout",
          class: "prize-payout"
        },
        amountAndCurrency: {
          amount: 18,
          icon: "ethereum",
          currency: "eth"
        },
        date: new Date("12.12.2020 12:45"),
        votingResults: [
          {
            commonNumber: 3,
            count: this.randomCount(),
            active: true
          },
          {
            commonNumber: 4,
            count: this.randomCount(),
            active: true
          },
          {
            commonNumber: 6,
            count: this.randomCount(),
            active: true
          },
          {
            commonNumber: 2,
            count: this.randomCount(),
            active: true
          },
          {
            commonNumber: 5,
            count: this.randomCount(),
            active: true
          },
          {
            commonNumber: 1,
            count: this.randomCount(),
            active: true
          }
        ],
        members: 2
      },
      {
        application: "cryptoLine",
        roomType: "Free room",
        activity: {
          name: "Voting finished",
          class: "voting-finished"
        },
        amountAndCurrency: {
          amount: 0,
          icon: "ethereum",
          currency: "eth"
        },
        date: new Date("12.12.2020 12:45"),
        votingResults: [
          {
            commonNumber: 4,
            count: this.randomCount(),
            active: true
          },
          {
            commonNumber: 3,
            count: this.randomCount(),
            active: false
          },
          {
            commonNumber: 2,
            count: this.randomCount(),
            active: false
          },
          {
            commonNumber: 6,
            count: this.randomCount(),
            active: false
          },
          {
            commonNumber: 5,
            count: this.randomCount(),
            active: false
          },
          {
            commonNumber: 7,
            count: this.randomCount(),
            active: true
          },
          {
            commonNumber: 1,
            count: this.randomCount(),
            active: false
          }
        ],
        members: 2
      },
      { group: "January, 2021" },
      {
        application: "goldenLine",
        roomType: "1 EUR room",
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
        votingResults: [],
        members: 2
      },
      {
        application: "cryptoLine",
        roomType: "1 ETH room",
        activity: {
          name: "Prize payout",
          class: "prize-payout"
        },
        amountAndCurrency: {
          amount: 18,
          icon: "ethereum",
          currency: "eth"
        },
        date: new Date("12.12.2020 12:45"),
        votingResults: [
          {
            commonNumber: 3,
            count: this.randomCount(),
            active: true
          },
          {
            commonNumber: 4,
            count: this.randomCount(),
            active: true
          },
          {
            commonNumber: 6,
            count: this.randomCount(),
            active: true
          },
          {
            commonNumber: 2,
            count: this.randomCount(),
            active: true
          },
          {
            commonNumber: 5,
            count: this.randomCount(),
            active: true
          },
          {
            commonNumber: 1,
            count: this.randomCount(),
            active: true
          }
        ],
        members: 2
      },
      {
        application: "cryptoLine",
        roomType: "Free room",
        activity: {
          name: "Voting finished",
          class: "voting-finished"
        },
        amountAndCurrency: {
          amount: 0,
          icon: "ethereum",
          currency: "eth"
        },
        date: new Date("12.12.2020 12:45"),
        votingResults: [
          {
            commonNumber: 3,
            count: this.randomCount(),
            active: false
          },
          {
            commonNumber: 7,
            count: this.randomCount(),
            active: true
          },
          {
            commonNumber: 4,
            count: this.randomCount(),
            active: true
          },
          {
            commonNumber: 9,
            count: this.randomCount(),
            active: false
          },
          {
            commonNumber: 2,
            count: this.randomCount(),
            active: false
          },
          {
            commonNumber: 6,
            count: this.randomCount(),
            active: false
          },
          {
            commonNumber: 10,
            count: this.randomCount(),
            active: true
          },
          {
            commonNumber: 5,
            count: this.randomCount(),
            active: false
          },
          {
            commonNumber: 1,
            count: this.randomCount(),
            active: false
          },
          {
            commonNumber: 8,
            count: this.randomCount(),
            active: false
          }
        ],
        members: 2
      }
    ];
  }

  isGroup(index, item): boolean{
    return item.group;
  }

  randomCount() {
    return Math.round(Math.random() * 300);
  }

  viewResult(element) {
    const resultsModalRef = this.ngbModal.open(
      ResultsModalComponent,
      { 
        backdrop: 'static',
        centered: true,
        size: 'lg',
        windowClass: 'modal-custom-medium'
      }
    );

    resultsModalRef.componentInstance.element = element;

    resultsModalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }
}
