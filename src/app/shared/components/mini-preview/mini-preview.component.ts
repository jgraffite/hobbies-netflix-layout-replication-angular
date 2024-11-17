import { Component, ElementRef, EventEmitter, HostListener, Output, ViewChild } from '@angular/core';
import { SharedModule } from '../../../core/shared.module';
import { MaturityRatingBoxComponent } from '../commons/maturity-rating-box/maturity-rating-box.component';
import { TvShow } from '../../models/tv-show';
import { YouTubePlayer } from '@angular/youtube-player';
import { VideoController } from '../../core/video-controller';

@Component({
    selector: 'app-mini-preview',
    standalone: true,
    imports: [SharedModule, YouTubePlayer, MaturityRatingBoxComponent],
    templateUrl: './mini-preview.component.html',
    styleUrl: './mini-preview.component.scss',
})
export class MiniPreviewComponent extends VideoController {
    @ViewChild(YouTubePlayer) override videoPlayer!: YouTubePlayer;
    @ViewChild('miniPreviewBox') miniPreviewBox!: ElementRef<HTMLElement>;

    @Output() expandClickHandler = new EventEmitter();

    protected isDisplayed: boolean = false;
    protected tvShow: TvShow | null = null;

    private timeout!: any;
    private timeout2!: any;

    @HostListener('mouseleave', [])
    onMouseLeave() {
        //console.log(e.target);
        this.miniPreviewBox.nativeElement.classList.remove(
            'corner-start',
            'corner-end'
        );
        this.isVideoPlaying = false;
        this.closeMiniPreviewBox();
    }

    public onClickToExpand() {
        this.expandClickHandler.emit(this.tvShow);
    }

    closeMiniPreviewBox() {
        this.isVideoPlaying = false;
        this.isDisplayed = false;
        setTimeout(() => {
            this.miniPreviewBox.nativeElement.style.top = `-100vw`;
            this.miniPreviewBox.nativeElement.style.left = `-100vh`;
        }, 500);

        this.stopVideo();
    }

    private setBoxDimensions(targetElement: HTMLElement) {
        const rect = targetElement.getBoundingClientRect();
        const vWidth = window.scrollX;
        const vHeight = window.scrollY;

        const left = rect.left + vWidth - 10;
        const top = rect.top + vHeight;

        const width = rect.width + rect.width * 0.5;

        this.miniPreviewBox.nativeElement.style.width = `${width}px`;

        this.miniPreviewBox.nativeElement.classList.add('showed');
        this.miniPreviewBox.nativeElement.style.top = `${top}px`;
        this.miniPreviewBox.nativeElement.style.left = `${left}px`;
    }

    public show(targetElement: HTMLElement, tvShow: TvShow) {
        if (targetElement.classList.contains('corner-start')) {
            this.miniPreviewBox.nativeElement.classList.add('corner-start');
        }
        if (targetElement.classList.contains('corner-end')) {
            this.miniPreviewBox.nativeElement.classList.add('corner-end');
        }

        if (window.scrollY === 0) {
            return;
        }

        this.isDisplayed = false;
        clearTimeout(this.timeout);
        clearTimeout(this.timeout2);

        this.timeout2 = setTimeout(() => {
            this.tvShow = tvShow;
            this.playVideo();
            // if (videoPlayerSourceType === VideoType.HTML) {
            //     video().poster = item.querySelector('img').src;
            // }
        }, 500);

        this.timeout = setTimeout(() => {
            this.setBoxDimensions(targetElement);

            this.isDisplayed = true;
        }, 600);
    }

    public hide() {
        this.closeMiniPreviewBox();
    }

    public clearTimeouts() {
        clearTimeout(this.timeout);
        clearTimeout(this.timeout2);
    }
}
