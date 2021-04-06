import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AuthModalComponent } from 'app/shared/modals/auth-modal/auth-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    private toggleButton: any;
    private sidebarVisible: boolean;
    @Input() path: string;

    constructor(
        public location: Location,
        private element: ElementRef,
        private ngbModal: NgbModal
    ) {
        this.sidebarVisible = false;
    }

    ngOnInit() {
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this.openAuthModal();
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

    openAuthModal() {
        const modal = this.ngbModal.open(AuthModalComponent, { backdrop: 'static', centered: true, size: 'lg' });

        modal.result.then((result) => {
          console.log(result);
        }).catch((error) => {
          console.log(error);
        });
    }
}
