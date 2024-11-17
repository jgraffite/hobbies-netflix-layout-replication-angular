import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-maturity-rating-box',
    standalone: true,
    imports: [],
    templateUrl: './maturity-rating-box.component.html',
    styleUrl: './maturity-rating-box.component.scss',
})
export class MaturityRatingBoxComponent {
    @Input() bgColor!: string;
    @Input() textColor: string = 'white';
}
