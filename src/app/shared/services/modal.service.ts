import { Injectable } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgbModal, NgbActiveModal  } from '@ng-bootstrap/ng-bootstrap';
import { from, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthModalComponent } from '../modals/auth-modal/auth-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    private ngbModal: NgbModal
  ) { }

  openAuthModal() {
    const modal = this.ngbModal.open(AuthModalComponent, { backdrop: true, windowClass:'animated slideInUp' });
    // const modal = await this.ngbModal.open(AuthModalComponent, { backdrop: true });
    // return modal;
    return from(modal.result).pipe(
      catchError(error => {
        console.warn(error);
        return of(undefined);
      })
    );
  }

  confirm(
    prompt = 'Really?', title = 'Confirm'
  ) {
    const modal = this.ngbModal.open(
      AuthModalComponent, { backdrop: 'static' });

    modal.componentInstance.prompt = prompt;
    modal.componentInstance.title = title;

    return from(modal.result).pipe(
      catchError(error => {
        console.warn(error);
        return of(undefined);
      })
    );
  }
}

