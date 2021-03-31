import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  clear() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.clear();
    }
  }

  setItem(key: string, value: string) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(key, value);
    }
  }

  getItem(key: string) {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(key);
    }
  }

  removeItem(key: string) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(key);
    }
  }

  key(index: number) {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.key(index);
    }
  }

  length() {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.length;
    }
  }
}
