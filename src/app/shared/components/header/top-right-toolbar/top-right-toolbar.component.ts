import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { SharedModule } from '../../../../core/shared.module';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-top-right-toolbar',
    standalone: true,
    imports: [SharedModule],
    templateUrl: './top-right-toolbar.component.html',
    styleUrl: './top-right-toolbar.component.scss',
})
export class TopRightToolbarComponent {
    constructor(private translate: TranslateService) {}

    @Input({ required: true })
    public profiles!: any[];

    @ViewChild('searchInput')
    public searchInput!: ElementRef<HTMLInputElement>;

    public showPopupMenu: boolean = false;
    public searchExpanded: boolean = false;

    public menuList = [
        {
            iconClass: 'fa-solid fa-pencil',
            text: this.translate.instant('Manage Profile'),
        },
        {
            iconClass: 'fa-solid fa-arrow-right-from-bracket',
            text: this.translate.instant('Exit Profile'),
        },
        {
            iconClass: 'fa-solid fa-right-left',
            text: this.translate.instant('Transfer Profile'),
        },
        {
            iconClass: 'fa-regular fa-user',
            text: this.translate.instant('Account'),
        },
        {
            iconClass: 'fa-regular fa-circle-question',
            text: this.translate.instant('Help Center'),
        },
    ];

    public expandSearch(e: MouseEvent) {
        e.preventDefault();
        this.searchExpanded = true;
        this.searchInput?.nativeElement.focus();
    }

    public closeSearch() {
        this.searchExpanded = false;
    }

    public onAvatarMouseEnter() {
        this.showPopupMenu = true;
    }

    public onAvatarMouseLeave() {
        this.showPopupMenu = false;
    }
}
