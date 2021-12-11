import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BuyAddListingComponent } from 'app/shared/modals/buy-add-listing/buy-add-listing.component';
import { BuyConfirmComponent } from 'app/shared/modals/buy-confirm/buy-confirm.component';
import { DepositModalComponent } from 'app/shared/modals/deposit-modal/deposit-modal.component';
import { SellAddListingComponent } from 'app/shared/modals/sell-add-listing/sell-add-listing.component';
import { SellConfirmComponent } from 'app/shared/modals/sell-confirm/sell-confirm.component';
import { WithdrawModalComponent } from 'app/shared/modals/withdraw-modal/withdraw-modal.component';

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

  constructor(
    private ngbModal: NgbModal
  ) {
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

  deposit() {
    const depositModalRef = this.ngbModal.open(DepositModalComponent, { backdrop: 'static', centered: true, size: 'lg', windowClass: 'modal-custom-medium deposit' });
    depositModalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

  withdraw() {
    const withdrawlModalRef = this.ngbModal.open(WithdrawModalComponent, { backdrop: 'static', centered: true, size: 'lg', windowClass: 'modal-custom-medium withdraw' });
    withdrawlModalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

  buyVOC() {
    const buyAddListingModalRef = this.ngbModal.open(BuyAddListingComponent, { backdrop: 'static', centered: true, size: 'lg', windowClass: 'modal-custom-medium buyAddListing' });
    buyAddListingModalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

  sellVOC() {
    const sellAddListingModalRef = this.ngbModal.open(SellAddListingComponent, { backdrop: 'static', centered: true, size: 'lg', windowClass: 'modal-custom-medium sellAddListing' });
    sellAddListingModalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

  buyConfirm() {
    const buyConfirmModalRef = this.ngbModal.open(BuyConfirmComponent, { backdrop: 'static', centered: true, size: 'lg', windowClass: 'modal-custom-medium buyConfirm' });
    buyConfirmModalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

  sellConfirm() {
    const sellConfirmModalRef = this.ngbModal.open(SellConfirmComponent, { backdrop: 'static', centered: true, size: 'lg', windowClass: 'modal-custom-medium sellConfirm' });
    sellConfirmModalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }
}
