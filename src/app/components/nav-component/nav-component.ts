import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-nav-component',
    imports: [],
    templateUrl: './nav-component.html',
    styleUrl: './nav-component.scss',
})
export class NavComponent {
    private router = inject(Router);
    isDropdownOpen: boolean = false;

    toggleMenu(): void {
        this.isDropdownOpen = !this.isDropdownOpen;
    }

    navigateTo(route: string): void {
        this.router.navigateByUrl(route);
    }
}
