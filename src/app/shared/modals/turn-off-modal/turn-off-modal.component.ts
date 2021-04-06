import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-turn-off-modal',
  templateUrl: './turn-off-modal.component.html',
  styleUrls: ['./turn-off-modal.component.scss']
})
export class TurnOffModalComponent implements OnInit {

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

  cancel() {
    
  }
}
