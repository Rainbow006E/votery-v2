import { animate, group, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'app/shared/services/local-storage.service';

export const SlideInOutAnimation = [
  trigger('slideInOut', [
    state('in', style({
      'max-height': '500px', 'display': 'block', 'visibility': 'visible'
    })),
    state('out', style({
      'max-height': '0px', 'display': 'none', 'visibility': 'hidden'
    })),
    transition('in => out', [group([
      animate('400ms ease-in-out', style({
        'opacity': '0'
      })),
      animate('600ms ease-in-out', style({
        'max-height': '0px'
      })),
      animate('700ms ease-in-out', style({
        'visibility': 'hidden'
      }))
    ]
    )]),
    transition('out => in', [group([
      animate('10ms ease-in-out', style({
        'visibility': 'visible',
        'display': 'block'
      })),
      animate('400ms ease-in-out', style({
        'max-height': '250px'
      })),
      animate('700ms ease-in-out', style({
        'opacity': '1',
        'max-height': '500px'
      }))
    ]
    )])
  ]),
]

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss'],
  animations: [SlideInOutAnimation]
})
export class PrivacyComponent implements OnInit {
  animationState = 'in';

  constructor(
    private lostorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    if (this.lostorageService.getItem('cookieStatus') === 'accept') {
      this.animationState = 'out';
    } else {
      this.animationState = 'out';
      setTimeout(() => {
        this.animationState = 'in';
      }, 10);
    }
  }

  agreePrivacy() {
    this.animationState = 'out';
    this.lostorageService.setItem('cookieStatus', 'accept');
  }

  goPrivacy() {
    this.animationState = 'out';
  }
}
