import { Component, Input, ViewChild } from '@angular/core';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { TopRightToolbarComponent } from './top-right-toolbar/top-right-toolbar.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [
        NavigationMenuComponent,
        TopRightToolbarComponent,
        MobileMenuComponent,
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent {

    @Input({ required: true })
    public profiles!: any[];

    @ViewChild(MobileMenuComponent) mobileMenuCmp!: MobileMenuComponent;

    toggleMobileMenu() {
        this.mobileMenuCmp.toggleMobileMenu();
    }
}
