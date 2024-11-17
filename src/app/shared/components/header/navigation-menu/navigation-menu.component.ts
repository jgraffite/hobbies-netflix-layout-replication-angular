import { Component, EventEmitter, Output } from '@angular/core';
import { SharedModule } from '../../../../core/shared.module';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-navigation-menu',
    standalone: true,
    imports: [SharedModule],
    templateUrl: './navigation-menu.component.html',
    styleUrl: './navigation-menu.component.scss',
})
export class NavigationMenuComponent {
    @Output() toggleMobileMenuEvent = new EventEmitter();
    
    constructor(private translate: TranslateService) {}

    public navMenu: any[] = [
        this.translate.instant('Home'),
        this.translate.instant('TV Shows'),
        this.translate.instant('Movies'),
        this.translate.instant('News & Popular'),
        this.translate.instant('My List'),
        this.translate.instant('Browse By Languages'),
    ];

    openMobileMenu() {
        this.toggleMobileMenuEvent.emit();
    }
}
