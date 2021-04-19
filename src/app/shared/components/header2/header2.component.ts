import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DepositModalComponent } from 'app/shared/modals/deposit-modal/deposit-modal.component';
import { WithdrawModalComponent } from 'app/shared/modals/withdraw-modal/withdraw-modal.component';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.scss']
})
export class Header2Component implements OnInit {
  private toggleButton: any;
  private sidebarVisible: boolean;
  @Input() path: string;
  
  constructor(
    public location: Location,
    private element : ElementRef,
    private ngbModal: NgbModal
  ) {
    this.sidebarVisible = false;
  }

  ngOnInit(): void {
    const navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
  }

  sidebarOpen() {
    const toggleButton = this.toggleButton;
    const html = document.getElementsByTagName('html')[0];
    setTimeout(function () {
      toggleButton.classList.add('toggled');
    }, 500);
    html.classList.add('nav-open');

    this.sidebarVisible = true;
  };
  sidebarClose() {
    const html = document.getElementsByTagName('html')[0];
    this.toggleButton?.classList.remove('toggled');
    this.sidebarVisible = false;
    html.classList.remove('nav-open');
  };
  sidebarToggle() {
    // const toggleButton = this.toggleButton;
    // const body = document.getElementsByTagName('body')[0];
    if (this.sidebarVisible === false) {
      this.sidebarOpen();
    } else {
      this.sidebarClose();
    }
  };

  isDocumentation() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee === '/documentation') {
      return true;
    }
    else {
      return false;
    }
  }

  deposit() {
    const depositModalRef = this.ngbModal.open(DepositModalComponent, { backdrop: 'static', centered: true, size: 'lg', windowClass: 'modal-custom-medium' });

    depositModalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

  withdraw() {
    const withdrawlModalRef = this.ngbModal.open(WithdrawModalComponent, { backdrop: 'static', centered: true, size: 'lg', windowClass: 'modal-custom-medium' });

    withdrawlModalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }
}
