import { DOCUMENT } from '@angular/common';
import { Location } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NavbarComponent } from 'app/shared/components/navbar/navbar.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss']
})
export class HomeLayoutComponent implements OnInit {
  private _router: Subscription;
  @ViewChild(NavbarComponent) navbar: NavbarComponent;
  
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
      
        if (window.outerWidth > 991) {
            window.document.children[0].scrollTop = 0;
        }else{
            window.document.activeElement.scrollTop = 0;
        }
        this.navbar.sidebarClose();
    });
    this.renderer.listen('window', 'scroll', (event) => {
      console.log('scroll change');
      
        const number = window.scrollY;
        var _location = this.location.path();
        _location = _location.split('/')[2];

        if (number > 150 || window.pageYOffset > 150) {
            navbar.classList.remove('navbar-transparent');
        } else if (_location !== 'login' && this.location.path() !== '/nucleoicons') {
            // remove logic
            navbar.classList.add('navbar-transparent');
        }
    });
  }
}
