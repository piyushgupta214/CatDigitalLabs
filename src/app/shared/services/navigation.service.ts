import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class NavigationService {
    private history: string[] = [];

    constructor(private router: Router) {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.history.push(event.urlAfterRedirects);
            }
        });
    }

    back(): void {
        this.history.pop();
        if (this.history.length > 0) {
            this.router.navigateByUrl(this.history.pop() ?? '/');
        } else {
            this.router.navigateByUrl('/');
        }
    }
}
