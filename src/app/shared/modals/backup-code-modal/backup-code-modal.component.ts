import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TwofaDoneModalComponent } from '../twofa-done-modal/twofa-done-modal.component';

@Component({
  selector: 'app-backup-code-modal',
  templateUrl: './backup-code-modal.component.html',
  styleUrls: ['./backup-code-modal.component.scss']
})
export class BackupCodeModalComponent implements OnInit {
  codes: string[] = [];

  constructor(
    public activeModal: NgbActiveModal,
    private ngbModal: NgbModal
  ) { }

  ngOnInit(): void {
    this.codes = [
      'IIEVU 6IVY3',
      'ZEAUK P3HSL',
      'VNH7X UU8L0',
      'C4AIG JFHHQ',
      'M3XS4 SIGCB',
      '2NRWE T2HV4',
      'PB38V KIA1C',
      'KT8ES 3IVYC',
      'BIALL JF21T',
      'KL27X TT8CW'
    ];
  }

  generateNewCode() {
    const codes = this.codes;
    var j, x, i;
    for (i = codes.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = codes[i];
        codes[i] = codes[j];
        codes[j] = x;
    }
    this.codes = codes;
  }

  download() {
    this.activeModal.close();
    const twofaDoneModalRef = this.ngbModal.open(TwofaDoneModalComponent, { backdrop: 'static', centered: true, size: 'sm' });
    twofaDoneModalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }
}
