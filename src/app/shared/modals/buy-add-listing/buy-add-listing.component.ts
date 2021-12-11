import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-buy-add-listing',
  templateUrl: './buy-add-listing.component.html',
  styleUrls: ['./buy-add-listing.component.scss']
})
export class BuyAddListingComponent implements OnInit {
  
  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.activeModal.close();
  }

  addListing() {
    
  }
}
