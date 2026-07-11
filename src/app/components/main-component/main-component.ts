import { Component, inject } from '@angular/core';
import { NavComponent } from '../nav-component/nav-component';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
    selector: 'app-main-component',
    imports: [MatIconModule],
    templateUrl: './main-component.html',
    styleUrl: './main-component.scss',
})
export class MainComponent {
    private router = inject(Router);

    ngAfterViewInit(): void {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                    } else {
                        entry.target.classList.remove('show');
                    }
                });
            },
            { threshold: 0.1 },
        );

        const sections = document.querySelectorAll('section');
        sections.forEach(element => observer.observe(element));
    }

    navigateTo(route: string): void {
        this.router.navigateByUrl(route);
    }
}
