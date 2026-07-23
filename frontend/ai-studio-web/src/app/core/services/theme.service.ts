import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  isDark = signal(false);

  constructor() {

    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
      this.enableDarkTheme();
    }

  }

  toggleTheme() {

    this.isDark()
      ? this.enableLightTheme()
      : this.enableDarkTheme();

  }

  enableDarkTheme() {

    this.isDark.set(true);

    document.body.classList.add('dark-theme');

    localStorage.setItem('theme', 'dark');

  }

  enableLightTheme() {

    this.isDark.set(false);

    document.body.classList.remove('dark-theme');

    localStorage.setItem('theme', 'light');

  }

}