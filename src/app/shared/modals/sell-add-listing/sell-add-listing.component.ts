import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sell-add-listing',
  templateUrl: './sell-add-listing.component.html',
  styleUrls: ['./sell-add-listing.component.scss']
})
export class SellAddListingComponent implements OnInit {

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
