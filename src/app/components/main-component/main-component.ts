import { Component, inject } from '@angular/core';
import { NavComponent } from "../nav-component/nav-component";
import { MatIconModule } from "@angular/material/icon";
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-component',
  imports: [NavComponent, MatIconModule],
  templateUrl: './main-component.html',
  styleUrl: './main-component.scss',
})
export class MainComponent {
  private router = inject(Router);

      navigateTo(route: string): void {
        this.router.navigateByUrl(route);
    }
}
