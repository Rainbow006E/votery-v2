import { DOCUMENT, Location } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { HeaderComponent } from 'app/shared/components/header/header.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-second-layout',
  templateUrl: './second-layout.component.html',
  styleUrls: ['./second-layout.component.scss']
})
export class SecondLayoutComponent implements OnInit {
  private _router: Subscription;
  @ViewChild(HeaderComponent) navbar: HeaderComponent;
  path: string = "";
  
  constructor(
    private renderer: Renderer2,
    private router: Router,
    @Inject(DOCUMENT,)
    private document: any,
    private element : ElementRef,
    public location: Location
  ) { }

  ngOnInit(): void {
    var navbar : HTMLElement = this.element.nativeElement.children[0].children[0];
    this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
      console.log('event');
      this.path = this.router.url;
      if (window.outerWidth > 991) {
          window.document.children[0].scrollTop = 0;
      }else{
          window.document.activeElement.scrollTop = 0;
      }
      this.navbar?.sidebarClose();
    });

    this.path = this.router.url;

    this.renderer.listen('window', 'scroll', (event) => {      
        const number = window.scrollY;
        var _location = this.location.path();
        _location = _location.split('/')[2];

        if (number > 78 || window.pageYOffset > 78) {
            navbar.classList.remove('navbar-transparent');
        } else if (_location !== 'login' && this.location.path() !== '/nucleoicons') {
            // remove logic
            navbar.classList.add('navbar-transparent');
        }
    });
  }

}
