import {
    AfterContentInit,
    AfterRenderPhase,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
    ViewChild,
    afterNextRender,
} from '@angular/core';
import { TvShow } from '../../../models/tv-show';
import { SharedModule } from '../../../../core/shared.module';
import { MiniPreviewComponent } from '../../mini-preview/mini-preview.component';
import { tns } from 'tiny-slider';

@Component({
    selector: 'app-tv-shows-carousel',
    standalone: true,
    imports: [SharedModule, MiniPreviewComponent],
    templateUrl: './tv-shows-carousel.component.html',
    styleUrl: './tv-shows-carousel.component.scss',
    //encapsulation: ViewEncapsulation.None,
})
export class TvShowsCarouselComponent implements AfterContentInit, OnInit {
    @Input() isTopRanking!: string;
    @Input() tvShows: TvShow[] = [];
    @Input() title!: string;

    @Output() mouseOverHandler = new EventEmitter();
    @Output() mouseLeaveHandler = new EventEmitter();
    @Output() mouseClickHandler = new EventEmitter();

    @ViewChild('slideItems', { static: true }) sliderElement: any;

    private slider: any = null;
    protected boxClass = 'tv-shows-carousel';

    protected sliderSettings = {
        slideBy: 6,
        autoplay: false,
        edgePadding: 55,
        mouseDrag: true,
        //dots: false,
        nav: true,
        controls: false,
        loop: true,
        responsive: {
            320: {
                edgePadding: 0,
                items: 2,
                slideBy: 1,
                mouseDrag: true,
            },
            768: {
                edgePadding: 55,
                mouseDrag: false,
                items: 6,
                slideBy: 6,
            },
            992: {
                edgePadding: 35,
                items: 6,
                slideBy: 6,
            },
            1200: {
                edgePadding: 45,
                items: 6,
                slideBy: 6,
            },
            1600: {
                edgePadding: 55,
                items: 6,
                slideBy: 6,
            },
            3840: {
                edgePadding: 100,
                items: 10,
                slideBy: 10,
            },
        },
    };

    constructor() {
        afterNextRender(
            async () => {
                //this.listenForDomReady();
            },
            { phase: AfterRenderPhase.Write }
        );
    }
    ngOnInit(): void {
        if (this.isTopRanking !== undefined) {
            this.boxClass = 'top-ranking-tv-shows-carousel';
        }
    }

    ngAfterContentInit(): void {
        this.initSlider();
    }

    onMouseClick(tvShow: TvShow) {
        this.mouseClickHandler.emit(tvShow);
    }

    onMouseOver(e: MouseEvent | FocusEvent, tvShow: TvShow) {
        const targetElement = (e.target as HTMLElement).closest(
            "[class*='slider__item ']"
        );
        this.mouseOverHandler.emit({ targetElement, tvShow });
    }

    onMouseLeave() {
        this.mouseLeaveHandler.emit();
    }

    findOutCorneredElements() {
        const nthItem = this.sliderElement.nativeElement.querySelector(
            '.tns-slide-cloned'
        )
            ? 2
            : 1;
        this.sliderElement.nativeElement
            .querySelectorAll('.corner-start, .corner-end')
            .forEach((elem: any) =>
                elem?.classList.remove('corner-start', 'corner-end')
            );
        this.sliderElement.nativeElement
            .querySelector(
                `.tns-item:nth-child(${nthItem} of .tns-slide-active)`
            )
            ?.classList.add('corner-start');
        this.sliderElement.nativeElement
            .querySelector(`.tns-item:nth-last-child(2 of .tns-slide-active)`)
            ?.classList.add('corner-end');
    }

    onNavigated() {
        this.findOutCorneredElements();
        this.sliderElement.nativeElement.closest(
            'div[class$="__slider-wrapper"]'
        ).dataset.navigated = '1';
    }

    prev() {
        this.slider.goTo('prev');
    }

    next() {
        this.slider.goTo('next');
    }

    attachEventsToClonedItems() {
        this.sliderElement.nativeElement
            .querySelectorAll('.tns-slide-cloned')
            .forEach((clonedItem: HTMLElement) => {
                const foundShow = this.tvShows.find(
                    tvShow => tvShow.name === clonedItem.dataset['name']
                ) as TvShow;

                clonedItem.addEventListener('click', () => {
                    this.onMouseClick(foundShow);
                });

                clonedItem.addEventListener('mouseover', e => {
                    this.onMouseOver(e, foundShow);
                });

                clonedItem.addEventListener('mouseleave', () =>
                    this.onMouseLeave.bind(this)
                );
            });
    }

    initSlider(): void {
        if (typeof window === 'undefined') {
            return;
        }

        import('tiny-slider').then(Tinyslider => {
            const tns = Tinyslider.tns || Tinyslider.default.tns;
            this.slider = tns({
                ...this.sliderSettings,
                container: this.sliderElement.nativeElement,
            });
            this.findOutCorneredElements();
            this.slider.events.on('indexChanged', () => this.onNavigated());
            this.attachEventsToClonedItems();
        });
    }
}
