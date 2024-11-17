import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-button',
    standalone: true,
    imports: [],
    templateUrl: './button.component.html',
    styleUrl: './button.component.scss',
})
export class ButtonComponent {
    @Output() clickHandler = new EventEmitter();

    @Input() variant: 'basic' | 'classic' | '' = '';
    @Input() visual: 'primary' | 'secondary' | 'tertiary' | 'outline' | '' = '';
    @Input() rounded!: string | boolean;
    @Input() withIcon!: string | boolean;

    public onClick(e: MouseEvent) {
        this.clickHandler.emit(e);
    }
}
