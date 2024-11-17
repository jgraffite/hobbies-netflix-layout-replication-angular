import { Component, ElementRef, ViewChild } from '@angular/core';
import { SharedModule } from '../../../core/shared.module';
import { MaturityRatingBoxComponent } from '../commons/maturity-rating-box/maturity-rating-box.component';
import { VideoController } from '../../core/video-controller';
import { YouTubePlayer } from '@angular/youtube-player';
import { TvShow } from '../../models/tv-show';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-tv-show-preview',
    standalone: true,
    imports: [SharedModule, YouTubePlayer, MaturityRatingBoxComponent],
    templateUrl: './tv-show-preview.component.html',
    styleUrl: './tv-show-preview.component.scss',
})
export class TvShowPreviewComponent extends VideoController {
    @ViewChild(YouTubePlayer) override videoPlayer!: YouTubePlayer;

    @ViewChild('previewModalWrapper')
    previewModalWrapper!: ElementRef<HTMLElement>;

    public isModalOpen: boolean = false;
    public tvShow!: TvShow | null;
    public isEpisodesPopupOpen: boolean = false;
    private pageTitle = `Netflix In Angular`;

    public constructor(public translate: TranslateService) {
        super();
        this.playerConfig.autoplay = 0;
    }

    public show(tvShow: TvShow) {
        this.isModalOpen = true;
        this.tvShow = tvShow;
        document.title = `${tvShow?.name} - ${this.pageTitle}`;
        document.body.classList.add('preview-modal-opened');
        this.previewModalWrapper.nativeElement.scrollTo({ top: 0 });

        if (window.matchMedia('(min-width: 768px)').matches) {
            setTimeout(() => this.playVideo(), 2000);
            this.muteVideo();
        }
    }

    public closePreviewModal(e: MouseEvent, byWrapper = false) {
        if (byWrapper && e.target !== this.previewModalWrapper.nativeElement) {
            return;
        }

        document.title = this.pageTitle;
        document.body.classList.remove('preview-modal-opened');
        this.isModalOpen = false;
        this.isEpisodesPopupOpen = false;
        setTimeout(() => (this.tvShow = null), 1000);
        this.stopVideo();
    }

    public toggleEpisodesPopup(forceClose = false) {
        this.isEpisodesPopupOpen = forceClose
            ? false
            : !this.isEpisodesPopupOpen;
    }
}
