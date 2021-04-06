import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-twofa-done-modal',
  templateUrl: './twofa-done-modal.component.html',
  styleUrls: ['./twofa-done-modal.component.scss']
})
export class TwofaDoneModalComponent implements OnInit {

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

}
