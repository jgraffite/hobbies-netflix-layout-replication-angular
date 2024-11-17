import { Component, Input } from '@angular/core';
import { Profile } from '../../../interfaces/profile';
import { TranslateService } from '@ngx-translate/core';
import { SharedModule } from '../../../../core/shared.module';

@Component({
    selector: 'app-mobile-menu',
    standalone: true,
    imports: [SharedModule],
    templateUrl: './mobile-menu.component.html',
    styleUrl: './mobile-menu.component.scss',
})
export class MobileMenuComponent {
    constructor(private translate: TranslateService) {}

    @Input({ required: true })
    public profiles!: Profile[];

    public menuElemId = 'mobile-menu';
    protected menuOpen = false;

    public menuList = [
        this.translate.instant('Account'),
        this.translate.instant('Help Center'),
        this.translate.instant('Sign Out of Netflix'),
    ];

    public categoryList = [
        { active: true, name: this.translate.instant('Home') },
        { active: false, name: this.translate.instant('My List') },
        { active: false, name: this.translate.instant('Thrillers') },
        { active: false, name: this.translate.instant('Kids & Family') },
        {
            active: false,
            name: this.translate.instant('Internacional Movies & TV'),
        },
    ];

    public openMenu() {
        this.menuOpen = true;
    }

    public closeMenu() {
        this.menuOpen = false;
    }

    public toggleMobileMenu() {
        this.menuOpen = !this.menuOpen;
    }

    public onClickMenuWrapper(e: MouseEvent) {
        if ((e.target as HTMLElement).id == this.menuElemId) {
            this.closeMenu();
        }
    }
}
