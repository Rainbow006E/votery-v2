import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-email-sent-modal',
  templateUrl: './email-sent-modal.component.html',
  styleUrls: ['./email-sent-modal.component.scss']
})
export class EmailSentModalComponent implements OnInit {
  another: boolean = false;

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

  sendAnother() {
    this.another = true;
  }

  closeModal() {
    this.activeModal.close();
  }
}
