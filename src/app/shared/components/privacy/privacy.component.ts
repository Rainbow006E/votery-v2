import { animate, group, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'app/shared/services/local-storage.service';

export const SlideInOutAnimation = [
  trigger('openClose', [
    state('true', style({transform: 'translateX(0%)'})),
    state('false', style({transform: 'translateX(120%)'})),
    transition('false <=> true', animate('800ms ease-in'))
  ])
]

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss'],
  animations: [SlideInOutAnimation]
})
export class PrivacyComponent implements OnInit {
  isOpen: boolean = true;

  constructor(
    private lostorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    if (this.lostorageService.getItem('cookieStatus') === 'accept') {
      this.isOpen = false;
    } else {
      this.isOpen = false;
      setTimeout(() => {
        this.isOpen = true;
      }, 100);
    }
  }

  ok() {
    this.isOpen = false;
    this.lostorageService.setItem('cookieStatus', 'accept');
  }
}
