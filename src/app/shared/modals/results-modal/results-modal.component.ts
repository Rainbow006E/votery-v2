import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-results-modal',
  templateUrl: './results-modal.component.html',
  styleUrls: ['./results-modal.component.scss']
})
export class ResultsModalComponent implements OnInit {
  @Input() public element: any;
  commonNumbers: number = 0;

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
    console.log('element: ', this.element);
    this.element.votingResults.forEach((reslut: any) => {
      if (reslut?.active) {
        this.commonNumbers++;
      }
    });
  }

  closeModal() {
    this.activeModal.close();
  }
}
